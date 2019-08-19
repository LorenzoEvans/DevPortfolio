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
   const setState = (index) => {this.setState({ selectedIndex: index})}
    return (
     <Pane display="flex" style={{border: '3px solid black'}} height={33}>
      <Tablist marginBottom={16} flexBasis={300} marginRight={0} >
       {this.state.tabs.map((tab, index) => (
        <SidebarTab
        key={tab}
        id={tab}
        style={{border: '2px solid black', color: "black"}}
        onSelect={() => setState(index) }
        isSelected={index === this.state.selectedIndex}
        aria-controls={`panel-${tab}`}
        >
          {tab}
        </SidebarTab>
       ))}
      </Tablist>
      <Pane padding={16} flex="1">
       {this.state.tabs.map((tab, index) => (
        <Pane
         key={tab}
         id={`panel-${tab}`}
         role="tabpanel"
         aria-labelledby={tab}
         aria-hidden={ index !== this.state.selectedIndex }
         display={index === this.state.selectedIndex ? 'block': 'none'}
        >

         <Paragraph>Panel {tab}</Paragraph>
        </Pane>
       ))}
      </Pane>
     </Pane>
    )
  }
}

export default Home 