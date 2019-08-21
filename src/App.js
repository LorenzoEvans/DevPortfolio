import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
import Landing from './Components/Landing/Landing'
import Home from './Components/Home/Home'
import { Router } from '@reach/router'



class App extends React.Component {


 render () {
  return (
   <>
    <Router>
     <Landing path="/" />
     <Home path="/" />
    </Router>
   </>
  );
 }
}

export default App;
