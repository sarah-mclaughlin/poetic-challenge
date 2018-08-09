import React from 'react'

import {getSentiment, getCompanies} from '../apiClient'

class Sentiment extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      confidence: 0,
      sentiment: '',
      phrase: '',
      zipCode: 0,
      distance: 0,
      units: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick2 () {
    getSentiment(this.state.phrase)
      .then(res => {
        this.setState({
          confidence: res.body.confidence,
          sentiment: res.body.sentiment
        })
      })
  }

  handleClick () {
    getCompanies(this.state)
      .then(res => {
        // this.setState({
        //   confidence: res.body.confidence,
        //   sentiment: res.body.sentiment
        // })
      })
  }

  render () {
    return (
      <div className='app'>
        <h1>Sentiment analysis</h1>
        <p>
          <input name='phrase' onChange={this.handleChange} />
          <button onClick={this.handleClick2}>Get Sentiment</button>
        </p>
        {this.state.sentiment && <div>
          <p>Sentiment: {this.state.sentiment}</p>
          <p>Confidence: {this.state.confidence}</p>
        </div>}

        <h1>Choose my distance</h1>
        <p>
          Zip code: <input name='zipCode' onChange={this.handleChange} />
          Distance: <input name='distance' onChange={this.handleChange} />
          Units:
          <select name="units" onChange={this.handleChange}>
            <option disabled selected value> -- select an option -- </option>
            <option value="kilometres">Kilometres</option>
            <option value="miles">Miles</option>
          </select>
          <button onClick={this.handleClick}>Get Companies</button>
        </p>
      </div>
    )
  }
}

export default Sentiment
