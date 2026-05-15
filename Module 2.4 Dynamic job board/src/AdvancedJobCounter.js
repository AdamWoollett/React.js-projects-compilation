import { useState } from 'react';

const AdvancedJobCounter=()=>{
let [jobCount, setJobCount] = useState(0);
let [jobCountUAT, setJobCountUAT] = useState(0);
let [jobCountDisplayNumber, setJobCountDisplayNumber] = useState(jobCount);
let [disabler, setDisabler] = useState(true);
let [jobCountMessage, setjobCountMessage] = useState('No jobs available: ');
let [environment, setEnvironment] = useState('Production');
//Function to increase job count number
    function handleAddJob(){
        //If statements check which environment is loaded then run relevant code
        if(environment === 'Production'){
        setJobCount(jobCount => {
            const newCount = jobCount + 1;
            console.log("jobCountProduction after addition: ", newCount);
            updateJobCountMessage(newCount);
            setJobCountDisplayNumber(newCount);
            return newCount;
        })} else{
            if(environment === 'UAT'){
              setJobCountUAT(jobCountUAT => {
                const newCountUAT = jobCountUAT + 1;
                console.log("jobCountUAT after addition: ", newCountUAT);
                updateJobCountMessage(newCountUAT);
                setJobCountDisplayNumber(newCountUAT);
                return newCountUAT;  
            })}};
        setDisabler(false);
        
    };
    //Function to decrease job count number
    function handleSubtractJob(){
        //If statements check which environment is loaded then run relevant code
        if(environment === 'Production'){
        setJobCount(jobCount => {
            const newCount = jobCount - 1;
            console.log("jobCountProduction after subtraction: ", newCount);
            updateJobCountMessage(newCount);
            setJobCountDisplayNumber(newCount);
            return newCount;
        })} else{
            if(environment === 'UAT'){
              setJobCountUAT(jobCountUAT => {
                const newCountUAT = jobCountUAT - 1;
                console.log("jobCountUAT after subtraction: ", newCountUAT);
                updateJobCountMessage(newCountUAT);
                setJobCountDisplayNumber(newCountUAT);
                return newCountUAT;  
            })}};
        if(environment === 'Production' && jobCount === 1){setDisabler(true)}else{if(environment === 'UAT' && jobCountUAT === 1){setDisabler(true)}};
    };
    //Function to reset job counter
    function handleResetJobs(){
        //If statements check which environment is loaded then run relevant code
        if(environment === 'Production'){
        setJobCount(jobCount => {
            const newCount = 0
            console.log("jobCount after reset: ", newCount);
            updateJobCountMessage(newCount);
            setJobCountDisplayNumber(newCount);
            return newCount;
        })} else{
            if(environment === 'UAT'){
            setJobCountUAT(jobCountUAT => {
                const newCountUAT = 0
                console.log("jobCountUAT after reset: ", newCountUAT);
                updateJobCountMessage(newCountUAT);
                setJobCountDisplayNumber(newCountUAT);
                return newCountUAT;
        })}
            
        };
        setDisabler(true);
    };
    //Function to update the message that goes with job count number
    function updateJobCountMessage(newCount){
        if(newCount===0){setjobCountMessage('No jobs available: ')
        } else{
            if(newCount > 0 && newCount<= 5){setjobCountMessage('Few jobs available: ')
            } else{
                if(newCount > 5){setjobCountMessage('Many jobs available: ')}
            }
    }
    };
    //Function for changing job environment
    function switchEnvironment(){
        if(environment === 'Production'){
            setEnvironment('UAT');
            updateJobCountMessage(jobCountUAT);
            setJobCountDisplayNumber(jobCountUAT);
            if(jobCountUAT <= 0){setDisabler(true)}else{setDisabler(false)};
        }else{
            if(environment === 'UAT'){
                setEnvironment('Production');
                updateJobCountMessage(jobCount);
                setJobCountDisplayNumber(jobCount);
                if(jobCount <= 0){setDisabler(true)}else{setDisabler(false)};
            }
        };
    };
    //HTML to display on the page for the component
    return(
        <><div className="component">
        <h1>Advanced Job Counter:</h1>
        <p>Current environment: {environment}</p>
        <p>{jobCountMessage} {jobCountDisplayNumber}</p>
        <button onClick={handleAddJob}>Add Job</button>
        <button disabled={disabler} onClick={handleSubtractJob}>Subtract Job</button>
        <button onClick={handleResetJobs}>Reset Jobs</button>
        <button onClick={switchEnvironment}>Switch environment</button>
        </div></>
    );
};

export default AdvancedJobCounter
