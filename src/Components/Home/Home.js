import React, { Component } from 'react'
import './Home.css'
import { Box, Button, Grid, Image, Menu } from 'grommet'



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
      <Grid
      rows={['70vw', "70vw"]}
      columns={['100vh', '100vh']}
      areas={[
          {name: 'background', start: [0,0], end: [1, 0]}]}
      >
        <Box gridArea={"background"}>

        </Box>

      <Grid
      className={"grid-content"}
      rows={['small', 'small']}
      columns={['xsmall', 'medium']}
      gap={"medium"}
      areas={[
        {name: 'header', start: [0, 0], end: [1, 0]},
        {name: 'nav', start: [0, 1], end: [0, 1]},
        {name: 'main', start: [1, 1], end: [1, 1]}
        ]}
      >
      <Box className={"grid-content"} gridArea={"header"} background={"brand"}/>
      <Box gridArea={"nav"} background={"light-5"}/>
      <Box gridArea={"main"} background={"light-2"} />
      </Grid>
      </Grid>

      </div>
    );
  }
}

export default Home
