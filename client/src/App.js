import './App.css';
import { useRoutes } from './routes';
import { useAuth } from './hooks/authHooks'
import { useEffect } from 'react'
import Header from './component/Header';

function App() {
  const { token } = useAuth()
  const isLogin = !!token;
  const routes = useRoutes(token);
  
  // console.log(isLogin)


  return (
       <div className="App">
          <Header/>
          { 
            routes
           }
      </div>
   
  );
}

export default App;
