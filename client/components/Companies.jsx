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
      companies: [],
      sector: ''
      // filter: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
    // this.applyFilter = this.applyFilter.bind(this)
    this.resetFilter = this.resetFilter.bind(this)
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

  handleFilter (e) {
    e.preventDefault()
    this.setState({
      sector: e.target.value,
      companies: this.state.companies.filter(company => {
        return company.sector === e.target.value
      })
    })
  }

  resetFilter (e) {
    this.setState({
      companies: []
    }, () => {
      this.handleClick(e)
    }
    )
  }

  // handleFilter (e) {
  //   e.preventDefault()
  //   this.setState({
  //     sector: e.target.value
  //   }, () => {
  //     this.state.sector
  //       ? this.setState({
  //         companies: this.state.companies.filter(company => {
  //           return company.sector === e.target.value
  //         })
  //       })
  //       : this.handleClick(e)
  //   })
  // }

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
        <div className='app-container'>
          <h1 className='company-finder'>Company Finder</h1><br />
          <h2>Choose my distance</h2>
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

          {(this.state.companies.length && this.state.loading === 'done')
            ? <div>
              <h5>Filter by sector: </h5>
              <select name="sector" onChange={this.handleFilter}>
                <option value='' selected> -- select an option -- </option>
                {/* Could map over an array of sectors to simplify */}
                <option value="Consumer Discretionary">Consumer Discretionary</option>
                <option value="Consumer Staples">Consumer Staples</option>
                <option value="Energy">Energy</option>
                <option value="Financials">Financials</option>
                <option value="Health Care">Health Care</option>
                <option value="Industrials">Industrials</option>
                <option value="Information Technology">Information Technology</option>
                <option value="Materials">Materials</option>
                <option value="Utilities">Utilities</option>
              </select>
              <button onClick={this.resetFilter}>Reset filter</button>
            </div>
            : <div></div>
          }

          {((!this.state.companies.length) && (this.state.loading === 'done'))
            ? <h5>There are no {this.state.sector && <h5>{this.state.sector}</h5>}companies in that area</h5>
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
      </div>
    )
  }
}

export default Companies
