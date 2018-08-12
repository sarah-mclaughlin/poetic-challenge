import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Companies from './Companies'
import Company from './Company'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Route exact path='/' component={Companies} />
        <Route exact path='/company/:id' component={Company} />
      </div>
    </Router>
  )
}

export default App

// import React from 'react'
// import {BrowserRouter as Router, Route} from 'react-router-dom'

// import {rateCompany} from '../apiClient'

// import Companies from './Companies'
// import Company from './Company'

// class App extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//     }
//     this.submitRating = this.submitRating.bind(this)
//   }

//   submitRating (data) {
//     rateCompany(data)
//     // rateCompany(data, (error) => {
//     //   error ? this.setState({error}) : this.refreshList()
//     // })
//   }

//   render () {
//     return (
//       <Router>
//         <div className='app'>
//           <Route exact path='/' component={Companies} />
//           <Route exact path='/company/:id' render={() => {
//             return <Company submitRating={this.submitRating} />
//           }} />
//         </div>
//       </Router>
//     )
//   }
// }

// export default App
