import { useAppSelector } from "../../../store/store"
import {  useState } from "react";
import { fonctionOptions } from "../../../../Types/Globals";
import { dropdownOptions } from "../../../../Types/Globals";


export const EditJobOffer = () => {

    const [toggleFonctions, setToggleFonctions] = useState(false);
    const [toggleContractType, setToggleContractType] = useState(false);
    
    
    // get all job details from redux store
    const toEditJob  = useAppSelector(state => {
        
        return state.recruiterOffersList.recruiterOffer
    })
    const jobB = toEditJob[0]
    const [newFonction, setNewFonction] = useState(jobB.fonction)
    const [newContractType, setNewContractType] = useState(jobB.contractType)

    // toggle FONCTION dropdown options
    const toggleFonctionOptions = () => {
        setToggleFonctions(!toggleFonctions)  
    }
    const handleNewFonction = (label : string)=>{
        setNewFonction(label)
    }

    // handle CONTRACT TYPE dropdown options
    const handleToggleContractType = () => {
        setToggleContractType(!toggleContractType)  
    }
    const handleNewContractType = (label :string) => {
        setNewContractType(label)
       
    }

    
   
    return (
        <div className="w-full">
            {toEditJob && toEditJob.map(field => (
                
           
            
            <div key={field.id} className="w-full flex-col jusify-between ">
               
                <h3 className="w-full p-10 bg-fifth  text-center text-5xl font-semibold ">
                     Modifier votre <span className="underline decoration-dashed decoration-darkk">offre d'emploi</span>
                </h3>
            <form id="" className="w-full bg-third p-5 flex flex-col ">
                {/* row 1 */}
                <div className="w-full flex flex-row-12 justify-around gap-8">
                <div className="mb-5 w-4/12">
                    <label
                        htmlFor="title"
                        className="mb-3 block text-base font-medium text-[#07074D]"
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
                            htmlFor="entreprise"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                        Entreprise:
                        </label>
                        <input
                            type="text"
                            defaultValue={field.companyName}
                            name="entreprise"
                            id="entreprise"
                            placeholder="Full Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5 w-4/12">
                        <label
                            htmlFor="experience"
                            className="mb-3 block text-base font-medium text-[#07074D]"
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
                            className="mb-3 block text-base font-medium text-[#07074D]"
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
                            className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                        Type de Contrat dropdown:
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
                    <div className="mb-5 w-4/12">
                        <label
                            htmlFor="jobType"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                            Type de Travail dropdown:
                        </label>
                        <input
                            type="text"
                            defaultValue={field.jobType}
                            name="jobType"
                            id="jobType"
                            placeholder="Type de Travail"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>    
                </div>

                {/* row 3 */}
                <div className="w-full flex flex-row-12 justify-around gap-8">
                    <div className="mb-5 w-4/12">
                        <label
                            htmlFor="city"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                            Ville dropdown:
                        </label>
                        <input
                            type="text"
                            defaultValue={field.city}
                            name="city"
                            id="city"
                            placeholder="Ville"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5 w-4/12">
                        <label
                            htmlFor="domaine"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                        Domaine dropdown:
                        </label>
                        <input
                            type="text"
                            defaultValue={field.domaine}
                            name="domaine"
                            id="domaine"
                            placeholder="Domaine"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5 w-4/12">
                        <label
                            htmlFor="deadline"
                            className="mb-3 block text-base font-medium text-[#07074D]"
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
                            htmlFor="studiesRequirements"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                            Requirements Text Area:
                        </label>
                        <textarea
                        id="studiesRequirements"
                        defaultValue={field.studiesRequirement}
                        name="studiesRequirements"
                        className="block w-full rounded-md border-0 h-24 py-2 pl-3 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 "/>
                    
                    </div>
                    <div className="mb-5 w-4/12">
                        <label
                            htmlFor="profile"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                        Profil Text Area:
                        </label>
                        <textarea
                        id="profile"
                        defaultValue={field.profil}
                        name="profile"
                        className="block w-full rounded-md border-0 h-24 py-2 pl-3 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 "/>
                    
                    </div>
                    <div className="mb-5 w-4/12">
                        <label
                            htmlFor="mission"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                            Missions Text Area:
                        </label>
                        <textarea
                        id="mission"
                        defaultValue={field.missions}
                        name="mission"
                        className="block w-full rounded-md border-0 h-24 py-2 pl-3 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 "/>
                    
                    </div>    
                </div>
                
                {/* row 5 */}
                <div className="w-full flex flex-row-12 justify-around gap-8">
                    <div className="mb-5 w-4/12">
                        <label
                            htmlFor="description"
                            className="mb-3 block text-base font-medium text-[#07074D]"
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
                            className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                        Avantage (Tags):  
                        </label>
                        <input
                            type="text"
                            name="advantages"
                            id="advantages"
                            placeholder="Full Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
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