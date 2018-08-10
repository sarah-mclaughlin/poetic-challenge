import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Sentiment from './Sentiment'
// import Company from './Company'

// class App extends React.Component {
//   render () {
//     return (
//       <div className='app'>
//         <Sentiment />
//       </div>
//     )
//   }
// }

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Route exact path='/' component={Sentiment} />
        {/* <Route path='/company/:id' component={Company} /> */}
      </div>
    </Router>
  )
}

export default App
