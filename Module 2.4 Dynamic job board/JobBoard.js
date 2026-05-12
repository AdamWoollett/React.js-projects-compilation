import React from 'react'

const JobBoard = () => {
    const jobCount = 2;
    const companyName = "JobDoers";
    /*const getJobMessage=()=>{
        return jobCount===0 ? ` No jobs to schedule today!`:`Jobs running today from bot: ${jobCount}`;
    };*/
    const getJobMessageV2=()=>{
        if (jobCount===0){
            return `No jobs to schedule today!`
        } else{
            if (jobCount > 0 && jobCount <= 5){
                return `A small number of jobs today: ${jobCount}`
            } else{
                if(jobCount > 5 ){
                    return `A large number of jobs to do today: ${jobCount}`
                }else{
                    if(jobCount < 0){
                        return `Error, the space-time continuum has been broken!`
                    }
                };
            }
        }
    }
    const jobsNextWeek=()=>{
        return jobCount*1.5;
    };
  return (
    <div className="component">
      <h1>Job Board of {companyName}</h1>
        <p>{getJobMessageV2()}</p>
        <p>Estimated jobs for next week:{jobsNextWeek()}</p>
    </div>
  );
};

export default JobBoard
