import {  useEffect, useState } from "react";
import OffersCard from "./OffersCard";
import { SidebarFilter } from "./SidebarFiiter";
// import {regions} from "../../Types/Globals";
// import { jobDetails } from "../../Types/DataJobs";
import axios from "axios";
import { OfferData } from "../../Types/Globals";





const OffersList = () => {

    //const [showData, setShowData] = useState(false);
    const [checkboxValues, setCheckboxValues] = useState<string[]>([]);
    // const [dropdownToggle, setdropdrownToggle] = useState(false);
    // const [regionSelected, setRegionSelected] = useState("Ville, Région")
    const [searchValue, setSearchValue] = useState('')
    const [data, setData] = useState<OfferData[]>([]); 
   
    //toggle region dropdown 

    // const handleDropdownToggle = () =>{
    //     setdropdrownToggle(!dropdownToggle)
                  
    // }
  
    // get the value of the list regions
    // const handleDropDownValue = (value:string)=>{
       
    //     setRegionSelected(value.toLowerCase().replace(/[-_',]/g," " ) )

    //     setdropdrownToggle(!dropdownToggle)
    // }
    
    // handle Search input 
    const handleSubmit = (e: any, searchValue: string, setCheckboxValues: React.Dispatch<React.SetStateAction<string[]>>) => {
        e.preventDefault();
        
        setCheckboxValues((prevValues) => {
            if ( searchValue && !checkboxValues.includes(searchValue) 
            // && !checkboxValues.includes(regionSelected)
            ){
                // let f : string = regionSelected
                return [...prevValues,searchValue,
                    //  regionSelected
                    ];
            }

            if (searchValue && !checkboxValues.includes(searchValue)) {
              
                return [...prevValues, searchValue];

            } 
            // if(regionSelected 
            //     && !checkboxValues.includes(regionSelected)){
                
            //     return [...prevValues, regionSelected];
                
            // } 
           
           
            return prevValues;
        });
    };

    const handleInputChange =  (e:React.ChangeEvent<HTMLInputElement>)=>{
        if (checkboxValues.includes(searchValue)){

            // clean the previous searchValue from checkboxValues Array
            setCheckboxValues(checkboxValues.filter(v => v !== searchValue))
            setSearchValue( e.target.value.toLowerCase().replace(/[-_',]/g," " ))
        } else {
            setSearchValue( e.target.value.toLowerCase().replace(/[-_',]/g," " ) )
        }
    
    }
    // Fetch data depends on the search input and checkboxes values
    const fetchOffers = async ()=> {
       await axios.get<OfferData[]>("http://localhost:3000/candidat/trouverunemploi")
        .then(response =>{            
            setData(response.data)})
        .catch(error => console.log(error))
    }
    // Assume this function is called when you handle form submission
    const handlesub = (e: any) => {
        fetchOffers()
        handleSubmit(e, searchValue
            // ,regionSelected 
            , setCheckboxValues);
        
   
    };
   
    const handleFilterChange = (values: string[])=>{
        if (searchValue 
            // || regionSelected && regionSelected !== "Ville, Région"
            ){

           if (searchValue 
            // && regionSelected && regionSelected !== "Ville, Région"
            ){

                setCheckboxValues([searchValue
                    // , regionSelected
                    , ...values])

           }
            // else  if (regionSelected && regionSelected !== "Ville, Région") {

            //     setCheckboxValues([regionSelected, ...values])

            // } 
            else if (searchValue){                
                setCheckboxValues([searchValue, ...values])
            } 
        } else {
            setCheckboxValues([...values])
        }
       

    }
    useEffect(()=>{
        console.log(data);
        
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
                        <form onSubmit={handlesub} className="flex w-full">
                            <div className="w-full">
                            
                                <label htmlFor="searchDropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Domaines, Mots clés</label>
                                <input type="search" id="searchDropdown" onChange={handleInputChange} value={searchValue} className="block w-full p-3 text-sm text-gray-900 rounded-s-lg border-r-gray-50 border-r-2 border border-gray-300 bg-slate-100 " placeholder="Méties, Domaines, Mots clés"/>
                                
                            </div>

                            {/** dropdown ville et régions */}

                            <div className="relative flex">
                            
                            
                                <div className="flex-none w-9">
                                    <button type="submit" className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-search rounded-e-lg border border-gray-300 hover:bg-secondary">
                                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
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
                    <SidebarFilter onCheckboxChange= {handleFilterChange}/>
                </div>
                <div className="flex-auto">

                {
                
                data.filter(offer => {
                        
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
                        
                        <OffersCard key={index} jobs={filteredOffer} id= {filteredOffer.id}/>
                      ))  }                  
                </div>                
            </div>
            <div>                
            </div>
            
      </>
    )
} 

export default OffersList;


