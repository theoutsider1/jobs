import { useAppSelector } from "../store/store";
import JobDetails from "./JobDetails";
import JobTitleBar from "./TitleBar"

const JobDescription= ()=> {
    const jobD = useAppSelector(state => {
       
        return state.getJob.job})
   
    return (
        <div className="flex flex-col" >  
        <div><JobTitleBar jobD = {jobD} /></div>
        <div> <JobDetails jobD={jobD}/></div>
                       
          
        </div>
    )
}

export default JobDescription;