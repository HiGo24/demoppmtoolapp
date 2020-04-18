import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard';
import Header from './Components/Layout/Header';
import AddProject from './Components/projects/AddProject';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
        <Header/>
    </div>
    <Route path="/addProject" component={AddProject}/>
    <Route path="/dashboard" component={Dashboard}/>
    
    </Router>
  );
}

export default App;
