import React from 'react'
// import {withRouter} from 'react-router-dom'

import {getCompany, rateCompany, addComment} from '../apiClient'

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
      comments: [],
      averageRating: 0,
      givenRating: 0,
      comment: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleComment = this.handleComment.bind(this)
    this.submitComment = this.submitComment.bind(this)
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
          totalRating: res.body.company[0].totalRating,
          comments: res.body.company[0].comments || []
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

  handleComment (e) {
    this.setState({
      comment: e.target.value
    })
  }

  submitComment () {
    const data = {
      id: this.state.id,
      comment: this.state.comment
    }
    addComment(data)
      .then(() => {
        this.componentDidMount()
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
        <div className='app-container'>
          <div>
            <h1 className='company-name'>{this.state.companyName} ({this.state.symbol})</h1>
            <h3>Sector: {this.state.sector}</h3>
            {/* <h3>Zip code: {this.state.zipCode}</h3> */}
            <h3>Average rating: {this.state.averageRating ? <h3>{this.state.averageRating}</h3> : <h4>This company has no ratings</h4>}</h3>
          </div>
          <div>
            <h4>Rate this company overall out of 5</h4>
            <form>
              {/* Could map over an array of numbers to simplify */}
              <input type="radio" onChange={this.handleChange} name="rating" value="1" /> 1 - terrible<br />
              <input type="radio" onChange={this.handleChange} name="rating" value="2" /> 2 - poor<br />
              <input type="radio" onChange={this.handleChange} name="rating" value="3" /> 3 - neutral<br />
              <input type="radio" onChange={this.handleChange} name="rating" value="4" /> 4 - good<br />
              <input type="radio" onChange={this.handleChange} name="rating" value="5" /> 5 - excellent<br />
            </form>
            <button onClick={this.handleClick}>Commit rating</button>
            <br />
            <br />
            <div>
              <h4>Leave a comment about this company: </h4><input type="text" onChange={this.handleComment} name='comment' />
              <button onClick={this.submitComment}>Submit comment</button>
            </div>
            <br />
            <div>
              <h5>Comments about this company:</h5>
              <ul>
                {this.state.comments.map(comment => {
                  return (
                    <li key={comment}>{comment}</li>
                  )
                })}
              </ul>
            </div>
            {/* <a href="javascript:history.back()">Go back</a> */}
            <button onClick={this.back}>Home</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Company
