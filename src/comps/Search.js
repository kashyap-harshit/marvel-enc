
import React, { Component } from 'react'
import Card from './Card'
import Hero from './Hero'
import Spinner from './Spinner';
import CardDup from './CardDup';



export class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: "",
      filteredHeroes: [],
      supes: [],
      slug: "",
      loading: false,
      mainCompStyle: { margin: "0px 300px" },
      inputStyle: {},
      heroStyle: {}

    }
  }
  buttonStyle = {
    height: "33px"
  }
  slugChanger = (slug) => {
    this.setState({
      loading: true,
      slug: slug,


    })
    // this.state.filteredHeroes.splice(0, this.state.filteredHeroes.length)
    this.setState({
      loading: false
    })
    console.log(this.state.filteredHeroes.length);
  }


  queryChanger = (val) => {
    this.setState({

      query: val,

    })
  }
  componentDidMount = async () => {
    this.setState({
      loading: true
    })
    let url = "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json";
    let response = await fetch(url);
    let parsedData = await response.json();
    this.setState({
      supes: parsedData,
      loading: false
    })
    if (this.props.isDesktop) {

    }
    else if (this.props.isLaptop) {


    } 
    else if (this.props.isPhone) {

      this.buttonStyle = {
        height: "42px"
      }
      this.setState({
        inputStyle: {
          width: "230px",
          height: "42px"
        },
        heroStyle: { width: "230px" }
      })
    } 
    else if (this.props.isSmallPhone) {

      this.buttonStyle = {
        height: "33px"
      }
      this.setState({
        inputStyle: { width: "210px" },
        heroStyle: { width: "210px" }
      })
    } 
    

  }
  componentDidUpdate(preProp, preState, snapshot) {
    if (preState.query !== this.state.query) {
      if (this.state.query.length > 2) {

        this.setState({
          loading: true,
          filteredHeroes: this.state.supes.filter(e => { //no need to clear it before updating because it is not pushing instead it is equalling everytime the query changes


            return e.name.toLowerCase().includes(this.state.query);
          }),

        })
        this.setState({
          loading: false
        })

      }
      else if (this.state.query.length === 0) {
        this.setState({
          filteredHeroes: []

        })
      }
      console.log(this.state.filteredHeroes);
    }
    if (preState.slug !== this.state.slug) {
      this.setState({
        query: this.state.supes.filter(e => {
          return e.slug === this.state.slug
        })[0].name
      })
    }

  }
  render() {
    return (
      <>
        <div className='search-p'>


          <form className='search' style={this.state.filteredHeroes.length > 0 ? { marginTop: "130px" } : {}} >
            <div className="input">
              <input style={this.state.inputStyle} value={this.state.query} onFocus={(e) => { e.target.select() }} onChange={(e) => this.queryChanger(e.target.value)} type="text" id='s-charc' className='inputText' />
              {this.state.filteredHeroes.length > 0 &&
                <div className="heroes-c" style={this.state.heroStyle}>
                  {this.state.filteredHeroes.length > 0 ? this.state.filteredHeroes.map((element, index) => {
                    return <Hero slugChanger={this.slugChanger} slug={element.slug} key={index} name={element.name}></Hero>

                  }) : <Spinner></Spinner>}</div>}


            </div>
            <button style={this.buttonStyle}  onClick={(e) => {
              e.preventDefault()

            }} className='btn input-btn' >Search</button>
            {/* <div>
            <button className="clear" onClick={(e) => {
              e.preventDefault()

            }}>Clear</button></div> */}
          </form>
          <div className="heroes">


          </div>
        </div>

        {this.state.slug.length > 0 ?
          <Card providerChanger={this.props.providerChanger} red={this.props.red} isSmallPhone={this.props.isSmallPhone} isPhone={this.props.isPhone} isTablet={this.props.isTablet} isLaptop={this.props.isLaptop} isDesktop={this.props.isDesktop} loading={this.state.loading} supe={this.state.supes.filter((e) => {
            return e.slug === this.state.slug
          })[0]} ></Card> : <CardDup red={this.props.red} isSmallPhone={this.props.isSmallPhone} isPhone={this.props.isPhone} isTablet={this.props.isTablet} isLaptop={this.props.isLaptop} isDesktop={this.props.isDesktop} loading={this.state.loading}></CardDup>}
      </>
    )
  }
}

export default (Search) 
