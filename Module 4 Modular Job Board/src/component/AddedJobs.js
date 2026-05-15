import React from 'react'

const AddedJobs = ({jobsAddedInSession,setJobsAddedInSession}) => {
  return (
    <div>
        <h3>Jobs created this session:</h3>
        <ul className="addedjobs">{jobsAddedInSession.map((jobAdded)=><li key={jobAdded.id}>{jobAdded.id}-{jobAdded.name}-{jobAdded.job}-{jobAdded.status}</li>)}</ul>
      </div>
  )
}

export default AddedJobs
