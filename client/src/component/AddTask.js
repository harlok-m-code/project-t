import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../hooks/authHooks';
import { useReview } from './reviews';


function AddTask() {

  const [task,setTask] = useState(null);
  const { id } = useAuth();
  const { reviewTasks, tasks } = useReview()

  const changeTask = (e) => {
      setTask(e.target.value)
  }

  const addTask = async(e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/task/add", {task, userId: id},
      {
        headers: {
          "Content-Type": "application/json"
        }
      })
      setTask('');
      
    } catch (error) {
      console.log(error)
    }
    reviewTasks()
  }

  useEffect(() => {
    reviewTasks()
  },[])

  console.log(1)
  return <div>
        <h3 className='tasks'>Add task</h3>
          <form>
            <input className='search' type="text" placeholder='Enter a task' onChange={changeTask}/>
            <button className='btn' onClick={addTask}>Add</button>
          </form>
            
  </div>;

}

export default AddTask;
