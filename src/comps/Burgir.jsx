import React, { Component } from 'react'

export class Burgir extends Component {
  constructor(props) {
    super(props)
    this.state = {
      click: false
    }
  }
  burgirClicked = () => {
    this.props.changeBurgir()
    this.setState({
      click: !this.state.click
    })
  }
  burgirStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "11px"
  }
  lineStyle = {
    backgroundColor: "black",
    height: "6px",
    width: "44px",
    margin: "3px 0px",
    transition: "0.2s all"
  }
  clickedStyle = {
    ...this.lineStyle,
    transform: "rotate(45deg)",
    position: "absolute"
  }
  render() {
    return (
      <div style={this.burgirStyle} className='burgir' onClick={this.burgirClicked}>
        <div style={this.state.click ? {
          ...this.lineStyle, transform: "rotate(45deg)",
          position: "absolute"
        } : this.lineStyle} className="line"></div>
        <div style={this.state.click ? {
          ...this.lineStyle, opacity: "0"
        } : this.lineStyle} className="line"></div>
        <div style={this.state.click ? {
          ...this.lineStyle, transform: "rotate(135deg)",
          position: "absolute"
        } : this.lineStyle} className="line"></div>
      </div>
    )
  }
}

export default Burgir
