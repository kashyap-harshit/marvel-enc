import './App.css';
import Header from './comps/Header';
import Footer from './comps/Footer';
import Card from './comps/Card';
import Search from './comps/Search';
import { useMediaQuery } from 'react-responsive'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

// import { useEffect, useState } from 'react';

import React, { Component } from 'react'


let withMediaQuery = (WrappedComponent) => {
  return (props) => {
    const isSmallPhone = useMediaQuery({ query: '(min-width: 300px)' });
    const isPhone = useMediaQuery({ query: '(min-width: 400px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
    const isLaptop = useMediaQuery({ query: '(min-width: 1024px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
    return <WrappedComponent {...props} isSmallPhone={isSmallPhone} isPhone={isPhone} isTablet={isTablet} isLaptop={isLaptop} isDesktop={isDesktop}></WrappedComponent>
  }

}

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mainCompStyle: {},
      red: "#c60c29",
      provider: "marvel"
    }
  }
  providerChanger = (provider) => {
    console.log(provider);
    this.setState({
      provider: provider
    })
  }
  componentDidMount = () => {


     if (this.props.isLaptop) {
      this.setState({
        mainCompStyle: { margin: "20px 300px 0px" }
      })
    }
    else if (this.props.isTablet) {
      this.setState({
        mainCompStyle: {
          margin: "3rem 8rem 2rem",
          height: "79rem"
        }
      })


    } else if (this.props.isPhone) {

      this.setState({
        mainCompStyle: {
          margin: "60px 30px 3vh",
          height: "110vh"
        },


      })
    } else if (this.props.isSmallPhone) {

      this.setState({
        mainCompStyle: {
          margin: "60px 14px 4vh",
          height: "110vh"
        },


      })
    }


  }
  render() {
    return (
      <div>
        <Router>
          <div className="App">
            <Header provider={this.state.provider} isSmallPhone={this.props.isSmallPhone} isPhone={this.props.isPhone} isTablet={this.props.isTablet} isLaptop={this.props.isLaptop} isDesktop={this.props.isDesktop} />
            <div className="body">
              <div className="mainComp" style={this.state.mainCompStyle}>
                <Routes>
                  <Route exact path='/' element={
                    <Search providerChanger={this.providerChanger} red={this.state.red} isSmallPhone={this.props.isSmallPhone} isPhone={this.props.isPhone} isTablet={this.props.isTablet} isLaptop={this.props.isLaptop} isDesktop={this.props.isDesktop} />
                  } />
                </Routes>
              </div>
              <Footer isSmallPhone={this.props.isSmallPhone} isPhone={this.props.isPhone} isTablet={this.props.isTablet} isLaptop={this.props.isLaptop} isDesktop={this.props.isDesktop} />

            </div>


          </div>
        </Router>
      </div>
    )
  }
}

export default withMediaQuery(App)
