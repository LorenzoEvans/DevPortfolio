import React, { Component } from 'react'
import {Pane, Tablist, SidebarTab, Paragraph, majorScale} from 'evergreen-ui';
import './Home.css'
import { Box, Button, Grid, Image } from 'grommet'

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
    <>
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
      <Box className={"grid-content"} gridArea={"header"} background={"brand"}/>*/}
      <Box gridArea={"nav"} background={"light-5"}/>*/}
      <Box gridArea={"main"} background={"light-2"} />*/}
      </Grid>
     {/*<Pane*/}
     {/*height={majorScale(12)}*/}
     {/*width={240}*/}
     {/*display="flex"*/}
     {/*alignItems="center"*/}
     {/*justifyContent="center"*/}
     {/*border="default"*/}
     {/*background="overlay"*/}
     {/*>*/}
     {/*  <div className="inner-pane">*/}

     {/* About*/}
     {/*  </div>*/}

     {/*</Pane>*/}
     {/* <Pane*/}
     {/*   height={majorScale(12)}*/}
     {/*   width={240}*/}
     {/*   display="flex"*/}
     {/*   alignItems="center"*/}
     {/*   justifyContent="center"*/}
     {/*   border="default"*/}
     {/*   background="overlay"*/}
     {/* >*/}
     {/*   <div className="inner-pane">*/}

     {/*   Projects*/}
     {/*   </div>*/}

     {/* </Pane>*/}
     {/* <Pane*/}
     {/*   height={majorScale(12)}*/}
     {/*   width={240}*/}
     {/*   display="flex"*/}
     {/*   alignItems="center"*/}
     {/*   justifyContent="center"*/}
     {/*   border="default"*/}
     {/*   background="overlay"*/}
     {/* >*/}
     {/*   <div className="inner-pane">*/}

     {/*   Writing*/}
     {/*   </div>*/}

     {/* </Pane>*/}
     {/* <Pane*/}
     {/*   height={majorScale(12)}*/}
     {/*   width={240}*/}
     {/*   display="flex"*/}
     {/*   alignItems="center"*/}
     {/*   justifyContent="center"*/}
     {/*   border="default"*/}
     {/*   background="overlay"*/}
     {/* >*/}
     {/*   <div className="inner-pane">*/}

     {/*   Art*/}
     {/*   </div>*/}

     {/* </Pane>*/}
     {/* <Pane*/}
     {/*   height={majorScale(12)}*/}
     {/*   width={240}*/}
     {/*   display="flex"*/}
     {/*   alignItems="center"*/}
     {/*   justifyContent="center"*/}
     {/*   border="default"*/}
     {/*   background="overlay"*/}
     {/* >*/}
     {/*   <div className="inner-pane">*/}

     {/*   Contact*/}
     {/*   </div>*/}

     {/* </Pane>*/}
      </Grid>
     </>
    )
  }
}

export default Home 