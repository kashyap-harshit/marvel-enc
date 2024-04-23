import React, { Component } from 'react'
import Spinner from './Spinner'

export class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cardStyle: {},
      thumbStyle: {}
    }
  }
  forEarchPhone = () => {
    this.setState({
      cardStyle: {
        gridTemplateRows: "0.4fr 0.6fr",
        gridTemplateColumns: "none"
      },

      thumbStyle: {
        border: "none",
        borderBottom: `2px solid ${this.props.red}`
      }
    })
  }
  componentDidMount() {
    if (this.props.isDesktop) {
      console.log("this is a desktop");
    }
    else if (this.props.isLaptop) {
      console.log("this is a laptop");
      this.setState({

      })
    }else if (this.props.isTablet){
      this.forEarchPhone()
      console.log("this is a tablet");
    } 
    else if (this.props.isPhone) {
      this.forEarchPhone()
      console.log("this is a phone");
    } else if (this.props.isSmallPhone) {
      this.forEarchPhone()
      console.log("this is a very small phone");
    }
  }
  render() {
    return (
      <>

        <div className="card" style={this.state.cardStyle}>
          <div className="thumbnail" style={this.state.thumbStyle}>

          </div>
          <div className="details preview-h2" style={{ color: "grey" }}>
            <h2>search for any superhero</h2>

          </div>
        </div>

      </>
    )
  }
}

export default Card
