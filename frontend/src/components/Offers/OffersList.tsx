import { useEffect, useState } from "react";
import OffersCard from "./OffersCard";
import { OfferData } from "../../Types/Globals";
import { SiderbarFilter } from "./SidebarFiiter";

export const offers: OfferData[] = [{
    jobTitle: 'Responsable administratif et financier h/f',
    companyName : 'McDonald\'s',
    contract: 'CDD',
    ville : 'Kesh',
    domaine: 'Information',
    studies : 'Niveau d’études: Bac +5 en Finance',
    experienceYears: '3 ans',
},
{
    jobTitle: 'administratif et financier h/f',
    companyName : 'Maltem',
    contract: 'stage',
    ville : 'Kesh',
    domaine: 'Information',
    studies : 'Niveau d’études: Bac +5 en Finance',
    experienceYears: '5 ‹ans',
}]

const OffersList = () => {

    const [showData, setShowData] = useState(false);
    const [checkboxValues, setCheckboxValues] = useState<string[]>([]);

    const handleClick = () => {
        setShowData(!showData);
        //console.log(checkboxValues)
    }

    const handleFilterChange = (values: string[])=>{
        setCheckboxValues(values)
        console.log(values)

    }
    useEffect(()=>{
       setShowData(!showData);
    },[checkboxValues])
   
    
    return (
        <>
            <div className="w-full h-46 justify-center items-center bg-darkk flex flex-col  ">

                {/** div 1 */}

                <div className="p-14">
                    <h2 className="text-white text-5xl font-extrabold tracking-widest">
                        Trouver l'emploi de vos rêves
                    </h2>
                </div>

                {/** div 2 */}

                <div className="w-1/2">

                    {/** Search Bar */}
                    <div className="flex w-full" >
                        <div className="w-1/2 ">

                            <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Domaines, Mots clés</label>
                            <input type="search" id="search-dropdown" className="block w-full p-3 text-sm text-gray-900 rounded-s-lg border-r-gray-50 border-r-2 border border-gray-300 bg-slate-100 " placeholder="Méties, Domaines, Mots clés"/>
                            
                        </div>

                            {/** dropdown ville et régions */}

                        <div className="w-1/2 relative flex">
                            
                            <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-auto z-10 inline-flex items-center justify-between p-3 text-sm font-medium text-center text-gray-900  bg-slate-100 border border-gray-300  hover:bg-gray-200 focus:ring-1"  type="button">
                                    Ville, Région
                                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                    </svg>
                            </button>
                            <div className="flex-none w-9">
                            <button type="submit" onClick={handleClick} className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-search rounded-e-lg border border-gray-300 hover:bg-secondary">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                    <span className="sr-only">Search</span>
                            </button>
                            
                            </div>
                           
                           
                        </div>
                    </div>
                    
                </div>


                
            </div>            


            <div className="flex flex-row w-full justify-start p-24 gap-14">


                <div className="bg-white flex-none w-96">
                    <SiderbarFilter onCheckboxChange= {handleFilterChange}/>
                </div>
                <div className="flex-auto">

                { showData && 

                    
                    offers.filter(offer => {
                        // Check if any property value in the offer matches any value in checkboxValues
                        return Object.values(offer).some(value => {
                          if (typeof value === 'string') {
                            return checkboxValues.some(checkboxValue => value.includes(checkboxValue));
                          }
                          return false;
                        });
                      })
                      .map((filteredOffer, index) => (
                        <OffersCard key={index} jobs={filteredOffer} />
                      ))}
                    
                </div>
            </div>
            
            
        </>
    )
} 

export default OffersList;


