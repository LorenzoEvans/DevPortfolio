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
     <Pane display="flex" heigh={240}>
      <Tablist>
       {this.state.tabs.map((tab, index) => (
        <SidebarTab>
          Hi
        </SidebarTab>
       ))}
      </Tablist>
      <Pane>
       {this.Componentstate.tabs.map((tab, index) => (
        <Pane>

         <Paragraph>Hey</Paragraph>
        </Pane>
       ))}
      </Pane>
     </Pane>
    )
  }
}

export default Home 