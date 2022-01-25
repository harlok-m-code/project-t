import axios from "axios";
import { useState } from 'react'



export const useReview = () => {

    const { id } = JSON.parse(localStorage.getItem('id'));
    const [tasks,setTasks] = useState([]);
    const [search,setSearch] = useState('');

    const changeSearch = (e) => {
        setSearch(e.target.value)
    }

    const reviewTasks = async () => {
        await axios.get(`http://localhost:5000/task/`, {params: {id}}).then(response => {
            setTasks(response.data)
        })
    }

    const filterTask = tasks.filter(({task}) => {
        return task.toLowerCase().includes(search.toLocaleLowerCase())
    })

    return { tasks, reviewTasks, filterTask, changeSearch, id }
}