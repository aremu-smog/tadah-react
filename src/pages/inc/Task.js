import React from 'react'
// import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

function Task(props){

    const deleteTask = (id) => {
        let options = {
            method: 'DELETE',  
        }
        fetch("http://localhost:8000/api/task/"+id,options)
        .then(res => res.json())
        .then(data => {alert(data.response)})
        .catch(errors => {console.log(errors)})
    }
    return(
        <div className="task">

            {/* <Link to={"/tasks/" + props.id}> */}
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <h3>{props.title}</h3>
                        <span className="due">{props.due}</span>
                    </div>
                    <div className="col-3" >
                        <span className="status status-progress" onClick={()=>deleteTask(props.id)}>Delete</span>
                    </div>
                </div>
            </div>
            {/* </Link> */}
            
        </div>
    )
}

export default Task