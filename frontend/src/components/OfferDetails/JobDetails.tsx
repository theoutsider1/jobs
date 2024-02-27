import { useAppSelector } from "../store/store";


const JobDetails = ()=> {
    const jobD = useAppSelector(state => state.getJob.job)
    
   
    return (
        <>
             <div className="w-full  bg-white ">
                
                 <div className="bg-third py-10 px-44">
                 {
                    
                    jobD.map((job) => (
                        <div className="bg-white p-14 rounded-md">

                        <h4 className="font-semibold text-xl p-3 ">
                            Description:
                        </h4>
                        <p key={Math.random()} className="px-6">
                        {job.description}
                        </p>
                        <h4 className="font-semibold text-xl p-3">
                            Missions:
                        </h4>
                        
                            
                             {job.missions?.map((m) => (
                                <ul className="p-2">
                                    <li key={Math.random()} className="px-6">{m}</li>
                                </ul>
                            ))}
                       
                        <h4 className="font-semibold text-xl p-3">
                            Profil:
                        </h4>
                        
                            {job.profil?.map((pro) => (
                                <ul className="p-2">
                                    <li key={Math.random()} className="px-6">{pro}</li>
                                </ul>
                            ))}
                        
                        <h4 className="font-semibold text-xl p-3">
                            Avantages:
                        </h4>
                        
                            {job.avantages?.map((avanta) => (
                                <ul className="p-2">
                                    <li key={Math.random()} className="px-6">{avanta}</li>
                                </ul>
                            ))}
                        
                        
                        <div className="flex justify-end">
                        <button
                            type="button"
                            className="rounded bg-darkk px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.2),0_8px_9px_-4px_rgba(0,0,0,0.3)] " >
                            Postuler
                        </button>
                        </div>
                    </div>
                    
                    ))}
                    
                   
                </div>
     
            </div>
        </>
    )
}

export default JobDetails;