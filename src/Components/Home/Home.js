import React, { Component } from 'react'
class Home extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      tabs: ['About', 'Projects', 'Writing', 'Art', 'Contact'],
      selectedIndex: 0
   }
 }
 
  render() {
   const { state } = this.state 
   const setState = this.setState
    return (
      <div>

      </div>
    )
  }
}

export default Home 