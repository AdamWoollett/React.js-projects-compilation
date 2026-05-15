import React from 'react'
import './JobColumn.css'

const JobColumn = ({ title, jobsTwo, setJobsTwo, jobFilter, alt, image, onDeleteJobTwo,styling }) => {
  function updateJobStatus(id, jobFilter) {
    /*console.log(id);
    console.log(jobsTwo);*/
    const modifiedJobs = jobsTwo.map((jobTwo) => {
      /*console.log(jobTwo, "This is the jobTwo string")*/
      if (jobTwo.id === id && jobTwo) {
        if (jobTwo.status === "running") {
          console.log("Status changed to completed")
          return { ...jobTwo, status: "completed" }
        } else if (jobTwo.status === "completed") {
          console.log("Status changed to failed")
          return { ...jobTwo, status: "failed" }
        } else if (jobTwo.status === "failed") {
          console.log("Status changed to running")
          return { ...jobTwo, status: "running" }
        }
      } else {
        /*console.log(jobTwo, "Line 27 log")*/
        return jobTwo
      }
    })
    /*console.log(modifiedJobs, "This is the modifiedJobs log")*/
    setJobsTwo(modifiedJobs);
  };

  function selectableUpdateJobStatus(id,chosenStatus) {
    const selectedStatus = jobsTwo.map((jobTwo)=>{
      if(jobTwo.id === id && jobTwo){
        if(chosenStatus === "running"){
          console.log("Status changed to running")
          return { ...jobTwo, status: "running" }
        } else if(chosenStatus === "completed"){
          console.log("Status changed to completed")
          return { ...jobTwo, status: "completed" }
        } else if(chosenStatus === "failed"){
          console.log("Status changed to failed")
          return { ...jobTwo, status: "failed" }
        } else {console.log("Error in the setting of the status in selectableUpdateJobStatus")}
      } else{return jobTwo}
    })
    setJobsTwo(selectedStatus);
  };

  return (
    <div className='job-column'>
      <h2 className='heading-status'>
        {title}
      </h2>
      <img src={image} alt={alt} className='status-image' />
      <ul className={styling}>
        {/*This line filters the jobs and lets through only the ones that have a status that matches the provided jobFilter prop for each component and maps them out */}
        {/*This means that each JobColumn component only shows jobs with a status that match the column */}
        {/*{console.log(title,jobsTwo, "Column string")}*/}
        {jobsTwo.filter(jobTwo => jobTwo.status === jobFilter).map((JobTwo) => <li key={JobTwo.id}>{JobTwo.id}-{JobTwo.name}-{JobTwo.job}-{JobTwo.status}
          {/*<button onClick={() => updateJobStatus(JobTwo.id)}>Update Status</button>*/}
          <select>
            <option></option>
            <option onClick={()=>selectableUpdateJobStatus(JobTwo.id,"running")}>Mark as Running</option>
            <option onClick={()=>selectableUpdateJobStatus(JobTwo.id,"completed")}>mark as Completed</option>
            <option onClick={()=>selectableUpdateJobStatus(JobTwo.id,"failed")}>Mark as Failed</option>
          </select><button onClick={() => onDeleteJobTwo(JobTwo.id)}>Delete Job</button></li>)}
      </ul>

    </div>
  )
}

export default JobColumn
