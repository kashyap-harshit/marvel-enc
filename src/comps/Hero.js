import React, { Component } from 'react'

export class Hero extends Component {
    constructor(props) {
        super(props)
    }
    

    render() {
        return (
            <div className='hero-s' onClick={()=>{ this.props.slugChanger(this.props.slug)}}>
                <p >{this.props.name}</p>
            </div>
        )
    }
}

export default Hero
