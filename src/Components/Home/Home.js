import React, { Component } from 'react'
import './Home.css'
import { Grommet, Box, Button, Grid, Image, Menu, Tabs, Tab } from 'grommet'
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
      global: {},
      tabs: {
        gap: "90px",
        justify: "start",
        flex: {
        "grow" : true,
        "shrink": false
        }
      },
      }
    return (
      <div>
        <Grommet theme={theme}>
          <Tabs className={"nav-tabs"}>
            <Tab title="About">
              <Box pad="medium">One</Box>
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
