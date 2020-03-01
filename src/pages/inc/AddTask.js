import React,{useState} from 'react'


function AddTask(){

    const [fields,setFields] = useState({'taskName':'','taskDescription':'','taskDue':''})
    const handleChange = (e) =>{
        console.log(e.target.name)
        setFields({...fields,[e.target.name] : e.target.value})

    }
    const addTask = (e) =>{
        e.preventDefault()

        // alert(fields.taskName + ","+fields.taskDescription+","+fields.taskDue)
        let options = {
            method : 'POST',
            body : JSON.stringify({
                name : fields.taskName,
                description : fields.taskDescription,
                due : fields.taskDue,
                status : 'In progress',
            }),
            headers:{ 'Content-Type' : 'application/json'}
        }

        fetch("http://localhost:8000/api/task",options)
        .then(res => res.json())
        .then(data => {alert(fields.taskName+" added")})
        .catch(errors => {
            console.log(errors)
        })
    }
    return(
        <div class="container">
            <h3 className="heading">Create Task</h3>
            <form onSubmit={addTask}>

                <div className="form-group">
                <input type="text" className="form-control" name="taskName" onChange={handleChange} placeholder="Task name" />
                </div>

                <div className="form-group">
                <textarea type="text" className="form-control" name="taskDescription" onChange={handleChange} placeholder="Task description" />
                </div>
               
               <div className="row form_row">
                    <div className="col-6">
                        <div className="form-group">
                            <select className="form-group">
                                <option value="">Task status</option>
                                <option>Pending</option>
                                <option>In Progress</option>
                                <option>Completed</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <input type="text" placeholder="Due date" name="taskDue" onChange={handleChange}/>
                        </div>
                    </div>
               </div>
               <div className="form-group">
                  <button type="submit" className="btn btn-primary" >Add Task</button> 
               </div>
            </form>
        </div>
    )

}

export default AddTask