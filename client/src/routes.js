import React from 'react'
import { Routes, Route, Navigate,useNavigate } from 'react-router-dom'
import Home from './component/Home'
import Main from './component/Main'


 export const useRoutes = (isLogin) => {

     if(isLogin){
          return (
           <Routes>
                <Route path="/login" element={<Main/>}/>
                <Route path="*" element={<Navigate to="/login"/>}/>
            </Routes>
            )
     }
    
         return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="/login" element={<Main/>}/> */}
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
         )
     
}


