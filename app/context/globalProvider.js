"use client";

import React, { createContext, useState, useContext} from "react";
import themes from "./themes.js";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { toast } from "react-hot-toast";

export const GlobalContext = createContext();
export const GlobalUpdateContext = createContext();



export const GlobalProvider = ({children}) => { 
    const {user} = useUser();
    const [selectedTheme, setSelectedTheme] = useState(0); //themes.js contains array of custom css object (0=darkModeDefault, 1=lightMode)
    const [isLoading, setIsLoading] = useState(false);

    const [tasks, setTasks] = useState([]);

    const theme = themes[selectedTheme];

    const allTasks = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get("/api/tasks")

            console.log(res.data);
            setTasks(res.data);
        } catch (error) {
            console.log(error);

        }
    };

    const deleteTask = async (id) => {
        try {
            const res = await axios.delete(`/api/tasks/${id}`);

            allTasks();
        } catch (error) {
            console.log(error);
            toast.error("Failed to delete task");
        }
    };

    const completedTasks = tasks.filter((task) => task.isCompleted === true);
    const importantTasks = tasks.filter((task) => task.isImportant === true);
    const incompleteTasks = tasks.filter((task) => task.isCompleted === false);

    React.useEffect(() => {
        if(user) allTasks();
    }, [user]);//re-render when user changes

    return (
        <GlobalContext.Provider 
            value={{
                theme,
                tasks,
                deleteTask,
                isLoading,
                completedTasks,
                importantTasks,
                incompleteTasks,
            }}
        >
            <GlobalUpdateContext.Provider value={{}}>
                {children}
            </GlobalUpdateContext.Provider>
        </GlobalContext.Provider>
    );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdateContext);