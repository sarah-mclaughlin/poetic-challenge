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
