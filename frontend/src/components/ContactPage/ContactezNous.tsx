import { IonIcon } from '@ionic/react';
import {mailOutline} from 'ionicons/icons';
import {callOutline} from 'ionicons/icons';
import { locationOutline } from 'ionicons/icons';




export const ContactezNous = ()=> {

    return (
        <div className="w-full flex flex-col justify-center items-center bg-third bg-[url('../../src/assets/svgBgContact.png')] bg-cover bg-no-repeat ">
          
             <h2 className="p-10 text-3xl font-semibold z-10 "> Contact </h2>
          
             <form id="contactForm" className='w-full px-64'>
               <div className="">
                <ul >
                    <li className='p-3'>
                        <div className=' mx-14 flex flex-row-4 justify-center'>
                            <div className='w-1/4 mx-14'>
                                <label htmlFor="nomComplet" className="w-full m-1 text-xl font-semibold">
                                    Nom complet
                                </label>
                            </div>
                            <div className='w-3/4'>
                                <input type="text" id="nomComplet" className=" block w-full rounded-md border-0 py-1.5 pl-3 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 " />
                            </div>
                            
                        </div>
                    </li>
                    <li className='p-3'>
                        <div className=' mx-14 flex flex-row-4 justify-center'>
                            <div className='w-1/4 mx-14'>
                                <label htmlFor="nomComplet" className="w-full m-1 text-xl font-semibold">
                                    E-mail
                                </label>
                            </div>
                            <div className='w-3/4'>
                                <input type="text" id="nomComplet" className=" block w-full rounded-md border-0 py-1.5 pl-3 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 " />
                            </div>
                                
                        </div>
                    </li>
                    
                    <li className='p-3'>
                        <div className=' mx-14 flex flex-row-4 justify-center'>
                            <div className='w-1/4 mx-14'>
                                <label htmlFor="nomComplet" className="w-full m-1 text-xl font-semibold">
                                 N° de Téléphone
                                </label>
                            </div>
                            <div className='w-3/4'>
                                <input type="text" id="nomComplet" className=" block w-full rounded-md border-0 py-1.5 pl-3 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 " />
                            </div>
                                
                        </div>
                    </li>
                    <li className='p-3'>
                        <div className=' mx-14 flex flex-row-4 justify-center'>
                            <div className='w-1/4 mx-14'>
                                <label htmlFor="nomComplet" className="w-full m-1 text-xl font-semibold">
                                Sujet
                                </label>
                            </div>
                            <div className='w-3/4'>
                                <textarea  id="nomComplet" className="block w-full rounded-md border-0 h-24 py-1.5 pl-3 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 " />
                            </div>
                                
                        </div>
                    </li>
                </ul>
               </div>
             </form>
             <button className="bg-darkk hover:bg-secondary text-white font-bold text-lg py-2 px-14 rounded h-12 m-2">
                 Envoyé
             </button>

             <div className=" m-5 bg-secondary rounded-xl flex flex-col-3 space-x-12">
                 <div className="w-1/3 p-4 flex flex-col justify-center items-center">
                     <div>
                         <IonIcon icon={mailOutline} className='text-5xl'></IonIcon>
                     </div>
                         <h3>2jobs@gmail.com</h3>
                 </div>
                 <div className="w-1/3 p-4 flex flex-col justify-center items-center">
                     <div>
                        <IonIcon icon={callOutline} className='text-5xl'></IonIcon>
                     </div>
                         <h3> +212 600 000 000</h3>
                 </div>
                 <div className="w-1/3 p-4 flex flex-col justify-center items-center">
                     <div>
                         <IonIcon icon={locationOutline} className='text-5xl text-center'></IonIcon>
                     </div>
                        <h3>Rue al maarifa, Res yassmine étage 2 Rabat</h3>             
                 </div>
             </div>

        </div>
       
    )
}