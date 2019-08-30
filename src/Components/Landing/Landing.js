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
       <span className={"title"} > La Maison De #0xLE
       </span>
       <NavLink className={"enter-button"} exact to="/home" activeStyle={{textDecoration: 'none'}}>
       Enter
       </NavLink>
       <span className={"title2"} >La Maison De #0xLE</span>
     </div>
    )
}



export default Landing