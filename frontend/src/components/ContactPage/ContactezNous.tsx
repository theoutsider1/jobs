import { IonIcon } from '@ionic/react';
import {mailOutline} from 'ionicons/icons';
import {callOutline} from 'ionicons/icons';
import { locationOutline } from 'ionicons/icons';
export const ContactezNous = ()=> {

    return (
        <div className={`w-full flex flex-col justify-center items-center bg-third  `}>
          
            <h2 className="p-10 text-3xl font-semibold z-10 "> Contact </h2>
          
            <form id="contactForm z-40 ">
                <div className="w-full flex flex-rows-3">
                    <div className="w-1/3">
                        <div className="flex flex-col">
                        <label htmlFor="nomComplet" className="w-44 m-5 text-xl font-semibold">
                            Nom complet
                        </label>
                        <label htmlFor="mail" className="w-44 m-7 text-xl font-semibold">
                            mail
                        </label>
                        <label htmlFor="phone" className="w-44 m-7 text-xl font-semibold">
                             N° de Téléphone
                        </label>
                        <label htmlFor="sujet" className="w-44 m-7 text-xl font-semibold">
                            sujet
                        </label>
                        </div>
                    
                    </div>
                    <div className="w-2/3">
                        <div className="flex flex-col">
                                <input type="text" id="nomComplet" className=" w-44 px-44 py-2 m-4 rounded-md" />
                                <input type="text" id="mail"  className="w-44 px-44 py-2 m-5 rounded-md"/>
                                <input type="text" id="phone"  className="w-44 px-44 py-2 m-5 rounded-md"/>
                                <input type="text" id="sujet"  className="w-44 px-44 py-10 m-5 rounded-md"/>
                        </div>
                    
               </div>
              
                   
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