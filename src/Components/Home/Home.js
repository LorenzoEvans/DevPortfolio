import React, { Component } from 'react'
import './Home.css'
import { Grommet, Box, Button, Grid, Image, Menu, Tabs, Text, Tab, Carousel,  Clock } from 'grommet'
import { Projects } from 'grommet-icons'

const RichTabTitle = ({ icon, label }) => (
  <Box direction="row" align="center" gap="xsmall" margin="xsmall">
    {icon}
    <Text size="small">
      <strong>{label}</strong>
    </Text>
  </Box>
);

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
      small: "8px"
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
        background: "light-5",
        border: undefined,
        gap: "110px",
        justify: "start",

        header: {
        background: undefined,
        },
        paddingTop: "5px"
      },
      tab: {
      background: "transparent",
        color: "#582C49",
        active:{
          color: "#E2B3A9",
        },
        border: undefined,
        pad: {
        bottom: "light-2",
        horizontal: "small",
        borderBottomStyle: {
        width: "20px"
        },
        // border: undefined
        },
        hover: {
        border: "dark-2"
        }
      }
      }
    return (
      <div>
        <Grommet theme={theme}>
          <Tabs className={"nav-tabs"} >
            <Tab title="About" style={{width: "95px" ,borderRight: "2px solid black", borderTop: "2px solid black", borderWidth: "4px", borderBottomWidth: "4px"}}>
              <Box pad="small">One</Box>
            </Tab>
            <Tab title={<RichTabTitle icon={<Projects/>} label={"Projects"}/>} style={{width: "95px" ,borderBottom: "2px solid black", borderLeft: "2px solid black", borderWidth: "4px", borderBottomWidth: "4px"}}>
              <Box pad="small">Two </Box>
            </Tab>
            <Tab title="Art" style={{width: "95px" , borderRight: "2px solid black", borderTop: "2px solid black", borderWidth: "4px", borderBottomWidth: "4px"}}>
              <Box pad="small">Two</Box>
            </Tab>
            <Tab title="Writing" style={{width: "95px" ,borderLeft: "2px solid black", borderTop: "2px solid black", borderWidth: "4px", borderBottomWidth: "4px"}}>
              <Box pad="small">Two</Box>
            </Tab>
            <Tab title="Music" style={{width: "95px" ,borderRight: "2px solid black", borderBottom: "2px solid black", borderWidth: "4px", borderBottomWidth: "4px"}}>
              <Box pad="small">Two</Box>
            </Tab>
          </Tabs>
        </Grommet>
      </div>
    );
  }
}

export default Home
