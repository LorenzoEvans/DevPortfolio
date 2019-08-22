import React, { Component } from 'react'
import "./Landing.css"
import { Router, Link } from '@reach/router'
import { NavLink } from 'react-router-dom'
import {useRoutes, A} from 'hookrouter'
import styled  from 'styled-components'
import Home from '../Home/Home'
// const EnterButton = () => {
//
//  return (
//   <div  >
//    <div >
//     Enter
//    </div>
//   </div>
//
//  )
// }

const StyledLink = styled(Link)`

border: 3px solid red;
  // @keyframes button-gradient {
  //   0% {background-position: 0% 50%}
  //   25% {background-position: 50% 75%}
  //   50% {background-position: 100% 50%}
  //   100% {background-position: 0% 50%}
  // }

  opacity: 0.7;
  textAlign: center;
  alignAontent: center;
  height: 400px ;
  width: 100%;
  color: rgba(138, 134, 139, 0.966);
  background: transparent ;
  margin: 200px 0px 0px 30vw ;
  background: repeating-linear-gradient(300deg, #837883, #582c49, #e2b3a9, #0d0a18, #707479,  #637181, rgb(51, 40, 68), #74b5be, #76638a);
  backgroundSize: 1400% 1400%;
  animation: button-gradient 20s ease-in-out infinite;
  box-shadow: 50px 50px 50px 50px #6F7983, rgb(149, 202, 255);

`

const routes = {
"/home": () => <Home />
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