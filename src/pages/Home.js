import React,{useState, useEffect} from 'react'
// import Layout from '../components/layout/Layout'
import Task from './inc/Task'

// import axios from 'axios'

function Home(){

    const [tasks, setTasks] = useState([]);

    useEffect(
        () => {
            fetch('http://127.0.0.1:8000/api/task')
            .then(res => res.json())
            .then(data => setTasks(data))
            .catch(errors => console.log(errors))

            return () => {
                // console.log('Code to unmount')
            }
        }
    )
    return (
        <div>
            
            <div className="container intro">
                <h3 className="heading">Recent Tasks</h3>
                <p>Here is the list of your recent tasks</p>
            </div>
            {tasks.map(task => <Task key={task.id} id={task.id} title={task.name} due={task.due} status={task.status} />)}
        </div>
    )
}

export default Home