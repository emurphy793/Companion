"use client";
import { useGlobalState } from '@/app/context/globalProvider';
import formatDate from '@/app/utils/formatDate';
import { edit, trash } from '@/app/utils/Icons';
import React from 'react'
import styled from 'styled-components';

interface Props {
    title: string;
    description: string;
    date: string;
    isCompleted: boolean;
    id: string;
}

function TaskItem({title, description, date, isCompleted, id}: Props) {

    const {theme, deleteTask} = useGlobalState();
  return (
    <TaskItemStyled theme={theme}>
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
          <p className='date'>
              {/*formatDate({date})*/date}
          </p>
          <div className='task-footer'>
              {isCompleted ? (
                  <button className='completed'>Completed</button>
                  ) : (
                  <button className='incomplete'>Incomplete</button>
              )}
              <button className="edit">{edit}</button>
              <button className="delete" onClick={() => {
                  deleteTask(id);
              }}>{trash}</button>
          </div>
        </div>
    </TaskItemStyled>
  );
}

const TaskItemStyled = styled.div`
  padding: 1.2rem 1rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.borderColor2};
  box-shadow: ${(props) => props.theme.shadow7};
  border: 2px solid ${(props) => props.theme.borderColor2};

  height: 16rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .date{
    margin-top: 25%;
  }

  >h1{
    font-size: 1.5rem;
    font-weight: 600;
  }

  .task-footer{
    display: flex;
    gap: 1.2rem;
    align-items: center;

    button{
      border: none;
      outline: none;
      cursor: pointer;
    }

    i{
        font-size: 1.4rem;
        color: ${(props) => props.theme.colorGrey2};
    }
  }

  .edit{
    margin-left: auto;
  }

  .completed, 
  .incomplete{
    display: inline-block;
    padding: 0.4rem 1rem;
    background-color: ${(props) => props.theme.colorDanger};
    border-radius: 30px;
  }

  .completed{
    background-color: ${(props) => props.theme.colorGreenDark};
  }
`;

export default TaskItem
