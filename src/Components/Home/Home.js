import React, { Component } from 'react'
import './Home.css'
import { Box, Button, Grid, Image, Menu, Tabs, Tab } from 'grommet'



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

    return (
      <div>
        <Tabs className={"nav-tabs"}>
          <Tab title="tab 1">
            <Box pad="medium">One</Box>
          </Tab>
          <Tab title="tab 2">
            <Box pad="medium">Two</Box>
          </Tab>
        </Tabs>


      <Grid
      className={"grid-content"}
      rows={["200px", "200px"]}
      columns={['xsmall', 'medium']}
      gap={"medium"}
      areas={[
        {name: 'nav', start: [0, 0], end: [0, 1]},
        ]}
      >
      <Box gridArea={"nav"} background={"light-5"}/>
      </Grid>

      </div>
    );
  }
}

export default Home
