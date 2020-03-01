import React from 'react';
import ReactDOM from 'react-dom'
import Home from '../pages/Home'
import TaskView from '../pages/Task'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
// import Task from '../pages/inc/Task';

function Index() {
    return (
        <Router>
            <Route exact path="/" component={Home} />
            <Route  path="/tasks/:id" render={props => <TaskView {...props} />} />
        </Router>
    );
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
