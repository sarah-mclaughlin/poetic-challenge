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
      loading: 'no',
      companies: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    // this.clear = this.clear.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick (e) {
    e.preventDefault()
    this.setState({
      loading: 'yes'
    }, () => {
      getCompanies(this.state)
        .then(res => {
          this.setState({
            companies: res.body.companies,
            loading: 'done'
          })
        })
    })
  }

  // clear () {
  //   this.setState({
  //     zipCode: 0,
  //     distance: 0,
  //     units: '',
  //     loading: 'no',
  //     companies: []
  //   })
  // }

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
        {this.state.loading === 'yes' && <h5>Loading...</h5>}
        {((!this.state.companies.length) && (this.state.loading === 'done'))
          ? <h5>There are no companies in that area</h5>
          : <div>
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
        }
        {/* {this.state.companies.length && <button onClick={this.clear}>Clear</button>} */}
      </div>
    )
  }
}

export default Companies
