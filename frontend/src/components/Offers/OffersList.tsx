import { useEffect, useState } from "react";
import OffersCard from "./OffersCard";
import { OfferData } from "../../Types/Globals";
import { SiderbarFilter } from "./SidebarFiiter";
import {regions} from "../../Types/Globals";
export const offers: OfferData[] = [{
    jobTitle: 'Responsable administratif et Information h/f',
    companyName : 'McDonald\'s',
    contract: 'C-DD',
    ville : 'Kesh',
    domaine: 'Information',
    studies : 'Niveau d’études: Bac +5 en Information',
    experienceYears: '3 ans',
},
{
    jobTitle: 'DevOps',
    companyName : 'Maltem',
    contract: 'Stage',
    ville : 'rabat',
    domaine: 'tourisme',
    studies : 'Niveau d’études: Bac +5 en tourisme',
    experienceYears: '5 ans',
},
{
    jobTitle: 'Agriculture ',
    companyName : 'DXC',
    contract: 'étudiant',
    ville : 'Kesh',
    domaine: 'Agriculture',
    studies : 'Niveau d’études: Bac +5 en Agriculture',
    experienceYears: '5 ans',
},
{
    jobTitle: 'caissier',
    companyName : 'alten',
    contract: 'C-DD',
    ville : 'oujda',
    domaine: 'finance',
    studies : 'Niveau d’études: Bac +6 en chirurgie',
    experienceYears: '5 ans',
}]

const OffersList = () => {

    //const [showData, setShowData] = useState(false);
    const [checkboxValues, setCheckboxValues] = useState<string[]>([]);
    const [dropdownToggle, setdropdrownToggle] = useState(false);
    const [regionSelected, setRegionSelected] = useState("Ville, Région")
    const [searchValue, setSearchValue] = useState('')
    //toggle region dropdown agriculture

    const handleDropdownToggle = () =>{
        setdropdrownToggle(!dropdownToggle)
        
    }
    // get the value of the list regions
    const handleDropDownValue = (value:string)=>{
        setRegionSelected(value)
        setdropdrownToggle(!dropdownToggle)
    }
    
    // handle Search input 
    const handleSubmitButton =  (e:any) =>{
        //console.log('hi')
        e.preventDefault();
         setCheckboxValues(prevValue => {
            if(!searchValue){
                return [...prevValue]
                //console.log('hi')
               // console.log(searchValue)
            } else {
                
                //console.log([...prevValue , searchValue]);
                
                return  [...prevValue , searchValue]
               
            }
        })  
    }
    const handleInputChange =  (e:React.ChangeEvent<HTMLInputElement>)=>{
        
        setSearchValue(e.target.value)
       // console.log(searchValue);
        
       //setCheckboxValues([...checkboxValues, searchValue.toLocaleLowerCase()])
        
    }
 
    
    const handleFilterChange = (values: string[])=>{
        
       setCheckboxValues(values)

    }
    
    useEffect(()=>{
        
       console.log(checkboxValues)
       
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
                        <form onSubmit={handleSubmitButton} className="flex w-full">
                            <div className="w-1/2 ">
                            
                                <label htmlFor="searchDropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Domaines, Mots clés</label>
                                <input type="search" id="searchDropdown" onChange={handleInputChange} value={searchValue} className="block w-full p-3 text-sm text-gray-900 rounded-s-lg border-r-gray-50 border-r-2 border border-gray-300 bg-slate-100 " placeholder="Méties, Domaines, Mots clés"/>
                                
                            </div>

                            {/** dropdown ville et régions */}

                        <div className="w-1/2 relative flex">
                            <div className="flex flex-col w-full">
                                <button id="dropdown-button" data-dropdown-toggle="dropdown" onClick={handleDropdownToggle} className="flex-auto z-10 inline-flex items-center justify-between p-3 text-sm font-medium text-center text-gray-900  bg-slate-100 border border-gray-300  hover:bg-gray-200 focus:ring-1"  type="button">
                                        {regionSelected}
                                        <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                                        </svg>
                                </button>
                                { dropdownToggle &&
                                    <div className={`${dropdownToggle  ? " w-[343px] z-30 mt-11 absolute bg-primary" : "hidden"}`}>
                                            {regions.map(ville => (
                                                <ul className="text-sm pt-4 ">
                                                    <li key= {ville} value={ville} onClick={() => handleDropDownValue(ville)} className="px-4 py-3 hover:bg-third cursor-pointer " >{ville}</li>
                                                
                                                </ul>
                                            ))}
                                    </div>}
                            
                            </div>
                        
                           
                            
                            
                            <div className="flex-none w-9">
                                <button type="submit" onSubmit={handleSubmitButton} className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-search rounded-e-lg border border-gray-300 hover:bg-secondary">
                                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                        </svg>
                                        <span className="sr-only">Search</span>
                                </button>
                            
                            </div>
                            
                        </div>
                        </form>
                    </div>
                    
                </div>


                
            </div>            
           
            <div className="flex flex-row w-full justify-start p-24 gap-14">


                <div className="bg-white flex-none w-96">
                    <SiderbarFilter onCheckboxChange= {handleFilterChange}/>
                </div>
                <div className="flex-auto">

                {

                    
                    offers.filter(offer => {
                        
                        // Check if any property value in the offer matches any value in checkboxValues
                        return Object.values(offer).some(value => {
                           
                          if (typeof value === 'string') {
                            //console.log(checkboxValues)
                            
                            return checkboxValues.some(checkboxValue => value.toLowerCase().replace(/[-_']/g," ").includes(checkboxValue.toLowerCase().replace(/[-_']/g," ")));
                            
                          }
                          return false;
                        });
                        
                      })
                      .map((filteredOffer, index) => (
                        
                        <OffersCard key={index} jobs={filteredOffer} />
                      ))}
                    
                </div>
                
            </div>
            <div>
                
            </div>
            
            
        </>
    )
} 

export default OffersList;


