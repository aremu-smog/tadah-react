import React from 'react';
import './App.css';
import Layout from './components/layout/Layout'
import Home from './pages/Home'
// import AddTask from './inc/AddTask'
// import TaskView from './pages/Task'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AddTask from './pages/inc/AddTask';

function App() {
  return (
    <div>
      <Router>
        <Layout>
        <Route exact path="/" component={Home} />
        <Route  path="/add_task" component={AddTask} />
        </Layout>
        
      </Router>
        
  </div>
  )
}

export default App;
