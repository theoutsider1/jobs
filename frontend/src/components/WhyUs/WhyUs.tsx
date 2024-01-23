
import { IonIcon } from '@ionic/react';
import { chevronDownCircle,time, list } from 'ionicons/icons';
import Advice from './AdviceSection';




const WhyUs = () => {


    return (
        <div className="w-full bg-third p-4">
                <div className='px-56 py-14'>
                    <h2 className="text-black text-3xl font-bold tracking-wider">Pourquoi Nous?</h2>
                </div>
            <div className="w-full flex flex-col-2 px-36">
                <div className="w-1/2 flex flex-col gap-4" >
                    <div>
                        <div className="max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow">
                            
                            <div className=' flex  justify-start p-2 '>
                                <IonIcon icon={chevronDownCircle} className='text-4xl text-secondary'></IonIcon>
                                <h4 className=" p-1 h-10 text-black text-2xl font-bold tracking-wider">Visibilité accrue</h4>
                            </div>
                                <div className='p-3'>
                                    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400"> Les candidats ont la possibilité de créer des profils en ligne, d'y télécharger leur CV, et d'attirer l'attention des recruteurs, augmentant ainsi leur visibilité sur le marché du travail.</p>

                                </div>
                                
                        </div>
                    </div>



                        
                    <div>
                        <div className="max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow">
                            
                            <div className=' flex  justify-start p-2 '>
                                <IonIcon icon={time} className='text-4xl text-secondary'></IonIcon>
                                <h4 className="p-1 h-10 text-black text-2xl font-bold tracking-wider">Gagner du temps</h4>
                            </div>

                            <div className="p-3">
                                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400"> 2JOBS  permettent aux candidats de filtrer les emplois en fonction de leurs compétences, de leur expérience, de leur localisation, etc.</p>

                            </div>
                                
                        </div>
                    </div>


                    <div>
                    <div className="max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow">
                            
                            <div className=' flex  justify-start p-2 '>
                                <IonIcon icon={list} className='text-4xl px-2 text-secondary'></IonIcon>
                                <h4 className="p-1 h-10 text-black text-2xl font-bold tracking-wider">Suivi des candidatures </h4>
                            </div>
                            <div className='p-3'>                                
                                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Les candidats peuvent généralement suivre l'état de leurs candidatures en ligne, recevoir des mises à jour sur les nouvelles opportunités, et être informés sur les étapes du processus de recrutement.</p>
                            </div>                                
                         </div>
                    </div>


                    

                </div>
                <div className='w-1/2 flex justify-center items-center'>
                    <div className='relative bg-primary rounded-3xl w-1/2 h-96'>
                    <div className="absolute -bottom-0 -left-7">
                    <div className="flex justify-center items-center rounded-full w-16 h-16  bg-darkk">
                        
                    </div>
                    </div>
                            dkdjsjsd
                    </div>
                </div>
                
            </div>
            <div className='m-10 '>
                 <Advice/>
            </div>

        </div>
    )
}

export default WhyUs