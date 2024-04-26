import { useEffect, useState } from "react";
import { dataFromChild } from "../../Types/Globals";
import { IonIcon } from '@ionic/react';
import {chevronForwardOutline} from 'ionicons/icons';
const filterCategories = [
  {
    title: "Le type du travail:",
    options: ["Temps plein", "Mi-temps", "Étudiant", "À distance"],
  },
  {
    title: "Le type du contrat:",
    options: ["full-time", "CDD", "Stage", "Anapec", "Freelance"],
  },
  {
    title: "Domaines:",
    options: [
      "Agriculture",
      "Audiovisual",
      "Industrie",
      "Énergie",
      "Électrique",
      "Marketing",
      "Finance",
      "Santé",
      "Tourisme",
      "Immobilier",
    ],
  },
  {
    title: "Fonction:",
    options:[
      "RH",
      "Comptabilité",
      "Gestion/Gestion du projet",
      "Achat",
      "Communication/publicité",
      "Assurance",
      "Commercial",
      "Assistant",
      "Audit",
      "Droit",
    ],
  },
  {
    title: "Niveau d’études:",
    options:[
      "Bac+5 et plus",
      "Bac+4",
      "Bac+3",
      "Bac+2",
      "Bac",
    ],
  },
  {
    title: "Année d’expériences:",
    options:[
      "Plus de 20 ans",
      "De 5 à 10 ans ",
      "de 3 à 5 ans",
      "De 1 à 3 ans",
      "Moins de 1 an",
      "Débutant",
    ],
  },
  {
    title: "Offers de stages:",
    options:[
      "Stage PFE",
      "Stage PFA",
      "Stage d’observation",
      "Stage pré-mbauche",
      
    ],
  },
  // Add more categories as needed
];

export const SidebarFilter: React.FC<dataFromChild> = ({ onCheckboxChange }) => {
  const [userInfo, setUserInfo] = useState<string[]>([]);
  const [clickedfilter, setClickedfilter] = useState(false);
  const [filterIndex , setFilterIndex] = useState<null | number> (null);

  const handleChange =  (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, checked } = e.currentTarget;
      setUserInfo((prevUserInfo) =>
      checked ? [value,...prevUserInfo ] : prevUserInfo.filter((item) => item !== value)
    );  
  };

  const toggleBewteenfilters = (index : number) => {
      setClickedfilter(!clickedfilter)
      setFilterIndex(index)
  }

  useEffect(() => {
    onCheckboxChange(userInfo);
   
    
  }, [userInfo]);

  return (
    <div className="bg-third w-full">
      {filterCategories.map((category , index) => (
        <div key={category.title} className="p-4 ">
          <div className="w-full cursor-pointer flex justify-between">
            <h3 onClick={() => toggleBewteenfilters(index)} className="w-full text-left	inline ">{category.title}</h3>
            <IonIcon icon={chevronForwardOutline} className={clickedfilter && filterIndex === index ?`rotate-90 text-xl py-1` : `text-xl py-1`}></IonIcon>  
          </div>
      
          <ul className={`p-2 ${clickedfilter && filterIndex === index ? '' : 'hidden'}`}>
            {category.options.map((option) => (
              <li key={option}>
                <label>
                  <input type="checkbox" value={option} onChange={handleChange} />
                  <span className="px-3">{option}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
     
    </div>
  );
};