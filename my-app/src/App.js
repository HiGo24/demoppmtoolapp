import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard';
import Header from './Components/Layout/Header';
import AddProject from './Components/projects/AddProject';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router , Route } from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./store";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/addProject" component={AddProject} />
        </Router>
      </Provider>
    );
  }
}

export default App;
