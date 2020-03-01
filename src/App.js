import React from 'react';
import './app.css';
// import Header from './components/layout/Header'
import Home from './pages/Home'
// import TaskView from './pages/Task'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Home />
      </Router>
        
  </div>
  )
}

export default App;
