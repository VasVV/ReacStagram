import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Dashboard from './dashboard';
import Signup from './Signup';



function App() {
  return (

    <Router>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/signup' component={Signup} />
      </Switch>

    </Router>
    // <div className="App">
    //   Hello
    // </div>
  );
}

export default App;
