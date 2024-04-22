
import { useAppSelector } from "../store/store";
import JobDetails from "./JobDetails";
import JobTitleBar from "./TitleBar"

const JobDescription= ()=> {
    const jobD = useAppSelector(state => {
       
        return state.getJob.job})
   
    return (
        <>  
            <JobTitleBar jobD = {jobD} />           
           <JobDetails jobD={jobD}/>
        </>
    )
}

export default JobDescription;