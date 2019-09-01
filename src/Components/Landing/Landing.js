import React from 'react'
import "./Landing.css"
import { NavLink } from 'react-router-dom'
function Landing()  {

    return (
     <div className="background">
       <span className={"title"} > Lorenzo Evans
       <span className={"title3"} >CodeArtLogicBeauty</span>

       </span>
       <NavLink className={"enter-button"} exact to="/home" activeStyle={{textDecoration: 'none'}}>
       Enter
       </NavLink>
       <span className={"title2"} >La Maison De #0xLE</span>
     </div>
    )
}



export default Landing