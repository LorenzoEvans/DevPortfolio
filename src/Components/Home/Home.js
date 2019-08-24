import React, { Component } from 'react'
import './Home.css'
import { Grommet, Box, Button, Grid, Image, Menu, Tabs, Tab, Carousel,  Clock } from 'grommet'
import { TreeOption } from 'grommet-icons'

class Home extends Component {
 constructor(props) {
   super(props)

   this.state = {
      tabs: ['About', 'Projects', 'Writing', 'Art', 'Contact'],
      position: 'left',
      visible: false
   }
 }



  render() {
      const theme = {
      global: {
      edgeSize: {
      small: "10px"
      },
        elevation: {
          light: {
            small: "0px 1px 5px rgba(12, 67, 170, 0.50)",
            medium: "0px 3px 8px rgba(32, 34, 112, 0.50)"
          }
        }
      },
      tabs: {
        borderBottomWidth: "medium",
        background: "dark-3",
        border: undefined,
        gap: "90px",
        justify: "start",
        flex: {
        "grow" : true,
        "shrink": false
        }
      },
      tab: {
        active:{
          // background: "light-3",
          color: "neutral-3"
        },
        border: undefined,
        color: "white",
        pad: {
        bottom: "light-2",
        horizontal: "small",
        borderBottomStyle: {
        width: "90px"
        },
        border: undefined
        },
      }
      }
    return (
      <div>
        <Grommet theme={theme}>
          <Tabs className={"nav-tabs"} >
            <Tab title="About" style={{width: "90px" ,borderRight: "2px solid black", borderTop: "2px solid black", borderWidth: "4px", borderBottomWidth: "4px"}}>
              <Box pad="small">One</Box>
            </Tab>
            <Tab title="Projects" style={{width: "90px" ,borderBottom: "2px solid black", borderLeft: "2px solid black", borderWidth: "4px", borderBottomWidth: "4px"}}>
              <Box pad="small">Two</Box>
            </Tab>
            <Tab title="Art" style={{width: "90px" , borderRight: "2px solid black", borderTop: "2px solid black", borderWidth: "4px", borderBottomWidth: "4px"}}>
              <Box pad="small">Two</Box>
            </Tab>
            <Tab title="Writing" style={{width: "90px" ,borderLeft: "2px solid black", borderTop: "2px solid black", borderWidth: "4px", borderBottomWidth: "4px"}}>
              <Box pad="small">Two</Box>
            </Tab>
            <Tab title="Music" style={{width: "90px" ,borderRight: "2px solid black", borderBottom: "2px solid black", borderWidth: "4px", borderBottomWidth: "4px"}}>
              <Box pad="small">Two</Box>
            </Tab>
          </Tabs>
        </Grommet>
      </div>
    );
  }
}

export default Home
