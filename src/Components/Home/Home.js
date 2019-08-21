import React, { Component } from 'react'
import {Pane, Tablist, SidebarTab, Paragraph, majorScale} from 'evergreen-ui';
import './Home.css'


class Home extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      tabs: ['About', 'Projects', 'Writing', 'Art', 'Contact'],
      selectedIndex: 0
   }
 }
 
  render() {
    return (
    <div className={"pane-styling"}>
     <Pane
     height={majorScale(12)}
     width={240}
     display="flex"
     alignItems="center"
     justifyContent="center"
     border="default"
     background="overlay"
     >
       <div className="inner-pane">

      About
       </div>

     </Pane>
      <Pane
        height={majorScale(12)}
        width={240}
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="default"
        background="overlay"
      >
        <div className="inner-pane">

        Projects
        </div>

      </Pane>
      <Pane
        height={majorScale(12)}
        width={240}
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="default"
        background="overlay"
      >
        <div className="inner-pane">

        Writing
        </div>

      </Pane>
      <Pane
        height={majorScale(12)}
        width={240}
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="default"
        background="overlay"
      >
        <div className="inner-pane">

        Art
        </div>

      </Pane>
      <Pane
        height={majorScale(12)}
        width={240}
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="default"
        background="overlay"
      >
        <div className="inner-pane">

        Contact
        </div>

      </Pane>
    </div>
    )
  }
}

export default Home 