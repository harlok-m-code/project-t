import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Delete from '@mui/icons-material/Delete';
import { useAuth } from '../hooks/authHooks'
import { useReview } from './reviews';

function Tasks() {

    const { logout } = useAuth();
    const { tasks, reviewTasks, filterTask, changeSearch, id } = useReview()

    const deleteHandler = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/task/${id}`)
            reviewTasks()
        } catch (error) {
            console.log(error)
        }
    }

        useEffect(() => {
            reviewTasks()
        },[])

  return <div>
  
        {tasks&&
                filterTask.map((task) => (
                    <div key={task.id} className="task">
                        <p className='name'>{task.task}</p>
                        <p  onClick={() => deleteHandler(task.id)}><Delete  className='delete'/></p>
                    </div>
                ))
                }
            <div className="search-div">
            <h3>Search</h3>
                <form onSubmit={e => e.preventDefault()}>
                    <input className='search-inp' type="text" placeholder='Search a Task' onChange={changeSearch}/>
                </form>
            </div>
  </div>;
}

export default Tasks;
