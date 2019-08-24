import React, { Component } from 'react'
import './Home.css'
import { Grommet, Box, Button, Grid, Image, Menu, Tabs, Tab, Carousel } from 'grommet'
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
        color: "white",
        pad: {
        bottom: "light-2",
        horizontal: "small",
        borderBottomStyle: {
        width: "90px"
        }
        },
        border: {
        width: "90px"
        }
      }
      }
    return (
      <div>
        <Grommet theme={theme}>
          <Tabs className={"nav-tabs"}>
            <Tab title="About">
              <Box pad="small">One</Box>
            </Tab>
            <Tab title="Projects">
              <Box pad="medium">Two</Box>
            </Tab>
            <Tab title="Art">
              <Box pad="medium">Two</Box>
            </Tab>
            <Tab title="Writing">
              <Box pad="medium">Two</Box>
            </Tab>
            <Tab title="Music">
              <Box pad="medium">Two</Box>
            </Tab>
          </Tabs>
        </Grommet>
      </div>
    );
  }
}

export default Home
