import React from 'react';
import { IonIcon } from '@ionic/react';
import {heartOutline} from 'ionicons/icons';
import {bagOutline} from 'ionicons/icons';
import {locationOutline} from 'ionicons/icons';
import {newspaperOutline} from 'ionicons/icons';
import { OfferData } from '../../Types/Globals';





const OffersCard: React.FC<{ jobs: OfferData }> = ({ jobs }) =>  {


    return (
        <>
            
            <div className="flex flex-row w-full justify-start p-24 gap-14">


            <div className="bg-white flex-none w-96">
                <div className="bg-third w-full">
                    fhdfh
                </div>
            </div>
            <div className="flex-auto ">
                <div className="w-auto">
                     <div className="w-full">
                        <div className="flex w-full items-center bg-primary p-3 rounded">
                            <div className="w-1/3 ">
                                <img className=" w-full rounded-lg"
                                src="https://github.com/horizon-ui/horizon-tailwind-react-ts-corporate/blob/main/src/assets/img/profile/image1.png?raw=true"
                                alt=""/>
                            </div>

                            <div className="w-full ml-6 pt-4">

                                {/** title and icon */}

                                <div className="flex justify-between">

                                    <h2 className="font-medium text-xl">Responsable administratif et financier h/f</h2>
                                    <span> <IonIcon icon={heartOutline}></IonIcon></span>  

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
                                        {/**job.contract*/}
                                    </div>
                                </div>

                                {/** Requirements  */}

                                <div className='flex py-4'>
                                        <div className='pr-4 borde border-r-2 border-neutral-500'>
                                            {/**job.studies*/}
                                        </div>
                                        
                                        <div className='px-4'>
                                            {/**job.experience_Years*/}
                                        </div>
                                </div>

                                {/** Requirements  */}

                                <div className='flex items-center'>
                                   <IonIcon icon={bagOutline} className='text-base'></IonIcon>
                                   <span className='text-light text-base px-2'>{/**job.domaine*/}</span>
                                </div>

                                {/** Publish date + Button*/}

                                <div className='flex justify-between pt-6'>
                                    <div className=' opacity-70'>
                                        Publish Date 
                                    </div>
                                    <div>
                                    <button
                                        type="button"
                                        className="rounded bg-darkk px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.2),0_8px_9px_-4px_rgba(0,0,0,0.3)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]" >
                                        Postuler
                                        </button>
                                    </div>
                                </div>



                            </div>
                        </div>
                     </div>
                </div>
            </div>


        </div>
        
    </>
    )
}


export default OffersCard;