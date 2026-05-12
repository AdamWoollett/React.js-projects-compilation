import React from 'react'
/*<li key={job.id}>{job.id}-{job.name}-{job.status}</li>*/
const JobItem = ({job, setJobs, jobs, onDeleteJob}) => {
  
    return (
      <div className={`job-item-${job.status}`}>
        <p>{job.id}: {job.name} - {job.status}</p><button onClick={() => onDeleteJob(job.id)}>Delete Job</button>
      </div>
    )
  }

export default JobItem
