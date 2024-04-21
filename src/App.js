import './App.css';
import Header from './comps/Header';
import Footer from './comps/Footer';
import Card from './comps/Card';
import Search from './comps/Search';
import { useMediaQuery } from 'react-responsive'

// import { useEffect, useState } from 'react';

import React, { Component } from 'react'


let withMediaQuery = (WrappedComponent) => {
  return (props) => {
    const isPhone = useMediaQuery({ query: '(min-width: 600px)' });
    const isLaptop = useMediaQuery({ query: '(min-width: 1024px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
    return <WrappedComponent {...props} isPhone={isPhone}  isLaptop={isLaptop} isDesktop={isDesktop}></WrappedComponent>
  }

}

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mainCompStyle: {},
      red: "#c60c29"
    }
  }
  componentDidMount = () => {
    if (this.props.isLaptop) {
      console.log("this is a laptop");
      this.setState({
        mainCompStyle: { margin: "30px 300px 0px" }
      })
    } else if (this.props.isPhone) {
      console.log("this is a phone");
      this.setState({
        mainCompStyle: { margin: "60px 50px 3vh", height: "110vh" },


      })
    }

    else if (this.props.isDesktop) {
      console.log("this is a desktop");
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="body">
          <div className="mainComp" style={this.state.mainCompStyle}>
            <Search red={this.state.red} isSmallPhone={this.props.isSmallPhone} isPhone={this.props.isPhone} isTablet={this.props.isTablet} isLaptop={this.props.isLaptop} isDesktop={this.props.isDesktop} />
            {/* <Card /> */}
          </div>
          <Footer isPhone={this.state.isPhone} isSmallPhone={this.props.isSmallPhone} />

        </div>


      </div>
    )
  }
}

export default withMediaQuery(App)
