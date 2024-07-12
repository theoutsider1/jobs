import { IonIcon } from "@ionic/react"

import { addCircleOutline } from 'ionicons/icons';
import { personCircleOutline } from 'ionicons/icons';
import { pencil } from 'ionicons/icons';
import { homeOutline } from 'ionicons/icons';
import { eyeOutline} from 'ionicons/icons';
import { trashBinOutline} from 'ionicons/icons';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";

// interface SidebarProps {
//   onSelect: (view: string) => void;
//   selectedView : string
// }

export const RecruiterProfil= ()=>{
  const [selectedView, setSelectedView] = useState('offersManagement');

  const navigate = useNavigate();
  const location = useLocation();

  const handleSelect = (view: string) => {
    setSelectedView(view);
    switch (view) {
      case 'myprofile':
        navigate(`/suivezlesOffres/mon-profile`);
        break;
      case 'addOffer':
        navigate('/suivezlesOffres/ajouter-offre');
        break;
      case 'offersManagement':
        navigate('/suivezlesOffres/offersManagement');
        break;
      // Add more cases as needed
      default:
        console.error('Unknown view:', view);
    }
  };
  useEffect(() => {
    // Update the selectedView based on the current path
    const path = location.pathname;
    if (path.includes('mon-profile')) {
      setSelectedView('myprofile');
    } else if (path.includes('ajouter-offre')) {
      setSelectedView('addOffer');
    } else if (path.includes('offersManagement')) {
      setSelectedView('offersManagement');
    }
  }, [location.pathname]);


  return (
    <div className="h-screen flex flex-col justify-between divide-y divide-neutral-700">
      {/* sideBar Title --Home icon + name -- */}
      <div className="px-3 divide-y divide-neutral-700">
          <div className="w-full py-7">
            
              <div className="flex justify-start items-center font-semibold text-2xl gap-4">
                <span className=""><IonIcon icon={homeOutline}  className=" cursor-pointer" /></span>
                <h5 className="text-neutral-900 cursor-pointer">Hatim</h5>
              </div>
            
          </div>
         

        <div className="w-full px-2 py-12  flex flex-col gap-7 justify-start items-start">
          {/* Mes offres */}
          <button className="text-xl " onClick={() => handleSelect('offersManagement')}>
            <div className={`flex justify-start items-center ${selectedView === 'offersManagement'  ? `opacity-100` : `opacity-65`}`}>
            <IonIcon icon={pencil}  className="text-xl cursor-pointer" />
            <h5 className={`px-2 ${selectedView === 'offersManagement' ? `font-semibold` : ``} `}>Mes offres</h5>
            </div>
            
          </button>

            {/* Ajouter un offre */}
            <button className="text-xl " onClick={() => handleSelect('addOffer')}>
            
            <div className={`flex justify-center items-center ${selectedView === 'addOffer' ? `opacity-100` : `opacity-65`}`}>
            <IonIcon icon={addCircleOutline}  className="text-xl  cursor-pointer" />
            <h5 className={`px-2 ${selectedView === 'addOffer' ? `font-semibold` : ``} `}>Ajouter un offre</h5>
            </div>
            
          </button>
            {/* Trouver un candidat */}
          <button className="text-xl  ">

            <div className={`flex justify-center items-center ${selectedView === 'findCandidat' ? `opacity-100` : `opacity-65`}`}>
            <IonIcon icon={eyeOutline}  className="text-xl cursor-pointer" />
            <h5 className={`px-2 ${selectedView === 'findCandidat' ? `font-semibold` : ``} `}>Trouver un candidat</h5>
            </div>
            
          </button>
            {/* Mon profile */}
          <button className="text-xl" onClick={() => handleSelect('myprofile')}>

            <div className={`flex justify-center items-center ${selectedView === 'myprofile' ? `opacity-100` : `opacity-65`}`}>
              <IonIcon icon={personCircleOutline}  className="text-xl  cursor-pointer" />
              <h5 className={`px-2 ${selectedView === 'myprofile' ? `font-semibold` : ``} `}>Mon Profile</h5>
            </div>
            
          </button>
         
        </div>
        </div>

        {/* sideBar Bottom */}
          {/* Modifier mon mot de passe */}
        <div className="mx-3 pb-12 ">
          <div className="w-full flex justify-start items-center py-3 ">
                <IonIcon icon={pencil} className="text-xl cursor-pointer" />
                <h5 className="px-1 cursor-pointer " >Modifier mon mot de passe</h5>
          </div>
          {/* Supprimer mon compte */}
          <div className="flex justify-start items-center">
                <IonIcon icon={trashBinOutline} className="text-xl " />
                <h5 className="px-1 cursor-pointer ">Supprimer mon compte</h5>
              </div>
        </div>
    </div>
  )
}