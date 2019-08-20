import React, { Component } from 'react'
import { Pane, Tablist, SidebarTab, Paragraph } from 'evergreen-ui';



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
     <Pane
     height={120}
     width={240}
     display="flex"
     alignItems="center"
     justifyContent="center"
     background="neutral.dark"
     border="2px solid green"
     >
      <span> One </span>
      <span> Two </span>
      <span> Three </span>
     </Pane>
    )
  }
}

export default Home 