import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import './home.css'
import { useAuth } from '../hooks/authHooks'
import axios from 'axios'

function Home() {

    const [isLogin,setIsLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    
    const { login, logout, token } = useAuth();

    const changeName = (e) => {
        setName(e.target.value)
    };

    const changeEmail = (e) => {
        setEmail(e.target.value)
    };

    const changePassword = (e) => {
        setPassword(e.target.value)
    };

    const changeIsLogin = () => {
        setIsLogin(!isLogin)
    };

    

    const authorization = async (e) => {
        e.preventDefault();
        try {
             await axios.post("http://localhost:5000/user/login",{
                email,
                password
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                 login(response.data.token, response.data.id);
            })
        } catch (error) {
            console.log(error)
        }
    }
    
    // React.useEffect(() => {

    // }, [token])
    
        return (
        <div className='container'>
            <div className="main">
                {isLogin?
                    <h1>Регистарция</h1>
                    :
                    <h1>Авторизация</h1>
                }
                
                <form>
                    {isLogin&&
                        <input name='name' type="text" placeholder='Введите ваше Имя' onChange={changeName}/>
                    }
                    <input name='email' type="email" placeholder='Введите email' onChange={changeEmail}/>
                    <input name='password' type="password" placeholder='Введите пароль' onChange={changePassword}/>
                    {isLogin?
                        <button>Регистрация</button>
                        :
                        <button onClick={authorization}>Войти</button>
                    }
                </form>
                {isLogin ?
                            <div onClick={changeIsLogin}>
                                Есть аккаунт? <NavLink to={Home}>Войдите!</NavLink>
                            </div>
                            :
                            <div onClick={changeIsLogin}>
                                Нет аккаунта? <NavLink to={Home}>Зарегистрируйся!</NavLink>
                            </div>
                    }
            </div>
        </div>
    )
}

export default Home
