import React from 'react'
import JobItem from './jobitem.js'
import {useState} from 'react';


const JobList = ({jobs, setJobs, onDeleteJob}) => {
  const [show,setShow]=useState(true)
  const[newJob,setNewJob]=useState({id:"",name:"",status:""});
  /*Function to add a bot */
    const addJobToList=()=>{
        /*First check none of the input boxes are blank */
        if(newJob.id.trim()!=="" && newJob.name.trim()!=="" && newJob.status.trim()!==""){
            setJobs([...jobs,newJob])
            /*Clear data in newBot to make space for new input */
            setNewJob({id:"",name:"",status:""})
        }
    };
  return (
    <div className="jobList">
      <button onClick={()=>setShow(!show)}>Click to hide/show bot list</button>
      <ul>
        {show && jobs.map(job => <JobItem job={job} setJobs={setJobs} jobs={jobs} onDeleteJob={onDeleteJob} key={job.id}/>)}
      </ul>
      <p>Add a job:</p>
      <input type="text" value={newJob.id} onChange={(e)=>setNewJob({...newJob,id:e.target.value})} placeholder="Enter bot ID"></input>
      <input type="text" value={newJob.name} onChange={(e)=>setNewJob({...newJob,name:e.target.value})} placeholder="Enter bot name"></input>
      <input type="text" value={newJob.status} onChange={(e)=>setNewJob({...newJob,status:e.target.value})} placeholder="Enter bot status"></input>
      <button onClick={addJobToList} >Add Job</button>
    </div>
  )
}

export default JobList
