import { IonIcon } from '@ionic/react';
import {heartOutline} from 'ionicons/icons';
import {bagOutline} from 'ionicons/icons';
import {locationOutline} from 'ionicons/icons';
import {newspaperOutline} from 'ionicons/icons';
import { OfferData } from '../../Types/Globals';
import { useNavigate } from 'react-router-dom';

import { getJob } from '../store/features/jobDetailsSlice';
import { useAppDispatch } from '../store/store';






const OffersCard: React.FC<{ jobs: OfferData, id:any }> = ({ jobs,id }) =>  {
   // const [targetJob , setTargetJob] = useState(Number)
    const navigate = useNavigate();
    const  dispatch = useAppDispatch()

    const navigateToJobDescription = ()=> {
            navigate('/JobDescription');
           dispatch(getJob({id:id}))
                 
         
    }

   
    return (
        <>
            
            
            {/** offer details */}

                     <div className="w-full m-9">
                        <div className="flex w-full items-center bg-primary p-3 rounded">
                            <div className="w-1/3 ">
                                <img className=" w-full rounded-lg"
                                src="https://github.com/horizon-ui/horizon-tailwind-react-ts-corporate/blob/main/src/assets/img/profile/image1.png?raw=true"
                                alt=""/>
                            </div>

                            <div className="w-full ml-6 pt-4">

                                {/** title and icon */}

                                <div className="flex justify-between">

                                    <h2 className="font-medium text-xl">{jobs.jobTitle}</h2>
                                    <span> <IonIcon icon={heartOutline}  className='cursor-pointer'></IonIcon></span>  

                                </div>

                                {/** company name + ville + contract type */}

                                <div className="flex ">
                                    
                                    <div className='px-4'>
                                      {jobs.companyName}
                                    </div>
                                    
                                    <div className='border-x-2 border-neutral-500 px-4'>
                                        <IonIcon icon={locationOutline} className='text-base'></IonIcon>
                                        {jobs.ville}
                                    </div>

                                    <div className='px-4'>
                                        <IonIcon icon={newspaperOutline} className='text-base text-rose-950 pr-1' ></IonIcon>
                                        {jobs.contract}
                                    </div>
                                </div>

                                {/** Requirements  */}

                                <div className='flex py-4'>
                                        <div className='pr-4 borde border-r-2 border-neutral-500'>
                                            {jobs.studies}
                                        </div>
                                        
                                        <div className='px-4'>
                                            {jobs.experienceYears}
                                        </div>
                                </div>

                                {/** Requirements  */}

                                <div className='flex items-center'>
                                   <IonIcon icon={bagOutline} className='text-base'></IonIcon>
                                   <span className='text-light text-base px-2'>{jobs.domaine}</span>
                                </div>

                                {/** Publish date + Button*/}

                                <div className='flex justify-between pt-6'>
                                    <div className=' opacity-70'>
                                        Publish Date 
                                    </div>
                                    <div>
                                    <button
                                        type="button"
                                        onClick={navigateToJobDescription}
                                        className="rounded bg-darkk px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.2),0_8px_9px_-4px_rgba(0,0,0,0.3)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]" >
                                        Postuler
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>      
    </>
    )
}


export default OffersCard;