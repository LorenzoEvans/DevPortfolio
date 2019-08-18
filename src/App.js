import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './Components/Landing/Landing'

class App extends React.Component {

 constructor(props) {
  super(props)
 
  this.state = {
    onLanding: true
  }
 }
 
 changePhase = () => {
  
 }
 render () {
  return (
    <>
{    this.state.onLanding ?  <Landing /> : <div>A word</div> }
    </>
  );
 }
}

export default App;
