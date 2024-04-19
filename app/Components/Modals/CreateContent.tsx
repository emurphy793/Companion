"use client";
import { useGlobalState } from "@/app/context/globalProvider";
import React, {useState} from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import styled from "styled-components";

function CreateContent() {
    //these are used to store the values of the input fields
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [completed, setCompleted] = useState(false);
    const [important, setImportant] = useState(false);

    const {theme} = useGlobalState();

    //this switch statement is used to handle the different input fields
    const handleChange = (name: string) => (e: any) => {
        switch(name) {
            case 'title':
                setTitle(e.target.value);
                break;
            case 'description':
                setDescription(e.target.value);
                break;
            case 'date':
                setDate(e.target.value);
                break;
            case 'completed':
                setCompleted(e.target.checked);
                break;
            case 'important':
                setImportant(e.target.checked);
                break;
            default:
                break;    
        }
    }

    //this function is used to handle the form submission
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const task = {
            title,
            description,
            date,
            completed,
            important
        };

        try {
            const res = await axios.post('/api/tasks', task);

            if(res.data.error) {
                toast.error(res.data.error);
            }
            toast.success("Task successfully created");
        } catch (error) {
            toast.error("Something went wrong with task post request");
            console.log("ERROR POSTING TASK: ", error);
        }
    };

    //this is the form that will be rendered
  return (
    <CreateContentStyled onSubmit={handleSubmit} theme={theme}>
        <h1>Create a Task</h1>
        <div className='input-control'>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' value={title} name='title' onChange={handleChange("title")} placeholder='Create a Task' />
        </div>
        <div className='input-control'>
            <label htmlFor='description'>Description</label>
            <textarea value={description} name='description' 
                onChange={handleChange("description")} placeholder='Task Description'>
            </textarea>
        </div>
        <div className='input-control'>
            <label htmlFor='date'>DueDate</label>
            <input type='date' id='date' value={date} name='date' onChange={handleChange("date")} placeholder='Create a Task' />
        </div>
        <div className='input-control'>
            <label htmlFor='completed'>Completed</label>
            <input type='checkbox' id='completed' value={completed.toString()} name='completed' onChange={handleChange("completed")} />
        </div>    
        <div className='input-control'>
            <label htmlFor='important'>Important</label>
            <input type='checkbox' id='important' value={important.toString()} name='important' onChange={handleChange("important")} />
        </div>   

        <div className='submit-btn'>
            <button type='submit'>
                <span>Submit</span>
            </button>
        </div>
    </CreateContentStyled>
  )
}

const CreateContentStyled = styled.form`
  > h1 {
    font-size: clamp(1.2rem, 5vw, 1.6rem);
    font-weight: 600;
  }

  color: ${(props) => props.theme.colorGrey1};

  .input-control {
    position: relative;
    margin: 1.6rem 0;
    font-weight: 500;

    @media screen and (max-width: 450px) {
      margin: 1rem 0;
    }

    label {
      margin-bottom: 0.5rem;
      display: inline-block;
      font-size: clamp(0.9rem, 5vw, 1.2rem);

      span {
        color: ${(props) => props.theme.colorGrey3};
      }
    }

    input,
    textarea {
      width: 100%;
      padding: 1rem;

      resize: none;
      background-color: ${(props) => props.theme.colorGreyDark};
      color: ${(props) => props.theme.colorGrey2};
      border-radius: 0.5rem;
    }
  }

  .submit-btn button {
    transition: all 0.35s ease-in-out;

    @media screen and (max-width: 500px) {
      font-size: 0.9rem !important;
      padding: 0.6rem 1rem !important;

      i {
        font-size: 1.2rem !important;
        margin-right: 0.5rem !important;
      }
    }

    i {
      color: ${(props) => props.theme.colorGrey0};
    }

    &:hover {
      background: ${(props) => props.theme.colorPrimaryGreen} !important;
      color: ${(props) => props.theme.colorWhite} !important;
    }
  }

  .toggler {
    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;

    label {
      flex: 1;
    }

    input {
      width: initial;
    }
  }
`;

export default CreateContent;
