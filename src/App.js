import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './Components/Landing/Landing'


const EnterButton = () => {

 return (
  <div  className="button-div">
   <button className="enter-button">
    Enter
   </button>
  </div>

 )
}
class App extends React.Component {

 constructor(props) {
  super(props)
 
  this.state = {
    onLanding: true
  }
 }

EnterButton = () => {

  return (
   <div  className="button-div">
    <button className="enter-button">
     Enter
    </button>
   </div>
 
  )
 }

 render () {
  return (
   <>
      <div className="background">
      <div className="overlay">
       <div className="title" >La Maison De Lorenzo</div>
       <EnterButton />
       <div className="title2" >La Maison De Lorenzo</div>
      </div>
     </div>
   </>
  );
 }
}

export default App;
