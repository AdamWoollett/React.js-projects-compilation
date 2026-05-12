import React from 'react'
import './JobForm.css'
import { useState, useEffect } from 'react'
import JobFormButton from './JobFormButton';


/*console.log(prevJob)*/

const JobForm = ({ jobsTwo, setJobsTwo, jobsAddedInSession, setJobsAddedInSession }) => {
    /*Variables for local storage */
    /*const initialJobState=prevJob ? JSON.parse(prevJob):{ id: "", name: "", job: [], status: "",};*/
    /*const [newJob, setNewJob]=useState(()=>{
        const prevJob=localStorage.getItem("newJob");
        return prevJob ? JSON.parse(prevJob):{ id: "", name: "", job: [], status: "",};
    });
    useEffect(()=>{localStorage.setItem("newJob",JSON.stringify(newJob))},[jobsTwo, newJob])*/						
    /*const newJob is blank template for new entry into jobs array */
    const [newJob, setNewJob] = useState({ id: "", name: "", job: [], status: "",});
    /*const[lastItem,setLastItem]=useState(jobsTwo[jobsTwo.length - 1])*/
    /*Below const is for updating id numbers */
    const [lastItem, setLastItem] = useState(4)
    /*Below const is for controlling usability of sumbit button */
    const [controlSubmitButton, setControlSubmitButton] = useState(true);
    /*Below const controls visibility of "Job created successfully" notification */
    const [notificationVisibility, setNotificatioVisibility] = useState('hidden');
    /*Variable used to control selected value for job status select box */
    const [jobStatusSelect,setJobStatusSelect] = useState("");
    /*Same again for set job box */
    /*const [jobSelect,setJobSelect]=useState("");*/
    /*Creating variable to control div that listens for clicks on disabled button */
    const [buttonDisabledDiv,setButtonDisabledDiv]=useState("Button-Disabled-Div")
    /*console.log("Log from component start", newJob);
    console.log("Log from component start", jobsTwo);*/

    /*Preventing form from auto-submitting and refreshing the page when pressing button options*/
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("newJob details submitted to create a new job: ", newJob)
    };

    /*Creating a function to enable submit button only after all details specified */
    const submitButtonControl = () => {
        if (newJob.name.trim() !== "" && newJob.job.length > 0) {
            setControlSubmitButton(false);
            setButtonDisabledDiv("Button-Enabled-Div");
        } else if (newJob.name.trim() !== "" && newJob.status.trim() !== "") {
            setControlSubmitButton(false);
            setButtonDisabledDiv("Button-Enabled-Div");
        } else if (newJob.job.length > 0 && newJob.status.trim() !== "") {
            setControlSubmitButton(false);
            setButtonDisabledDiv("Button-Enabled-Div");
        } else { setControlSubmitButton(true);
            setButtonDisabledDiv("Button-Disabled-Div");
         };
    };
    /*Function for giving alert if user attempts to press button when disabled */
    const disablingDiv=()=>{
        if(buttonDisabledDiv==="Button-Disabled-Div"){
            alert("Please fill out the name field and choose a job and status");
        }else if(buttonDisabledDiv==="Button-Enabled-Div"){
            alert("This alert should not appear as the disabler should be hidden");
        }else{alert("Error with disablingDiv")};
    };
    /*Function for adding a new job to the array to display on the page */
    const addNewJob = () => {
        console.log("Submit button pressed")
        /*Need to add incremented ID value */
        const updatedID = lastItem + 1;
        setLastItem(updatedID);
        /*console.log(lastItem);*/
        newJob.id = lastItem;
        setNewJob({ ...newJob, id: lastItem });
        /*console.log("lastItem at start of the setLastItem update attempt",lastItem);
        setLastItem((lastItem) => {
            const lastItemIncrease = lastItem + 1;
            console.log("lastItemIncrease is now: ", lastItemIncrease);
            console.log("lastItem value in the setLastItem update attempt",lastItem)
            setNewJob({...newJob,id:lastItemIncrease});
            console.log(newJob,"newJob console log from the setLastItem update attempt")
            return lastItemIncrease;
        });
        setNewJob({...newJob,id:lastItem});*/
        /*console.log("lastItem at end of the setLastItem update attempt", lastItem);*/

        /*Check that none of the properties are blank*/
        if (/*newJob.id.trim()!=="" &&*/ newJob.name.trim() !== "" && newJob.job.length > 0 && newJob.status.trim() !== "") {
            /*If none blank, add to main array */
            setJobsTwo(prevJob => [...prevJob, newJob]);
            /*Original code line for updating array of Jobs */
            /*setJobsTwo([...jobsTwo, newJob]);*/
            /*Also add to array for AddedJobs */
            setJobsAddedInSession([ ...jobsAddedInSession, newJob]);
            /*console.log(jobsAddedInSession);*/
            /*Clear data in newBot to make space for new input*/
            setNewJob({ id: "", name: "", job: [], status: "" });
            /*console.log(lastItem, "From the final setJobsTwo data section");*/
            /*Disable submit button */
            setControlSubmitButton(true);
            setButtonDisabledDiv("Button-Disabled-Div");
            /*Triggering successful message to user */
            setNotificatioVisibility('');
            setTimeout(() => setNotificatioVisibility('hidden'), 5000);
            /*Resetting form to original state */
            setJobStatusSelect("");
            /*setJobSelect("");*/
            /*Otherwise output error message */
        } else { alert("Please fill out the name field and choose a job and status") }
    };

    //Function for selecting categories from the buttons
    const selectCategory=(value)=>{
        if(newJob.job.some(item=>item===value)){//This is checking if the value is already in the array, and removing it if so
            const filtercategory=newJob.job.filter(item=>item!==value)
            setNewJob(prev=>{return{...prev,job:filtercategory}})
        }else{setNewJob(prev=>{return{...prev,job:[...prev.job,value]}})
        }
    };

    //Function for updating CSS of JobFormButtons
    const validateJob=(value)=>{
        return newJob.job.some(item=>item===value)
    };

    //Function for clearing selected buttons
    const clearJobs=()=>{
        setNewJob(prev=>{return{...prev,job:[]}});
    };

    return (
        <div className='Big-Div'>
            <div className='form-header'>
                <form className='JobFormInputs' onSubmit={handleSubmit}>
                    <h2>Custom job form version 2:</h2>
                    <input name="Job-Name" type='text' className='bot-input' placeholder='Input bot name here' value={newJob.name} onChange={(e) => { setNewJob({ ...newJob, name: e.target.value }); setNotificatioVisibility('hidden'); submitButtonControl();}}></input>
                    <p><b>Set job:</b></p>
                    <div className='set-job-section'>

                        <div className='form-details'>
                        {/*<select name="Set-Job" className='job-status' value={jobSelect} onChange={(e) => { setNewJob({ ...newJob, job:e.target.value }); setNotificatioVisibility('hidden');submitButtonControl(); setJobSelect(e.target.value)}}>
                        </select>*/}
                            <JobFormButton value="ReadEmails" selectCategory={selectCategory} selected={validateJob("ReadEmails")} setNotificatioVisibility={setNotificatioVisibility} submitButtonControl={submitButtonControl}/>
                            <JobFormButton value="WebParsing" selectCategory={selectCategory} selected={validateJob("WebParsing")} setNotificatioVisibility={setNotificatioVisibility} submitButtonControl={submitButtonControl}/>
                            <JobFormButton value="SendEmails" selectCategory={selectCategory} selected={validateJob("SendEmails")} setNotificatioVisibility={setNotificatioVisibility} submitButtonControl={submitButtonControl}/>
                            <p>Currently selected categories: {newJob.job}</p>
                            <button onClick={()=>{clearJobs(); setButtonDisabledDiv("Button-Disabled-Div"); setControlSubmitButton(true);}}>Clear Categories</button>
                        </div>
                    </div>
                    <div className="Job-Status-Setter">
                        <p><b>Set job status:</b></p>
                        <select name="Set-Job-Status" className='job-status' value={jobStatusSelect} onChange={(e) => { setNewJob({ ...newJob, status:e.target.value }); setNotificatioVisibility('hidden'); submitButtonControl(); setJobStatusSelect(e.target.value)}}>
                            <option name="blankOption"></option>
                            <option name="completed">completed</option>
                            <option name="running">running</option>
                            <option name="failed">failed</option>
                        </select><br></br><br></br>
                    </div>
                    <div className={buttonDisabledDiv} onClick={()=>disablingDiv()}></div>
                    <button type='submit' name="Submit-Button" className='submit-data' onClick={() => addNewJob()} disabled={controlSubmitButton}><b>Submit</b></button>
                    <p className="successful-job-creation" style={{ visibility: notificationVisibility }}>Job created successfully</p>

                </form>
            </div>
        </div>
    )
};
export default JobForm
