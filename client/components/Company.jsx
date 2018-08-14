import React from 'react'
// import {withRouter} from 'react-router-dom'

import {getCompany, rateCompany} from '../apiClient'

class Company extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: 0,
      companyName: '',
      sector: '',
      symbol: '',
      zipCode: 0,
      timesRated: 0,
      totalRating: 0,
      averageRating: 0,
      givenRating: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.back = this.back.bind(this)
  }

  componentDidMount () {
    const id = Number(this.props.match.params.id)
    getCompany(id)
      .then(res => {
        this.setState({
          id: res.body.company[0].id,
          companyName: res.body.company[0].companyName,
          sector: res.body.company[0].sector,
          symbol: res.body.company[0].symbol,
          zipCode: res.body.company[0].zipCode,
          timesRated: res.body.company[0].timesRated,
          totalRating: res.body.company[0].totalRating
          // averageRating: res.body.company[0].totalRating / res.body.company[0].timesRated
        }, () => {
          this.setState(() => {
            const number = this.state.totalRating / this.state.timesRated
            return {averageRating: Number(number.toString().split('', 4).join(''))}
          })
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
      totalRating: (this.state.totalRating + this.state.givenRating)
    }, () => {
      rateCompany(this.state)
        .then(() => {
          this.componentDidMount()
        })
    })
  }

  back (e) {
    // return this.props.history.push('/')
    return this.props.history.goBack()
  }

  // .then(() => this.props.history.push('/profile'))

  render () {
    return (
      <div className='app'>
        <div>
          <h1>{this.state.companyName} ({this.state.symbol})</h1>
          <h2>Sector: {this.state.sector}</h2>
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
          <br />
          {/* <a href="javascript:history.back()">Go back</a> */}
          <button onClick={this.back}>Back</button>
        </div>
      </div>
    )
  }
}

export default Company
// export default withRouter(Company)
