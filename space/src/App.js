
import './App.css';
import { Routes, Route, useLocation, Navigate} from 'react-router-dom';
import { lazy, Suspense } from 'react';

import NavBar from './components/navbar/NavBar';
const Landing = lazy(() => import('./components/landing/Landing'))
const News = lazy(() => import('./components/news/News'))
const Register = lazy(() => import('./components/register/Register'))
const Login = lazy(() => import('./components/login/LogIn'))
const PictureOfDay = lazy(() => import('./components/PictureOfDay/PictureOfDay'))
const Admin = lazy(() => import('./components/admin/Admin'))
function App() {
  const location = useLocation();
  return (
    <div className="App">
       {(location.pathname !== "/" || location.pathname == "/") && <NavBar />}
      <Routes>
        <Route exact path= "/" element={<Suspense fallback={<div>Loading...</div>}><Landing/></Suspense>}/>
        <Route exact path= "/news" element={<Suspense fallback={<div>Loading...</div>}><News/></Suspense>}/>
        <Route path = "/register" element={<Suspense fallback={<div>Loading...</div>}><Register/></Suspense>}/>
        <Route path='/login' element={<Suspense fallback={<div>Loading...</div>}><Login /></Suspense>} />
        <Route path ="pic-of-day" element={<Suspense fallback={<div>Loading...</div>}><PictureOfDay/></Suspense>} />
        <Route path = "*"/>
            // page not found 
        

      </Routes>
    </div>
  );
}

export default App;
