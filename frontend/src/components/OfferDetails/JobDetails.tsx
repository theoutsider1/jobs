
import { UploadCvComponent } from "../UploadCvComponent/UploadCvComponent";
import  { useState } from "react";
import { offerEmploi } from "../store/features/dataShapes/dataInterfaces";


const JobDetails : React.FC<{jobD : offerEmploi[]}> = ({jobD})=> {
    
    const [handleCvPopup, setHandleCvPopup] = useState(false);

    const [selectedJobId, setSelectedJobId] = useState<number | null>(null);

    const handleTurnPopupTrue = (jobId: number)=> {
        setSelectedJobId(jobId); // Store the selected job ID
        setHandleCvPopup(true);
    }
    const handleTurnPopupFalse = ()=> {
        setHandleCvPopup(false);
    }

    
    return (
        <>
             <div className="w-full  bg-white ">
               
                 <div className="bg-third py-10 px-44">
                   
                 { jobD &&
                    
                    jobD.map((job) => (
                        <div className="bg-white p-14 rounded-md" key={job.id}>

                            <h4 className="font-semibold text-xl p-3 ">
                                Description:
                            </h4>
                            <p className="px-6">
                            {job.description}
                            </p>
                            <h4 className="font-semibold text-xl p-3">
                                Missions:
                            </h4>
                        
                            <ul className="p-2">
                         
                                <li  className="px-6">{job.missions}</li>
                            
                            </ul>
                       
                            <h4 className="font-semibold text-xl p-3">
                                Profil:
                            </h4>

                            <ul className="p-2">
                                
                                 <li className="px-6">{job.profil}</li>

                            </ul>
                        
                            <h4 className="font-semibold text-xl p-3">
                                Avantages:
                            </h4>

                            <ul className="p-2">
                                {job.advantages?.map((avanta,index) => (
                                    
                                        <li key={`mission_${index}`} className="px-6">{avanta}</li>
                                    
                                ))}
                            </ul>
                        
                        
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={()=>handleTurnPopupTrue(job.id)}
                                    className="rounded bg-darkk px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.2),0_8px_9px_-4px_rgba(0,0,0,0.3)] " >
                                    Postuler
                                </button>
                            </div>
                    </div>
                    
                    ))}
                     
                   
                </div>
    
            </div>
            
            <UploadCvComponent jobId={selectedJobId}  isOpen={handleCvPopup} isClose={handleTurnPopupFalse}/>
        </>
    )
}

export default JobDetails;