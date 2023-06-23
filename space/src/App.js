import logo from './logo.svg';
import './App.css';
import { Routes, Route, useLocation, Navigate} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import {ErrorBoundary} from "react-error-boundary";

import ErrorFallback from './components/ErrorFallback/ErrorFallback';
import Landing from './components/landing/Landing';
import NavBar from './components/navbar/NavBar';
import News from './components/news/News';
import Register from './components/register/Register';
import Login from './components/login/LogIn';



const Admin = lazy(() => import('./components/admin/Admin'))
function App() {
  const location = useLocation();
  return (
    <div className="App">
       {(location.pathname !== "/" || location.pathname == "/") && <NavBar />}
      <Routes>
        <Route exact path= "/" element={<Landing/>}/>
        <Route exact path= "/news" element={<News/>}/>
        <Route path = "/register" element={<Register/>}/>
        <Route path='/login' element={<Login />} />
        <Route path = "/admin" element ={
            <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => Navigate("/") }>
                          
                <Suspense>
                    <Admin />
                </Suspense>
            </ErrorBoundary > } />
       
        <Route path = "*"/>
            // page not found 
        

      </Routes>
    </div>
  );
}

export default App;
