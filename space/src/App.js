import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Landing from './components/landing/Landing';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/app" element={<NavBar/>}/>
        <Route exact path= "/" element={<Landing/>}/>
      
       
            
        <Route path = "*">
            // page not found 
        </Route>

      </Routes>
    </div>
  );
}

export default App;
