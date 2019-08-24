import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
import Landing from './Components/Landing/Landing'
import Home from './Components/Home/Home'



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
   "/home": () => <Home />
  }
  return (
   <>
    <Switch>
     <Route exact path="/" component={Landing}/>
     <Route exact path="/home" component={Home}/>
    </Switch>
   </>
  );
 }
}

export default App;
