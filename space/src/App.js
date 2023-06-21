import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <div className="App">
      <Switch>
        
        <Route exact path= "/">

          //landing
        </Route>
        <Route path = "/">
           //navbar?
        </Route>
        <Route path = "*">
            // page not found 
        </Route>

      </Switch>
    </div>
  );
}

export default App;
