import React, { Component } from 'react'
import Spinner from './Spinner'

export class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cardStyle: {},
      thumbStyle: {},
      detailsStyle: {}
    }
  }
  forEachPhone = () => {
    this.setState({
      cardStyle: {
        gridTemplateRows: "0.4fr 0.6fr",
        gridTemplateColumns: "none"
      },

      thumbStyle: {
        border: "none",
        borderBottom: `2px solid ${this.props.red}`,
        padding: "10px 0px"
      },

      detailsStyle: { height: "29rem" }

    })
  }
  colorChanger = () => {
    if (this.props.supe.biography.publisher.toLowerCase().includes("marvel")) {
      this.props.providerChanger("marvel");
      document.documentElement.style.setProperty('--red', '#c60c29');
    } else if (this.props.supe.biography.publisher.toLowerCase().includes("dc")) {
      this.props.providerChanger("dc");
      document.documentElement.style.setProperty('--red', '#0476F2');
    }
    else {
      this.props.providerChanger("else");
      document.documentElement.style.setProperty('--red', 'grey');

    }
  }
  componentDidMount() {
    this.colorChanger()
    if (this.props.isDesktop) {
      console.log("this is a desktop");
    }
    else if (this.props.isLaptop) {
      console.log("this is a laptop");
      
    }else if(this.props.isTablet){

      this.forEachPhone()
      this.setState({
        detailsStyle: { height: "32rem" }
      })
    } 
    else if (this.props.isPhone) {
      this.forEachPhone()

      console.log("this is a phone");
    } else if (this.props.isSmallPhone) {
      this.forEachPhone()
      console.log("this is a very small phone");
    }  
  }

  componentDidUpdate(preProp, preState, snapshot) {
    if (preProp.supe.name !== this.props.supe.name) {


      this.colorChanger()
    }
  }
  render() {
    return (
      <>

        <div className="card" style={this.state.cardStyle}>
          <div className="thumbnail" style={this.state.thumbStyle}>

            <img src={this.props.supe.images.lg} alt="" /></div>
          <div className="details" style={this.state.detailsStyle}>

            <div className="things"><span>Full Name : </span>{this.props.supe.biography.fullName}</div>
            <div className="things"><span>Publisher : </span>{this.props.supe.biography.publisher}</div>
            <div className="things"><span>height : </span>{this.props.supe.appearance.height[0]} or {this.props.supe.appearance.height[1]}</div>
            <div className="things"><span>weight : </span>{this.props.supe.appearance.weight[1]}</div>
            <div className="things"><span>race : </span>{this.props.supe.appearance.race}</div>
            <div className="things"><span>gender : </span>{this.props.supe.appearance.gender}</div>
            <div className="things"><span>Groups : </span>{this.props.supe.connections.groupAffiliation}</div>
            <div className="things"><span>relatives : </span>{this.props.supe.connections.relatives}</div>
            <div className="things"><span>first appear</span> : {this.props.supe.biography.firstAppearance}</div>
            <div className="things"><span>aliases : </span>{this.props.supe.biography.aliases}</div>
            <div className="things"><span>alignment : </span>{this.props.supe.biography.alignment}</div>
            <div className="things"><span>occupation : </span>{this.props.supe.work.occupation}</div>
            <div className="things"><span>base : </span>{this.props.supe.work.base}</div>
            <div className="things"><span>combat : </span>{this.props.supe.powerstats.combat}</div>
            <div className="things"><span>durability : </span>{this.props.supe.powerstats.durability}</div>
            <div className="things"><span>intelligence : </span>{this.props.supe.powerstats.intelligence}</div>
            <div className="things"><span>power : </span>{this.props.supe.powerstats.power}</div>
            <div className="things"><span>speed : </span>{this.props.supe.powerstats.speed}</div>
            <div className="things"><span>strength : </span>{this.props.supe.powerstats.strength}</div>

          </div>
        </div>

      </>
    )
  }
}

export default Card
