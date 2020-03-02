import React,{useState} from 'react'


function AddTask(){

    const [fields,setFields] = useState({'taskName':'','taskDescription':'','taskDue':'','taskStatus':''})
    const [button,setButton] = useState('Add Task')
    const handleChange = (e) =>{
        console.log(e.target.name)
        setFields({...fields,[e.target.name] : e.target.value})

    }
    const addTask = (e) =>{
        e.preventDefault()

        // alert(fields.taskName + ","+fields.taskDescription+","+fields.taskDue)
        setButton('Hang on a sec..')
        let options = {
            method : 'POST',
            body : JSON.stringify({
                name : fields.taskName,
                description : fields.taskDescription,
                due : fields.taskDue,
                status : fields.taskStatus,
            }),
            headers:{ 'Content-Type' : 'application/json'}
        }

        fetch("http://localhost:8000/api/task",options)
        .then(res => res.json())
        .then(data => {
            alert(fields.taskName+" added")
            setFields({'taskName':'','taskDescription':'','taskDue':'','taskStatus':''})
            setButton('Add Task')
    })
        .catch(errors => {
            console.log(errors)
        })
    }
    return(
        <div class="container">
            <h3 className="heading">Create Task</h3>
            <form onSubmit={addTask}>

                <div className="form-group">
                    <label for="taskName">Task Name</label>
                <input type="text" value={fields.taskName} className="form-control" id="taskName" name="taskName" onChange={handleChange} placeholder="Task name" />
                </div>

                <div className="form-group">
                    <label for="taskDescription">Task Description</label>
                <textarea type="text"value={fields.taskDescription}  className="form-control" id="taskDescription" name="taskDescription" onChange={handleChange} placeholder="Task description" />
                </div>
               
               <div className="row form_row">
                    <div className="col-6">
                        <div className="form-group">
                            <label for="taskStatus">Task Status</label>
                            <select className="form-group" name="taskStatus" id="taskStatus" onChange={handleChange}>
                                <option value="">Task status</option>
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label for="taskDue">Task Due</label>
                            <input type="text" value={fields.taskDue} placeholder="Due date" name="taskDue" id="taskDue" onChange={handleChange}/>
                        </div>
                    </div>
               </div>
               <div className="form-group">
                  <button type="submit" className="btn btn-primary" >{button}</button> 
               </div>
            </form>
        </div>
    )

}

export default AddTask