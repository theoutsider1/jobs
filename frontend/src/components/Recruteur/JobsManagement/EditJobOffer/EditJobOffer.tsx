import {  ChangeEvent,FormEvent,KeyboardEvent ,useEffect,useState } from "react";
import { EditedJob, fonctionOptions } from "../../../../Types/Globals";
import { dropdownOptions } from "../../../../Types/Globals";
import { typeTravail } from "../../../../Types/Globals";
import { regionOptions } from "../../../../Types/Globals";
import { domaineOptions } from "../../../../Types/Globals";
import axios from "axios";
import { PopupSuccess } from "./PopupSuccess";
import {  useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editJob } from "../../../store/features/editJobSlice";
import { Riple } from "react-loading-indicators";


export const EditJobOffer = () => {
    const dispatch = useDispatch()
    const {id} = useParams<Record<string, string | undefined>>();
    
    
     const [toEditJob, setToEditJob] = useState<EditedJob | undefined>(undefined)
    // To toggle between DropDowns 
    const [toggleFonctions, setToggleFonctions] = useState(false);
    const [toggleContractType, setToggleContractType] = useState(false);
    const [toggleTypeTravail, setToggleTypeTravail] = useState(false);
    const [toggleRegion, setToggleRegion] = useState(false);
    const [toggleDomaine, setToggleDomaine]= useState(false);


    // toggle FONCTION dropdown options
    const toggleFonctionOptions = () => {
        setToggleFonctions(!toggleFonctions);
        setToggleContractType(false);
        setToggleTypeTravail(false);
        setToggleRegion(false);
        setToggleDomaine(false);
    }

    // handle CONTRACT TYPE dropdown options
    const handleToggleContractType = () => {
        setToggleContractType(!toggleContractType);
        setToggleFonctions(false);
        setToggleTypeTravail(false);
        setToggleRegion(false);
        setToggleDomaine(false);
        
    }

    // handle CONTRACT TYPE dropdown options
    const handleToggleTypeTravail = () => {
        setToggleTypeTravail(!toggleTypeTravail);
        setToggleContractType(false);
        setToggleFonctions(false);
        setToggleRegion(false);
        setToggleDomaine(false);

    }

    // handle Region dropdown options
    const handleToggleRegion = () => {
        setToggleRegion(!toggleRegion);
        setToggleContractType(false);
        setToggleFonctions(false);
        setToggleTypeTravail(false);
        setToggleDomaine(false);
    }

    // Handle Domaine Dropdown options
    const handleToggleDomaine = ()=>{
        setToggleDomaine(!toggleDomaine);
        setToggleRegion(false);
        setToggleContractType(false);
        setToggleFonctions(false);
        setToggleTypeTravail(false);       
    }
    
    const jobB = toEditJob; 
  
    //To Show selected option (value)
    const [newFonction, setNewFonction] = useState(jobB?.fonction);
    const [newContractType, setNewContractType] =useState(jobB?.contractType)
    const [newTypeTravail, setNewTypeTravail] = useState(jobB?.jobType)
    const [newRegion, setNewRegion] = useState(jobB?.city)
    const [newDomaine, setNewDomaine]=useState(jobB?.domaine)

    // ------Advantages input---------------
   const [avantage, setAvantage] = useState<string[]>([]);
   const [currentInput, setCurrentInput] = useState<string>('');
  
   // --------Initial Data-------------
       
   const [initialFormData, setinitialFormData] = useState({
    id: jobB?.id , // Provide a default value if id is null or undefined
    createdAt: jobB?.createdAt ,
    updatedAt: jobB?.updatedAt ,
    title: jobB?.title ,
    companyName: jobB?.companyName,
    contractType: jobB?.contractType,
    city: jobB?.city ,
    domaine: jobB?.domaine,
    jobType: jobB?.jobType ,
    deadline: jobB?.deadline,
    fonction: jobB?.fonction , // Provide a default value if fonction is null or undefined
    studiesRequirement: jobB?.studiesRequirement,
    experience: jobB?.experience ,
    description: jobB?.description,
    missions: jobB?.missions, // Provide a default value if missions is null or undefined
    profil: jobB?.profil , // Provide a default value if profil is null or undefined
    advantages: jobB?.advantages,
});
   

// Update Changes in initialFormData 
   const handleChange = (
        event: 
            ChangeEvent<HTMLInputElement> | 
            { name: string; value: string | string[] } | 
            ChangeEvent<HTMLTextAreaElement>) => {

            if ('target' in event) {
                const { name, value } = event.target;
                setinitialFormData((prevData) => ({
                ...prevData,
                [name]: value,
                }));
            } else {
                const { name, value } = event;
                setinitialFormData((prevData) => ({
                ...prevData,
                [name]: value,
                }));
            }
         
};

const handleAddAvantage = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === ',' && !avantage.includes(currentInput.trim())) {
     const trimmedInput = currentInput.trim().replace(/,/g, ''); // Remove commas from input
         if (trimmedInput !== '' && trimmedInput !== ',' && !avantage.includes(trimmedInput)) {

            //Add Advantage in advantages Array 
             const newAvantages = [...avantage, trimmedInput];
             setAvantage(newAvantages);
             setCurrentInput('');
     
             // Update initialFormData with new advantages
             handleChange({ name: 'advantages', value: newAvantages });      
     }
}
};
// Remove Advantage from advantages Array 
const removeAvantage = (index:number) => {
    const newAvantages = avantage.filter(tag => avantage.indexOf(tag) !== index)
    setAvantage([...avantage.filter(tag => avantage.indexOf(tag) !== index)]);
    handleChange({name: "advantages", value : newAvantages})
};

