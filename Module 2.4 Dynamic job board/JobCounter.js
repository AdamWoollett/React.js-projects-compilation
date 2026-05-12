import { useState } from 'react';
const JobCounter=()=>{
let [jobCount, setJobCount] = useState(0);
    function handleAddJob(){
        setJobCount(jobCount + 1);
        console.log("jobCount console log: ", jobCount);
    };
    return(
        <><div className="component">
        <h1>Job Counter:</h1>
        <p>Current job count: {jobCount}</p>
        <button onClick={handleAddJob}>Add Job</button>
        </div></>
    );
};

export default JobCounter