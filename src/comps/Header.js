import React, { Component } from 'react'
import logo from '../assets/logo.png'

export class Header extends Component {
    render() {
        return (
            <div>
                <div className='nav'>
                    <div className="logo">
                    <img src={logo} alt="logo" />
                    </div>
                    <div className="links">
                        <ul className='navLinks'>
                            <li><a href="/">HOME</a></li>
                            <li><a href="/about">ABOUT</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}

export default Header
