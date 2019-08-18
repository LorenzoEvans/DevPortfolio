import React from 'react';
import './Landing.css'
import { Button } from 'shards-react'

const EnterButton = () => {

 return (
  <div  className="button-div">
   <button className="enter-button" outline pill theme="secondary">
    Enter
   </button>
  </div>

 )
}

class Landing extends React.Component {

  render() {
    return (
      <div className="background">
      <div className="overlay">
       <div className="title" >La Maison De Lorenzo</div>
       <EnterButton />
       <div className="title2" >La Maison De Lorenzo</div>
      </div>
     </div>
    );
  }
}

export default Landing;