import React, { Component } from 'react'

export class Footer extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  footerStyle = {

  }
  componentDidMount = ()=>{
    if(this.props.isDesktop){
      
    }
    else if(this.props.isLaptop){
      this.footerStyle = {
        position : "relative"
      }
    }
    else if(this.props.isTablet){
      this.footerStyle = {
        position : "relative"
      }
    }
    else if(this.props.isSmallPhone){
      this.footerStyle = {
        position : "relative"
      }
    }
  }
  componentDidUpdate = (preProp, preState, snapshot)=>{
    if(preProp.isPhone!==this.props.isPhone){
      console.log("footer small phone");
    }
  }
  render() {
    return (
      <>
      <footer style={this.footerStyle}><p>programmerGuy &copy; 2023</p></footer>
    </>
    )
  }
}

export default Footer