// Update Job Offer  
  const handleSubmit = async (
        e: FormEvent<HTMLFormElement>)=> {

            e.preventDefault()
            const updatedJob : EditedJob = {
                ...initialFormData
            }

           await axios.patch(`http://localhost:3000/recruteurs/update/${id}`, updatedJob, {
                withCredentials : true,
            })
            .then(response => {
                if (response.statusText === 'OK'){
                    handleCloseSuccessPopup()
                }
               
            })
            .catch(error => {
                console.error('Error updating job:', error);
                throw error; // Rethrow error if you want to handle it further up the call stack
            });
    }

    // Show PopUp When the job has been Updated Successfully

    const [successPopup , setSuccessPopup] = useState(false);

    const handleCloseSuccessPopup = ()=> {
        setSuccessPopup(!successPopup)
    }
    const fetchDatat = ()=>{
        axios.get(`http://localhost:3000/recruteurs/offer/${id}`, 
        {withCredentials : true})
        .then(res => {
            const data : EditedJob  = res.data.job
            const newDate = data.deadline?.split('T')[0]
           
             // Dispatch action with correct payload
            dispatch(editJob({editJob: data } ));
            setToEditJob({...data , deadline : newDate})
            setNewFonction(data.fonction)
            setNewContractType(data.contractType)
            setNewTypeTravail(data.jobType)
            setNewRegion(data.city)
            setNewDomaine(data.city)
            setAvantage(data.advantages ?? []);
            console.log(data);
         
        }).catch(error => {
            console.log(error);
            
        });
    }
    useEffect(()=>{

        fetchDatat()
       
    },[id, dispatch])


    
    return (
        <div className="w-full">
            {toEditJob  ? (
 
            <div key={toEditJob.id} className="w-full flex-col jusify-between ">
               
                <h3 className="w-full p-10 bg-neutral-100  text-center text-5xl font-semibold ">
                     Modifier votre <span className="underline decoration-dashed decoration-darkk">offre d'emploi</span>
                </h3>
            <form 
            onSubmit={handleSubmit} 
            id="" className="w-full p-5 flex flex-col ">
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
                        defaultValue={toEditJob.title}
                        name="title"
                        id="title"
                        onChange={(e) => handleChange(e)}
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
                            defaultValue={toEditJob.companyName}
                            onChange={(e) => handleChange(e)}
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
                            defaultValue={toEditJob.experience}
                            onChange={(e) => handleChange(e)}
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
                                        handleChange({ name: 'fonction', value: option.label })   
                                        setNewFonction(option.label)                                   
                                        setToggleFonctions(!toggleFonctions)
                                    }}
                                    data-name= "fonction"
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
                                        data-name ="contractType"
                                        onClick={() => {
                                            handleChange({ name: 'contractType', value: option.label })
                                            setNewContractType(option.label)
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
                                                handleChange({ name: 'jobType', value: option.label })
                                                setNewTypeTravail(option.label)
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
                                            handleChange({ name: 'city', value: option.label })
                                            setNewRegion(option.label)
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
                        Domaine:
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
                                    handleChange({ name: 'domaine', value: option.label })
                                    setNewDomaine(option.label)
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
                            Deadline:
                        </label>
                        <input
                            type="date"
                            name= "deadline"
                           // defaultValue={formattedDate}
                           value={toEditJob.deadline}
                           
                            onChange={(e) =>{ 
                                console.log(e.target.value)
                                
                                handleChange(e)}} 
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
                        name="studiesRequirement"
                        defaultValue={jobB?.studiesRequirement}
                        onChange={(e) => handleChange(e)} 
                        className="block w-full rounded-md border-0 h-24 py-2 pl-3 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 "/>
                    
                    </div>
                    <div className="mb-5 w-4/12">
                        <label
                            htmlFor="profil"
                            className="mb-3 block text-base font-medium text-black"
                            >
                        Profil:
                        </label>
                        <textarea
                        id="profil"
                        name="profil"
                        defaultValue={jobB?.profil}
                        onChange={(e) => handleChange(e)} 
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
                        defaultValue={jobB?.missions}
                        name="missions"
                        onChange={(e) => handleChange(e)} 
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
                           Description:
                        </label>
                        <textarea
                        id="description"
                        defaultValue={jobB?.description}
                        name="description"
                        onChange={(e) => handleChange(e)} 
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
                            name= "advantages"
                            onChange={(e) => setCurrentInput(e.target.value)}
                            onKeyUp={(e)=> handleAddAvantage(e)}
                            {...({ value: currentInput } as { value: string })}
                            placeholder="Press enter to add tags"
                            className=" block w-full rounded-md border-0 py-2 pl-3 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 "/>

                        <ul>
                            {avantage &&
                                
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
                <button type="submit" className="w-36 block bg-darkk rounded-md py-2.5 px-6 text-normal font-semibold text-white" >Modifier</button>

                </div>

            </form>            
                
             </div>) : (
                <div className="w-full h-screen flex justify-center items-center">
                <Riple color="#4ADE80" size="medium" text="" textColor="" />
            </div>
            )
             }


             {
                successPopup && 
                <PopupSuccess  closeSuccessPopup = {handleCloseSuccessPopup}/>
             }
        </div>
    )
}