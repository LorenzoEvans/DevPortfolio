import React, { Component } from 'react'
import "./Landing.css"
import { Link } from 'react-router-dom'

const EnterButton = () => {

 return (
  <div  className="button-div">
   <Link to="/home" className="enter-button">
    Enter
   </Link>
  </div>

 )
}
export default class Landing extends Component {
  render() {
    return (
     <div className="background">
      <div className="overlay">
       <div className="title" >La Maison De Lorenzo</div>
       <EnterButton />
       <div className="title2" >La Maison De Lorenzo</div>
      </div>
     </div>
    )
  }
}
