import './App.css';
import Header from './component/header'
import Footer from './component/footer'
import JobList from './component/joblist'
import { useState, useEffect } from 'react';
import StatusBoard from './component/StatusBoard';
import JobForm from './component/JobForm'
import Completed from './images/CompletedEdited.png'
import InProgress from './images/In_progress.png'
import Failed from './images/Failed.png'
import JobColumn from './component/JobColumn';
import AddedJobs from './component/AddedJobs'

const App = () => {
  /*Main array containing starter bots for jobList*/
  const [jobs, setJobs] = useState([
    { id: 1, name: "Email Extractor", status: "running" },
    { id: 2, name: "Data Analyzer", status: "completed" },
    { id: 3, name: "Report Generator", status: "failed" }
  ])
  /*Main array containing starter bots for JobForm*/
  /*const [jobsTwo, setJobsTwo] = useState([
      { id: 1, name: "Email Extractor", job:"Read Emails", status: "running" },
      { id: 2, name: "Data Analyzer", job:"Web Parsing", status: "completed" },
      { id: 3, name: "Report Generator", job:"Send Emails", status: "failed" }
    ]);*/
  /*Main array containing bots for JobForm with local storage functionality added*/
    const [jobsTwo, setJobsTwo]=useState(()=>{
          const prevJob=localStorage.getItem("jobsTwo");
          return prevJob ? JSON.parse(prevJob):[
      { id: 1, name: "Email Extractor", job:"Read Emails", status: "running" },
      { id: 2, name: "Data Analyzer", job:"Web Parsing", status: "completed" },
      { id: 3, name: "Report Generator", job:"Send Emails", status: "failed" }]
      });
      useEffect(()=>{localStorage.setItem("jobsTwo",JSON.stringify(jobsTwo))},[jobsTwo]);
  /*Creating blank array to record jobs added over the course of the session (AddedJobs)*/
  const [jobsAddedInSession,setJobsAddedInSession]=useState([]);
  /*Handling deleting jobs for jobList */
  function handleDeleteJob(id) {
    setJobs(jobs.filter(job => id !== job.id))
    console.log("handleDeleteJob")
  }
  /*Handling deleting jobs for jobForm  */
  function handleDeleteJobTwo(id) {
    setJobsTwo(prevJob => prevJob.filter(job => id !== job.id))
    console.log("handleDeleteJob")
  }
  /*Function for clearing local storage */
  const clearAllJobs=()=>{
    setJobsTwo([
      { id: 1, name: "Email Extractor", job:"Read Emails", status: "running" },
      { id: 2, name: "Data Analyzer", job:"Web Parsing", status: "completed" },
      { id: 3, name: "Report Generator", job:"Send Emails", status: "failed" }]);
      localStorage.removeItem('jobsTwo');
  };
  /*const updateJobStatus = (id, newStatus) => {
      setJobs((jobs)=>({...jobs.status,...jobs.newStatus}));
      return;
    
    /*const modifiedJobs = jobs.map((job) => {
            if (job.id === id) {
                return job.status=newStatus
            } else {
                return job
            }
        })
        //Below overrides original bot array
        setJobs(modifiedJobs);
  };*/

  return (
    <div className="App">
      <Header />
      <JobList jobs={jobs} setJobs={setJobs} onDeleteJob={handleDeleteJob} />
      <StatusBoard /><br></br>
      <JobForm jobsTwo={jobsTwo} setJobsTwo={setJobsTwo} jobsAddedInSession={jobsAddedInSession} setJobsAddedInSession={setJobsAddedInSession}/>
      <div className='job-columns'>
        <JobColumn title="Running" image={InProgress} alt="In Progress Icon" jobsTwo={jobsTwo} setJobsTwo={setJobsTwo} jobFilter="running" onDeleteJobTwo={handleDeleteJobTwo} styling="job-column-running"/>
        <JobColumn title="Completed" image={Completed} alt="Completed Image" jobsTwo={jobsTwo} setJobsTwo={setJobsTwo} jobFilter="completed" onDeleteJobTwo={handleDeleteJobTwo} styling="job-column-completed"/>
        <JobColumn title="Failed" image={Failed} alt="Failed Image" jobsTwo={jobsTwo} setJobsTwo={setJobsTwo} jobFilter="failed" onDeleteJobTwo={handleDeleteJobTwo} styling="job-column-failed"/>
      </div>
      <AddedJobs jobsAddedInSession={jobsAddedInSession} setJobsAddedInSession={setJobsAddedInSession}/>
      <button onClick={()=>clearAllJobs()}>Clear locally stored jobs</button>
      {/*<div>
        <h3>Jobs created this session:</h3>
        <ul className="addedjobs">{jobsAddedInSession.map((jobAdded)=><li key={jobAdded.id}>{jobAdded.id}-{jobAdded.name}-{jobAdded.job}-{jobAdded.status}</li>)}</ul>
      </div>*/}
      <Footer />
    </div>
  );
}

export default App;
