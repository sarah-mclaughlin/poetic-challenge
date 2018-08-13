import React from 'react'

import {getCompany, rateCompany} from '../apiClient'

class Company extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: 0,
      companyName: '',
      zipCode: 0,
      timesRated: 0,
      totalRating: 0,
      averageRating: 0,
      givenRating: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    const id = Number(this.props.match.params.id)
    getCompany(id)
      .then(res => {
        this.setState({
          id: res.body.company[0].id,
          companyName: res.body.company[0].companyName,
          zipCode: res.body.company[0].zipCode,
          timesRated: res.body.company[0].timesRated,
          totalRating: res.body.company[0].totalRating,
          averageRating: res.body.company[0].totalRating / res.body.company[0].timesRated
        })
      })
  }

  handleChange (e) {
    this.setState({
      givenRating: Number(e.target.value)
    })
  }

  handleClick (e) {
    e.preventDefault()
    this.setState({
      timesRated: this.state.timesRated + 1,
      totalRating: this.state.totalRating + this.state.givenRating
    }, () => {
      rateCompany(this.state)
        .then(() => {
          this.componentDidMount()
        })
    })
  }

  // handleClick () {
  //   this.setState({
  //     timesRated: this.state.timesRated + 1,
  //     totalRating: this.state.totalRating + this.state.givenRating
  //   })
  //   // .then(() => {
  //   //   this.props.submitRating(this.state)
  //   // })
  // }

  // handleSubmit (e) {
  //   e.preventDefault()
  //   rateCompany(this.state)
  //     .then(() => {
  //       this.componentDidMount()
  //     })
  // }

  // .then(() => this.props.history.push('/profile'))

  render () {
    return (
      <div className='app'>
        <div>
          <h1>{this.state.companyName}</h1>
          <h3>Zip code: {this.state.zipCode}</h3>
          <h1>Average rating: {this.state.averageRating}</h1>
        </div>
        <div>
          <h2>Rate this company out of 5</h2>
          <form>
            <input type="radio" onChange={this.handleChange} name="rating" value="1" /> 1<br />
            <input type="radio" onChange={this.handleChange} name="rating" value="2" /> 2<br />
            <input type="radio" onChange={this.handleChange} name="rating" value="3" /> 3<br />
            <input type="radio" onChange={this.handleChange} name="rating" value="4" /> 4<br />
            <input type="radio" onChange={this.handleChange} name="rating" value="5" /> 5<br />
          </form>
          <br />
          <button onClick={this.handleClick}>Commit rating</button>
          {/* <button onClick={this.handleSubmit}>Submit rating</button> */}
          <br />
        </div>
      </div>
    )
  }
}

export default Company
