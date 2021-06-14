import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { AppComponent } from './index'

const App = () => {
  return (
    <Router>
      <AppComponent />
    </Router>
  )
}

export default App