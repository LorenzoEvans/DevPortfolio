import React, { Component } from 'react'
import "./Landing.css"
import { NavLink } from 'react-router-dom'
import HomePage from '../Home/Home'


const routes = {
"/home": () => <HomePage />
}

const NoPageFound = () => {
  return(
    <div>
    Sorry!
    </div>
  )
}



function Landing()  {

    return (
     <div className="background">
       <div className="title" >La Maison De #0xLE</div>
       <NavLink className={"classRandom"} exact to="/home" activeStyle={{textDecoration: 'none'}}>
       Enter
       </NavLink>
       <div className="title2" >La Maison De #0xLE</div>
     </div>
    )
}



export default Landing