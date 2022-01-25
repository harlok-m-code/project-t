import React, { useState, useEffect } from 'react'
import './main.css'
import { useAuth } from '../hooks/authHooks'
import axios from 'axios';
import Delete from '@mui/icons-material/Delete';
import AddTask from './AddTask';
import Tasks from './Tasks';




const Main = () => {
    
    
    return (
        <div className='mainn'>
            <div className="container">
                <AddTask/>
                <Tasks/>
            </div>
            
        </div>
    )
}

export default Main

