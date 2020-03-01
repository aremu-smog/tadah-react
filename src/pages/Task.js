import React,{useState, useEffect} from 'react'
import Layout from '../components/layout/Layout'
import { Link} from 'react-router-dom'
// import axios from 'axios'

function Task(props){

    const [task, setTask] = useState([]);

    useEffect(
        () => {
            fetch('http://127.0.0.1:8000/api/task/2')
            .then(res => res.json())
            .then(data => setTask(data))
            .catch(errors => console.log(errors))
            
        }
    )
    return (
        <div>
            <Layout>
            <div className="container intro">
                <h1 className="heading">{task.name}</h1>

                <div className="row task-meta">
                    <div className="col-4">
                        <span className="status status-completed">{task.status}</span>
                    </div>
                    <div className="col-8">
                        {task.due}
                    </div>
                </div>
            </div>

            <div className="container task-description">
                {task.description}

                <div className="task-buttons row">
                    <div className="col-4">
                        <Link className="btn btn-primary" to="#">Edit Task</Link>
                    </div>
                    <div className="col-4">

                    </div>
                </div>
            </div>
            
            </Layout>
        </div>
    )
}

export default Task