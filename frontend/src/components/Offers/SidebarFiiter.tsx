import { useEffect, useState } from "react";
import { dataFromChild } from "../../Types/Globals";
import { IonIcon } from '@ionic/react';
import {chevronForwardOutline} from 'ionicons/icons';
const filterCategories = [
  {
    title: "Type du travail:",
    options: ["Temps plein", "Mi-temps", "Étudiant", "À distance"],
  },
  {
    title: "Type du contrat:",
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
    if (filterIndex == index ){
      setClickedfilter(!clickedfilter)
      setFilterIndex(index)
    } else {
      setClickedfilter(true)
      setFilterIndex(index)
    }
      
  } 

  useEffect(() => {
    onCheckboxChange(userInfo);
   
    
  }, [userInfo]);

  return (
    <div className=" w-full">
      {filterCategories.map((category , index) => (
        <div key={category.title} className="p-3 ">
          <div onClick={() => toggleBewteenfilters(index)} className="w-full cursor-pointer flex justify-between">
            <h3  className="w-full text-left	inline ">{category.title}</h3>
            <IonIcon icon={chevronForwardOutline} className={clickedfilter && filterIndex === index ?`rotate-90 text-xl py-1` : `text-xl py-1`}></IonIcon>  
          </div>
      
          <ul className={`${clickedfilter && filterIndex === index ? '' : 'hidden'}`}>
            {category.options.map((option) => (
              <li key={option} className="py-1.5">
                <label className="cursor-pointer " >
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