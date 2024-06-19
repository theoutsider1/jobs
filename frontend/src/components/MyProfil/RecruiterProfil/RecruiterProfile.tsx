import { IonIcon } from "@ionic/react"

import { addCircleOutline } from 'ionicons/icons';

export const RecruiterProfil = ()=>{


  return (
    <div className="w-full h-screen flex flex-row-4">
      {/* SideBar */}
      <div className="w-1/4 p-8 bg-third flex flex-col items-center">

        <div className="px-8 py-2 border-2 border-darkk bg-third">
          <p className="text-xl ">Bonjour, Hatim</p>
        </div>
         <button>
          <IonIcon icon={addCircleOutline}></IonIcon>
          Ajouter un offre</button>
         
      </div>

      {/* rendering components */}
      <div className="w-3/4 flex justify-center">
        sdsadsadas
      </div>

    </div>
  )
}