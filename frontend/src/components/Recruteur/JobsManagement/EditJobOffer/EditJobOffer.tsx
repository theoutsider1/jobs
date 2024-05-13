import { useAppSelector } from "../../../store/store"
import {  ChangeEvent,KeyboardEvent ,useState } from "react";
import { fonctionOptions } from "../../../../Types/Globals";
import { dropdownOptions } from "../../../../Types/Globals";
import { typeTravail } from "../../../../Types/Globals";
import { regionOptions } from "../../../../Types/Globals";
import { domaineOptions } from "../../../../Types/Globals";
export const EditJobOffer = () => {

    const [toggleFonctions, setToggleFonctions] = useState(false);
    const [toggleContractType, setToggleContractType] = useState(false);
    const [toggleTypeTravail, setToggleTypeTravail] = useState(false);
    const [toggleRegion, setToggleRegion] = useState(false);
    const [toggleDomaine, setToggleDomaine]= useState(false);
    // get all job details from redux store
    const toEditJob  = useAppSelector(state => {
        
        return state.recruiterOffersList.recruiterOffer
    })
    const jobB = toEditJob[0];

    const [newFonction, setNewFonction] = useState(jobB.fonction || '');
    const [newContractType, setNewContractType] = useState(jobB.contractType);
    const [newTypeTravail, setNewTypeTravail] = useState(jobB.jobType);
    const [newRegion, setNewRegion] = useState(jobB.city);
    const [newDomaine, setNewDomaine]=useState(jobB.domaine);

    // toggle FONCTION dropdown options
    const toggleFonctionOptions = () => {
        setToggleFonctions(!toggleFonctions);
    }
    const handleNewFonction = (label : string)=>{
        setNewFonction(label);
    }

    // handle CONTRACT TYPE dropdown options
    const handleToggleContractType = () => {
        setToggleContractType(!toggleContractType);
    }
    const handleNewContractType = (label :string) => {
        setNewContractType(label);
       
    }
    // handle CONTRACT TYPE dropdown options
    const handleToggleTypeTravail = () => {
        setToggleTypeTravail(!toggleTypeTravail);
    }
    const handleNewTypeTravail = (label : string)=> {
        setNewTypeTravail(label)
    }
    // handle Region dropdown options
    const handleToggleRegion = () => {
        setToggleRegion(!toggleRegion);
    }
    const handleNewRegion = (label : string)=> {
        setNewRegion(label)
    }

    // Handle Domaine Dropdown options
    const handleToggleDomaine = ()=>{
        setToggleDomaine(!toggleDomaine);
    }
    const handleNewDomaine = (label: string)=> {
        setNewDomaine(label)
    }
    
   // ------Advantages input---------------
   const [avantage, setAvantage] = useState<string[]>([]);
   const [currentInput, setCurrentInput] = useState<string>('');

   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
       setCurrentInput(event.target.value);
   };

   const handleAddAvantage = (event: KeyboardEvent<HTMLInputElement>) => {
       if (event.key === ',' && !avantage.includes(currentInput.trim())) {
        const trimmedInput = currentInput.trim().replace(/,/g, ''); // Remove commas from input
        if(trimmedInput !== '' && trimmedInput !== ','){
            setAvantage([...avantage, trimmedInput]);
            setCurrentInput('');
        }
        
       }
   };
   
   const removeAvantage = (index:number) => {
       setAvantage([...avantage.filter(tag => avantage.indexOf(tag) !== index)]);
   };
   // ---------------------

   // HandleSubmit 
   const [initialFormData, setinitialFormData] = useState({
    title : jobB.title,
    city : jobB.city,
    contractType: jobB.contractType,
    experience : jobB.experience,
    domaine : jobB.domaine,
    companyName: jobB.companyName,
    jobType: jobB.jobType,
    missions : jobB.missions,
    deadline: jobB.deadline,
    fonction: jobB.fonction,
    studiesRequirement: jobB.studiesRequirement,
    profil : jobB.profil,
    advantages : jobB.advantages,

   })
   const handleSubmit = ()=>{

   }
    return (
        <div className="w-full">
            {toEditJob && toEditJob.map(field => (
 
            <div key={field.id} className="w-full flex-col jusify-between ">
               
                <h3 className="w-full p-10 bg-fifth  text-center text-5xl font-semibold ">
                     Modifier votre <span className="underline decoration-dashed decoration-darkk">offre d'emploi</span>
                </h3>
            <form onSubmit={handleSubmit} id="" className="w-full bg-third p-5 flex flex-col ">
                {/* row 1 */}
                <div className="w-full flex flex-row-12 justify-around gap-8">
                <div className="mb-5 w-4/12">
                    <label
                        htmlFor="title"
                        className="mb-3 block text-base font-medium text-black"
                        >
                        Titre De Poste:
                    </label>
                    <input
                        type="text"
                        defaultValue={field.title}
                        name="title"
                        id="title"
                        placeholder="Nom du Poste"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                    </div>
                    <div className="mb-5 w-4/12">
                        <label
                            htmlFor="companyName"
                            className="mb-3 block text-base font-medium text-black"
                            >
                        Entreprise:
                        </label>
                        <input
                            type="text"
                            defaultValue={field.companyName}
                            name="companyName"
                            id="entreprise"
                            placeholder="Full Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5 w-4/12">
                        <label
                            htmlFor="experience"
                            className="mb-3 block text-base font-medium text-black"
                            >
                            Experience:
                        </label>
                        <input
                            type="text"
                            defaultValue={field.experience}
                            name="experience"
                            id="experience"
                            placeholder="Experience"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>    
                </div>

                {/* row 2 */}
                {/* Fonction Dropdown */}
                <div className="w-full flex flex-row-12 justify-around gap-8">
                    <div className="mb-5 w-4/12 relative ">
                        <label
                            htmlFor="fonction"
                            className="mb-3 block text-base font-medium text-black"
                            >
                            Fonction:
                        </label>
                        
                        <button id="dropdownDefaultButton" onClick={()=>toggleFonctionOptions()}
                         data-dropdown-toggle="dropdown-list" className="w-full  text-white bg-fourth hover:bg-darkk font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center justify-between" type="button">
                            {newFonction}
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>
                    { toggleFonctions &&
                   
                   <div id="dropdown-list" className={`w-full z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow h-32 overflow-auto`}>
                        <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton" >
                            {fonctionOptions.map(option => (
                                 <li
                                 key={option.id}
                                 onClick={() => {
                                    handleNewFonction(option.label)
                                    setToggleFonctions(!toggleFonctions)
                                }}
                                 className=" text-left block px-4 py-2 hover:bg-third">
                                    {option.label}
                                </li>
                            ))}
                        </ul>
                    </div>}
                    </div>
                    <div className="mb-5 w-4/12 relative">
                        <label
                            htmlFor="contractType"
                            className="mb-3 block text-base font-medium text-black"
                            >
                        Type de Contrat:
                        </label>
                        <button id="dropdownDefaultButton" onClick={()=>handleToggleContractType()}
                         data-dropdown-toggle="dropdown-list" className="w-full  text-white bg-fourth hover:bg-darkk font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center justify-between" type="button">
                            {newContractType}
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg>
                        </button>
                        { toggleContractType &&
                   
                        <div id="dropdown-list" className={`w-full z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow h-32 overflow-auto`}>
                                <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton" >
                                    {dropdownOptions.map(option => (
                                        <li
                                        key={option.id}
                                        onClick={() => {
                                            handleNewContractType(option.label)
                                            setToggleContractType(!toggleContractType)  
                                        }}
                                        className=" text-left block px-4 py-2 hover:bg-third">
                                            {option.label}
                                        </li>
                                    ))}
                                </ul>
                            </div>}
                    </div>
                    <div className="mb-5 w-4/12 relative">
                        <label
                            htmlFor="jobType"
                            className="mb-3 block text-base font-medium text-black"
                            >
                            Type de Travail:
                        </label>
                            <button id="dropdownDefaultButton" onClick={()=>handleToggleTypeTravail()}
                            data-dropdown-toggle="dropdown-list" className="w-full  text-white bg-fourth hover:bg-darkk font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center justify-between" type="button">
                                {newTypeTravail}
                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                            </svg>
                            </button>
                            { toggleTypeTravail &&
                    
                            <div id="dropdown-list" className={`w-full z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow h-32 overflow-auto`}>
                                    <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton" >
                                        {typeTravail.map(option => (
                                            <li
                                            key={option.id}
                                            onClick={() => {
                                                handleNewTypeTravail(option.label)
                                                setToggleTypeTravail(!toggleTypeTravail)  
                                            }}
                                            className=" text-left block px-4 py-2 hover:bg-third">
                                                {option.label}
                                            </li>
                                        ))}
                                    </ul>
                                </div>}
                    </div>    
                </div>

                {/* row 3 */}
                <div className="w-full flex flex-row-12 justify-around gap-8">
                    <div className="mb-5 w-4/12 relative">
                        <label
                            htmlFor="city"
                            className="mb-3 block text-base font-medium text-[black"
                            >
                            Ville:
                        </label>
                        <button id="dropdownDefaultButton" onClick={()=>handleToggleRegion()}
                            data-dropdown-toggle="dropdown-list" className="w-full  text-white bg-fourth hover:bg-darkk font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center justify-between" type="button">
                                {newRegion}
                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>
                        { toggleRegion &&
                    
                        <div id="dropdown-list" className={`w-full z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow h-32 overflow-auto`}>
                            <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton" >
                                {regionOptions.map(option => (
                                    <li
                                        key={option.id}
                                        onClick={() => {
                                            handleNewRegion(option.label)
                                            setToggleRegion(!toggleRegion)  
                                        }}
                                        className=" text-left block px-4 py-2 hover:bg-third">
                                            {option.label}
                                    </li>))}
                            </ul>
                        </div>}
                    </div>
                    <div className="mb-5 w-4/12 relative ">
                        <label
                            htmlFor="domaine"
                            className="mb-3 block text-base font-medium text-black"
                            >
                        Domaine dropdown:
                        </label>
                        <button id="dropdownDefaultButton" onClick={()=>handleToggleDomaine()}
                         data-dropdown-toggle="dropdown-list" className="w-full  text-white bg-fourth hover:bg-darkk font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center justify-between" type="button">
                            {newDomaine}
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>
                    { toggleDomaine &&
                   
                   <div id="dropdown-list" className={`w-full z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow h-32 overflow-auto`}>
                        <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton" >
                            {domaineOptions.map(option => (
                                 <li
                                 key={option.id}
                                 onClick={() => {
                                    handleNewDomaine(option.label)
                                    setToggleDomaine(!toggleDomaine)
                                }}
                                 className=" text-left block px-4 py-2 hover:bg-third">
                                    {option.label}
                                </li>
                            ))}
                        </ul>
                    </div>}
                    </div>
                    <div className="mb-5 w-4/12">
                        <label
                            htmlFor="deadline"
                            className="mb-3 block text-base font-medium text-black"
                            >
                            Deadline (Date):
                        </label>
                        <input
                            type="date"
                            defaultValue={field.deadline}
                            name="deadline"
                            id="deadline"
                            placeholder="Deadline"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>    
                </div>

                {/* row 4 */}
                <div className="w-full flex flex-row-12 justify-around gap-8">
                    <div className="mb-5 w-4/12">
                        <label
                            htmlFor="studiesRequirement"
                            className="mb-3 block text-base font-medium text-black"
                            >
                            Requirements Text Area:
                        </label>
                        <textarea
                        id="studiesRequirement"
                        defaultValue={field.studiesRequirement}
                        name="studiesRequirement"
                        className="block w-full rounded-md border-0 h-24 py-2 pl-3 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 "/>
                    
                    </div>
                    <div className="mb-5 w-4/12">
                        <label
                            htmlFor="profil"
                            className="mb-3 block text-base font-medium text-black"
                            >
                        Profil Text Area:
                        </label>
                        <textarea
                        id="profil"
                        defaultValue={field.profil}
                        name="profil"
                        className="block w-full rounded-md border-0 h-24 py-2 pl-3 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 "/>
                    
                    </div>
                    <div className="mb-5 w-4/12">
                        <label
                            htmlFor="missions"
                            className="mb-3 block text-base font-medium text-black"
                            >
                            Missions Text Area:
                        </label>
                        <textarea
                        id="missions"
                        defaultValue={field.missions}
                        name="missions"
                        className="block w-full rounded-md border-0 h-24 py-2 pl-3 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 "/>
                    
                    </div>    
                </div>
                
                {/* row 5 */}
                <div className="w-full flex flex-row-12 justify-around gap-8">
                    <div className="mb-5 w-4/12">
                        <label
                            htmlFor="description"
                            className="mb-3 block text-base font-medium text-black"
                            >
                           Description Text Area:
                        </label>
                        <textarea
                        id="description"
                        defaultValue={field.description}
                        name="description"
                        className="block w-full rounded-md border-0 h-24 py-2 pl-3 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 "/>
                   
                    </div>
                    <div className="mb-5 w-4/12">
                        <label
                            htmlFor="advantages"
                            className="mb-3 block text-base font-medium text-black"
                            >
                        Avantage (Tags):  
                        </label>
                        
                        <input
                    type="text"
                    id="avantages"
                   // value= {currentInput}
                    onChange={handleInputChange}
                    onKeyUp={(e)=> handleAddAvantage(e)}
                    {...({ value: currentInput } as { value: string })}
                    placeholder="Press enter to add tags"
                    className=" block w-full rounded-md border-0 py-2 pl-3 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 "/>

                    <ul>
                        {
                            avantage.length>0 &&
                            avantage.map((adv,index) => (
                                <li key={index} className="p-2"> 
                                    <div key={index} className="tag-item inline-flex items-start justify-start px-5 py-2 rounded-[32px] text-sm shadow-sm font-medium bg-secondary text-neutral-100 mr-2">
                                        <span className="text">{adv}</span>
                                        <span onClick={() => removeAvantage(index)} className="close cursor-pointer ml-2 hover:text-neutral-700">&times;</span>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>




                    </div>
                     
                </div>
                <div className="w-full flex justify-center ">
                <button type="submit" className="w-36 block bg-darkk rounded-md py-2.5 px-6 text-normal font-semibold text-white">Modifier</button>

                </div>

            </form>            
                
             </div>
             ))}
        </div>
    )
}