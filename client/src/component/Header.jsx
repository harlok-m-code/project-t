import React from 'react';
import './header.css';
import { useAuth } from '../hooks/authHooks';
;


function Header() {

    const { logout, token } = useAuth();

  return <div className='header'>
    <div className="h-container">
        <h1 className='tasks'>Tasks</h1>
        {token&&
            <h3 onClick={logout} className='out'>Sign out</h3>
        }
        
    </div>
  </div>;
}

export default Header;


