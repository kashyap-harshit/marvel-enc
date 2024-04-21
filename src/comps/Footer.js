import React, { Component } from 'react'

export class Footer extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  componentDidUpdate = (preProp, preState, snapshot)=>{
    if(preProp.isPhone!==this.props.isPhone){
      console.log("footer small phone");
    }
  }
  render() {
    return (
      <>
      <footer><p>programmerGuy &copy; 2023</p></footer>
    </>
    )
  }
}

export default Footer
