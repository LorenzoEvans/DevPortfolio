import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Landing from './Components/Landing/Landing'
import HomePage from './Components/Home/Home'
import {Grommet} from 'grommet'
import {theme} from './Components/Home/Styling/ConstantComponents'

class App extends React.Component {
 render () {
  return (
   <>
    <Grommet theme={theme}>
     <Switch>
      <Route exact path="/" component={Landing}/>
      <Route exact path="/home" component={HomePage}/>
     </Switch>
    </Grommet>
   </>
  );
 }
}

export default App;
