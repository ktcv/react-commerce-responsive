import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages'
// import SigninPage from './pages/signin'

const App = () => {
  return (
    <Router>
      {/* <Switch> */}
      <Route path='/' component={Home} />
      {/* <Route path='/signin' component={SigninPage} exact /> */}
      {/* </Switch> */}
    </Router>
  )
}

export default App
