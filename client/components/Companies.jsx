import React from 'react'
import {Link} from 'react-router-dom'

import {getCompanies} from '../apiClient'

class Companies extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      zipCode: 0,
      distance: 0,
      units: '',
      companies: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick () {
    getCompanies(this.state)
      .then(res => {
        this.setState({
          companies: res.body.companies
        })
      })
  }

  render () {
    return (
      <div className='app'>
        <h1>Choose my distance</h1>
        <p>
          Zip code: <input name='zipCode' onChange={this.handleChange} /><br />
          Distance: <input name='distance' onChange={this.handleChange} /><br />
          Units:
          <select name="units" onChange={this.handleChange}>
            <option disabled selected value> -- select an option -- </option>
            <option value="kilometres">Kilometres</option>
            <option value="miles">Miles</option>
          </select>
          <br />
          <button onClick={this.handleClick}>Find companies</button>
        </p>
        {/* this.state.companies.length ? do below : 'there are no companies within that distance'  */}
        <div>
          <ul>
            {this.state.companies.map(company => {
              return (
                <li key={company.companyName}>
                  <Link to={`/company/${company.id}`}>{company.companyName}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default Companies
