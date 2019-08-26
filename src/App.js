import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
import Landing from './Components/Landing/Landing'
import HomePage from './Components/Home/Home'



class App extends React.Component {

 constructor(props) {
  super(props)
  this.state = {
    onLanding: true,
   }
  this.handleState = this.handleState.bind(this)

 }

 handleState = () => {
  this.setState({
   onLanding: !this.onLanding
  })
 }

 render () {

  const routes = {
   "/home": () => <HomePage />
  }
  return (
   <>
    <Switch>
     <Route exact path="/" component={Landing}/>
     <Route exact path="/home" component={HomePage}/>
    </Switch>
   </>
  );
 }
}

export default App;
