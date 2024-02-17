import { useEffect, useState } from "react";
import { dataFromChild } from "../../Types/Globals";

const filterCategories = [
  {
    title: "Le type du travail",
    options: ["Temps plein", "Mi-temps", "Étudiant", "À distance"],
  },
  {
    title: "Le type du contrat",
    options: ["CDI", "CDD", "Stage", "Anapec", "Freelance"],
  },
  {
    title: "Domaines",
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
  // Add more categories as needed
];

export const SidebarFilter: React.FC<dataFromChild> = ({ onCheckboxChange }) => {
  const [userInfo, setUserInfo] = useState<string[]>([]);

  const handleChange =  (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, checked } = e.currentTarget;
      setUserInfo((prevUserInfo) =>
      checked ? [value,...prevUserInfo ] : prevUserInfo.filter((item) => item !== value)
    );
     //onCheckboxChange(userInfo);
   
    
  };

  useEffect(() => {
    onCheckboxChange(userInfo);
    //console.log(userInfo);
    
  }, [userInfo]);

  return (
    <div className="bg-third w-full">
      {filterCategories.map((category) => (
        <div key={category.title} className="p-4 border-b-2 border-b-pink-950">
          <h4>{category.title}:</h4>
          <ul className="p-2">
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
      {/* Add more filter sections as needed */}
    </div>
  );
};