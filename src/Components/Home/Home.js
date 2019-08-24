import React, { Component } from 'react'
import './Home.css'
// import { Box, Button, Grid, Image, Menu } from 'grommet'
import { Drawer, Button, Toolbar } from 'react-md';

// const MenuNav = () => {
//   return (
//     <Menu
//       label="Menu"
//       items={[
//         { label: 'First Action', onClick: () => {} },
//         { label: 'Second Action', onClick: () => {} },
//       ]}
//     />
//   )
// }



class Home extends Component {
 constructor(props) {
   super(props)

   this.state = {
      tabs: ['About', 'Projects', 'Writing', 'Art', 'Contact'],
      position: 'left',
      visible: false
   }
 }

  openDrawer = () => {
    this.setState({
    visible: !this.state.visible
    })
  }
  render() {
    const { visible, position } = this.state;
    const isLeft = position === 'left';

    return (
      <>
        <Button raised onClick={this.openDrawer}>
          Open Drawer Left
        </Button>
        <Button raised onClick={this.openDrawer}>
          Open Drawer Right
        </Button>
        <Drawer
          id="simple-drawer-example"
          type={Drawer.DrawerTypes.TEMPORARY}
          visible={visible}
          position={position}
          navItems={[9, 8]}
          onVisibilityChange={this.openDrawer}
          header={(
            <Toolbar
              className={"md-divider-border md-divider-border--bottom"}
            />
          )}
        />
      </>
    )
  }
}

export default Home
      // <Grid
      // rows={['70vw', "70vw"]}
      // columns={['100vh', '100vh']}
      // areas={[
      //     {name: 'background', start: [0,0], end: [1, 0]}]}
      // >
      //   <Box gridArea={"background"}>
      //
      //   </Box>
      //
      // <Grid
      // className={"grid-content"}
      // rows={['small', 'small']}
      // columns={['xsmall', 'medium']}
      // gap={"medium"}
      // areas={[
      //   {name: 'header', start: [0, 0], end: [1, 0]},
      //   {name: 'nav', start: [0, 1], end: [0, 1]},
      //   {name: 'main', start: [1, 1], end: [1, 1]}
      //   ]}
      // >
      // <Box className={"grid-content"} gridArea={"header"} background={"brand"}/>
      // <Box gridArea={"nav"} background={"light-5"}/>
      // <Box gridArea={"main"} background={"light-2"} />
      // </Grid>
      // </Grid>
