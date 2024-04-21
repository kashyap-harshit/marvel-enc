import React, { Component } from 'react'

export class Spinner extends Component {
    render() {
        return (
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        )
    }
}

export default Spinner
