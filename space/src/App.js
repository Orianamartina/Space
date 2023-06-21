import logo from './logo.svg';
import './App.css';
import { Routes, Route, useLocation} from 'react-router-dom';
import Landing from './components/landing/Landing';
import NavBar from './components/navbar/NavBar';

function App() {
  const location = useLocation();
  return (
    <div className="App">
       {(location.pathname !== "/" || location.pathname == "/") && <NavBar />}
      <Routes>
        <Route exact path= "/" element={<Landing/>}/>
       
            
        <Route path = "*">
            // page not found 
        </Route>

      </Routes>
    </div>
  );
}

export default App;
