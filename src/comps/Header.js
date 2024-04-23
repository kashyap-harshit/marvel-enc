import React, { Component } from 'react'
import logo from '../assets/logo.png'
import Burgir from './Burgir'
import { Link } from 'react-router-dom'
export class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            burgirClicked: false
        }
    }
    changeBurgir = () => {
        this.setState( {
            burgirClicked: !this.state.burgirClicked
        })
    }
    navPhonestyle = {
    }
    logoPhoneStyle = {

    }
    logoImgPS = {}
    linkStyle = {
        background: "#c60c29",
        transition: "0.2s all",
        justifyContent: "center",
        borderTop: "1px solid #a00019"

    }
    navLinkStyle = {
        flexDirection: "column"
    }
    componentDidUpdate = (preState, preProp, snapshot)=>{
        if(preProp.provider!==this.props.provider){
            if(this.props.provider==="dc"){
                this.linkStyle = {
                    ...this.linkStyle,
                    background : "#0d6efd"
                }
            }else if(this.props.provider==="marvel"){
                this.linkStyle = {
                    ...this.linkStyle,
                    background : "#c60c29"
                }
            }else{
                this.linkStyle = {
                    ...this.linkStyle,
                    background : "grey"
                }
            }
        }
    }
    componentDidMount = () => {
        if(this.props.isLaptop){
            this.navPhonestyle = {
                height: "4rem"
            } 
        }
        else if(this.props.isTablet){
            this.navPhonestyle = {
                height: "5rem"
            }
            this.logoPhoneStyle = {

            }
            this.logoImgPS = {
                width: "65%",
                marginLeft: "10px"
            }
        }
        else if (this.props.isSmallPhone) {
            this.navPhonestyle = {
                display: "flex",
                flexWrap: "nowrap",
                justifyContent: "space - between"
            }
            this.logoPhoneStyle = {
                display: "flex",
                justifyContent: "left"
            }
            this.logoImgPS = {
                width: "16%",
                marginLeft: "10px"
            }
        }
        else if(this.props.isPhone){
            this.navPhonestyle = {
                display: "flex",
                flexWrap: "nowrap",
                justifyContent: "space - between",
                height: "5rem"
            }
        }
    }

    render() {
        return (
            <div>
                <div className='nav' style={this.navPhonestyle}>
                    <div className="logo" style={this.logoPhoneStyle}>
                        <img style={this.logoImgPS} src={logo} alt="logo" />
                    </div>
                    {(this.props.isLaptop || this.props.isDesktop || this.props.isTablet) ? <div className="links">
                        <ul className='navLinks'>
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/about">ABOUT</Link></li>
                        </ul>
                    </div> : <Burgir provider={this.props.provider}  changeBurgir={this.changeBurgir} />}

                </div>
                {!(this.props.isLaptop || this.props.isDesktop) ? <div style={this.state.burgirClicked?this.linkStyle:{...this.linkStyle, display: "none"}} className="links">
                    <ul style={this.navLinkStyle} className='navLinks'>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                    </ul>
                </div>:""}
            </div>
        )
    }
}

export default Header
