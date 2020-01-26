import React,{useState, useEffect} from 'react'
import Layout from '../components/layout/Layout'
import Task from './inc/Task'
import axios from 'axios'

function Home(){

    const [tasks, setTasks] = useState([]);

    useEffect(
        () => {
            axios.get('/api/tasks').then(
                response => {
                    setTasks(response.data);
                }
            ).catch(
                errors =>{
                    console.log(errors)
                } 
            )
        }
    )
    return (
        <div>
            <Layout>
            <div className="container intro">
                <h1 className="heading">Hi Aremu,</h1>
                <p>Here is the list of your recent tasks</p>
            </div>
            {tasks.map(task => <Task key={task.id} id={task.id} title={task.name} due={task.due} status={task.status} />)}
            </Layout>
        </div>
    )
}

export default Home