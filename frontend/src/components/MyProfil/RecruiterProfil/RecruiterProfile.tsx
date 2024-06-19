import { IonIcon } from "@ionic/react"

import { addCircleOutline } from 'ionicons/icons';
import { personCircleOutline } from 'ionicons/icons';
import { pencil } from 'ionicons/icons';
import { homeOutline } from 'ionicons/icons';
import { eyeOutline} from 'ionicons/icons';
import { trashBinOutline} from 'ionicons/icons';

export const RecruiterProfil = ()=>{


  return (
    <div className="w-full h-screen flex flex-row-4">
      {/* SideBar */}
      <div className="w-1/6 bg-third flex flex-col justify-between divide-y divide-neutral-700">

      <div className="px-3 divide-y divide-neutral-700">
        <div className="w-full py-7">
          
            <div className="flex justify-start items-center font-semibold text-2xl gap-4">
              <span className=""><IonIcon icon={homeOutline}  className=" cursor-pointer" /></span>
              <h5 className="text-neutral-900 cursor-pointer">Hatim</h5>
            </div>
           
        </div>
         

        <div className="w-full px-2 py-12  flex flex-col gap-7 justify-start items-start">
          <button className="text-xl ">
            
            <div className="flex justify-center items-center opacity-65">
            <IonIcon icon={addCircleOutline}  className="text-xl  cursor-pointer" />
            <h5 className="px-2">Ajouter un offre</h5>
            </div>
            
          </button>
          <button className="text-xl ">
            
            <div className="flex justify-start items-center opacity-65">
            <IonIcon icon={pencil}  className="text-xl cursor-pointer" />
            <h5 className="px-2">Modifier un offre</h5>
            </div>
            
          </button>

          <button className="text-xl ">

            <div className="flex justify-center items-center opacity-65">
            <IonIcon icon={eyeOutline}  className="text-xl  cursor-pointer" />
            <h5 className="px-1">Trouver un candidat</h5>
            </div>
            
          </button>
          
          <button className="text-xl ">

            <div className="flex justify-center items-center opacity-65">
              <IonIcon icon={personCircleOutline}  className="text-xl  cursor-pointer" />
              <h5 className="px-2">Mon Profile</h5>
            </div>
            
          </button>
         
        </div>
        </div>
        {/* sideBar Bottom */}
        <div className="mx-3 pb-12 ">
          <div className="w-full flex justify-start items-center py-3 ">
                <IonIcon icon={pencil} className="text-xl cursor-pointer" />
                <h5 className="px-1 cursor-pointer " >Modifier mon mot de passe</h5>
          </div>
          <div className="flex justify-start items-center">
                <IonIcon icon={trashBinOutline} className="text-xl " />
                <h5 className="px-1 cursor-pointer ">Supprimer mon compte</h5>
              </div>
        </div>
         
      </div>

      {/* rendering components */}
      <div className="w-5/6 flex justify-center">
        sdsadsadas
      </div>

    </div>
  )
}