import React from 'react'
import { useNavigate }  from 'react-router-dom';


export const useAuth = () => {
    const [token, setToken] = React.useState(null);
    const [id,setId] = React.useState(null);
    const [isReady, setIsReady] = React.useState(false);
    const navigate = useNavigate();

    const login =React.useCallback((jwt, userId) => {
        setToken(jwt)
        localStorage.setItem('token', JSON.stringify({
            token: jwt,
        }))
        setId(userId)
        localStorage.setItem('id', JSON.stringify({
            id:userId
        }))
    },[]) 

    const logout = () => {
        setToken(null)
        setId(null)
        setIsReady(false)
        localStorage.removeItem('token');
        localStorage.removeItem('id');
    }
    
    React.useEffect(() => {
        const dataId = JSON.parse(localStorage.getItem('id'));
        const data = JSON.parse(localStorage.getItem('token'))
        if(data && data.token && dataId && dataId){
            login(data.token, dataId.id)
        }
    }, [token])
    return { login, logout, isReady, token, id }
}