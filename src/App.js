import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'


const EnterButton = () => {

 return (
  <div  className="button-div">
   <div className="enter-button">
    Enter
   </div>
  </div>

 )
}
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
  const { onLanding } = this.state
  return (
   <>
      <div className="background">
      <div className="overlay">
       <div className="title" >La Maison De Lorenzo</div>
       <EnterButton onClick={() => this.handleState} />
       <div className="title2" >La Maison De Lorenzo</div>
      </div>
     </div>
   </>
  );
 }
}

export default App;
