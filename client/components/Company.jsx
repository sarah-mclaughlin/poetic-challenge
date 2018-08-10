import React from 'react'

import {getCompany} from '../apiClient'

class Company extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: 0,
      companyName: '',
      zipCode: 0,
      timesRated: 0,
      totalRating: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount () {
    const id = this.props.match.params.id
    getCompany(id)
      .then(res => {
        this.setState({
          id: res.body.company.id,
          companyName: res.body.company.companyName,
          zipCode: res.body.company.zipCode,
          timesRated: res.body.company.timesRated,
          totalRating: res.body.company.totalRating
          // givenRating: 0
        })
      })
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <div className='app'>
        <h1>You are at the company</h1>
        <h1>{this.state.companyName}</h1>
        <h1>{this.state.totalRating}</h1>
      </div>
    )
  }
}

export default Company
