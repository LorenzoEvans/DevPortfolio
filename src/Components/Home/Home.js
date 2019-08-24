import React, { Component } from 'react'
import './Home.css'
// import { Box, Button, Grid, Image, Menu } from 'grommet'
import {
Drawer,
Button,
Toolbar,
Avatar,
Divider,
FontIcon,
List,
ListItem,
Subheader,
} from 'react-md';

const Simple = () => (
  <div className="md-grid">
    <List className="md-cell md-paper md-paper--1">
      <ListItem primaryText="Inbox" />
      <ListItem primaryText="Starred" />
      <ListItem primaryText="Sent Mail" />
      <ListItem primaryText="Drafts" />
    </List>
    <List className="md-cell md-paper md-paper--1">
      <Subheader primaryText="Folders" />
      <ListItem
        leftAvatar={<Avatar icon={<FontIcon>folder</FontIcon>} />}
        rightIcon={<InfoIcon />}
        primaryText="Photos"
        secondaryText="Jan 9, 2014"
      />
      <ListItem
        leftAvatar={<Avatar icon={<FontIcon>folder</FontIcon>} />}
        rightIcon={<InfoIcon />}
        primaryText="Recipes"
        secondaryText="Jan 17, 2014"
      />
      <ListItem
        leftAvatar={<Avatar icon={<FontIcon>folder</FontIcon>} />}
        rightIcon={<InfoIcon />}
        primaryText="Work"
        secondaryText="Jan 28, 2014"
      />
      <Divider inset />
      <Subheader primaryText="Files" />
      <ListItem
        leftAvatar={<Avatar suffix="blue" icon={<FontIcon>insert_drive_file</FontIcon>} />}
        rightIcon={<InfoIcon />}
        primaryText="Vacation itinerary"
        secondaryText="Jan 20, 2014"
      />
      <ListItem
        leftAvatar={<Avatar suffix="amber" icon={<FontIcon>insert_photo</FontIcon>} />}
        rightIcon={<InfoIcon />}
        primaryText="Kitchen remodel"
        secondaryText="Jan 10, 2014"
      />
    </List>
    <List className="md-cell md-paper md-paper--1">
      <Subheader primaryText="Three line example" primary />
      <ListItem
        leftAvatar={<Avatar suffix="deep-purple">B</Avatar>}
        rightIcon={<StarIcon />}
        primaryText="Brunch this weekend?"
        secondaryText={'Ali Connors\nI\'ll be in your neighborhood sometime this week'}
        threeLines
      />
      <ListItem
        leftAvatar={<Avatar suffix="green">Q</Avatar>}
        rightIcon={<StarIcon />}
        primaryText="Summer BBQ"
        secondaryText={'to Alex, Scott, Jennifer\nWish I could come, but I\'m out of town this weekend.'}
        threeLines
      />
      <ListItem
        leftAvatar={<Avatar suffix="orange">A</Avatar>}
        rightIcon={<StarIcon />}
        primaryText="Oui Oui"
        secondaryText="Sandra Adams - Do you have Paris recommendations? Have you ever been?"
        threeLines
      />
    </List>
    <List className="md-cell md-paper md-paper--1">
      <ListItem primaryText="Additional information" />
      <ListItem primaryText="Website" renderChildrenOutside>
        <Button icon primary>public</Button>
      </ListItem>
      <ListItem primaryText="Mail" renderChildrenOutside>
        <Button icon>mail</Button>
      </ListItem>
      <ListItem
        leftAvatar={<Avatar icon={<FontIcon>folder</FontIcon>} />}
        primaryText="Work"
        secondaryText="Jan 28, 2014"
        renderChildrenOutside
      >
        <Button icon>share</Button>
      </ListItem>
    </List>
  </div>
);


const InfoIcon = () => <FontIcon>info</FontIcon>;
const StarIcon = () => <FontIcon>star</FontIcon>;


class Home extends Component {
 constructor(props) {
   super(props)

   this.state = {
      tabs: ['About', 'Projects', 'Writing', 'Art', 'Contact'],
      position: 'left',
      visible: false
   }
 }

  state = { visible: false, position: 'left' };

  openDrawerLeft = () => {
    this.setState({ visible: true, position: 'left' });
  };

  openDrawerRight = () => {
    this.setState({ visible: true, position: 'right' });
  };

  closeDrawer = () => {
    this.setState({ visible: false });
  };

  handleVisibility = (visible) => {
    this.setState({ visible });
  };

  render() {
    const { visible, position } = this.state;
    const isLeft = position === 'left';

    const closeBtn = <Button icon onClick={this.closeDrawer}>{isLeft ? 'arrow_back' : 'close'}</Button>;
    return (
      <div>
        <Button raised onClick={this.openDrawerLeft}>
          Open Drawer Left
        </Button>
        <Button raised onClick={this.openDrawerRight}>
          Open Drawer Right
        </Button>
        <Drawer
          id="simple-drawer-example"
          type={Drawer.DrawerTypes.TEMPORARY}
          visible={visible}
          divider={"true"}
          position={position}
          navItems={[<Simple/>]}
          onVisibilityChange={this.handleVisibility}
          header={(
            <Toolbar
              nav={isLeft ? null : closeBtn}
              actions={isLeft ? closeBtn : null}
              className="md-divider-border md-divider-border--bottom"
            />
          )}
        />
      </div>
    );
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
