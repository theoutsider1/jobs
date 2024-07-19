import React, { useState, useRef, useEffect, useCallback, RefObject } from 'react';
import { AddJob, domaineOptions, dropdownOptions, regions, typeTravail } from "../../../../Types/Globals";
import { AddAdvantageComponent } from "./AddAdvantageComponent";
import { axiosPrivate } from '../../../../api/axios';
// import { HistoricalSideBarComponent } from "../Historic/HistoricalSection";



export const AddOfferFormComponent = () => {
  const [newJob , setNewJob] = useState<AddJob>(
    { title: '',
      city: '',
      contractType: '',
      experience: '',
      domaine: '',
      companyName: '',
      description: '',
      jobType: '',
      missions: '',
      deadline: undefined, 
      fonction: '',
      studiesRequirement: '',
      profil: '',
      advantages: [],
    })

  const inputRef = useRef<HTMLInputElement>(null);
  const inputTextArea: RefObject<HTMLTextAreaElement> = useRef(null);
  const [contractDropdown, setContractDropdown] = useState(false);
  const [selectedContract, setSelectedContract] = useState("Choisir le type de contrat");

  // Domaines 
  const [domaine, setDomaine] = useState("Choisir le domaine");
  const [domainesDropdown, setDomainesDropdown] = useState(false);
  const toggleDomaine = ()=>{
    setContractDropdown(false);
    setToggleRegion(false);
    setToggleTypeContract(false);
    setDomainesDropdown(!domainesDropdown);
  }

    //Types de Contrat
  const [toggleTypeContract, setToggleTypeContract]=useState(false);
  const [selectedTypeTravail, setSelectedTypeTravail]= useState("Choisir le type de travail")

  const HandleToggleContactDropdown = () => {
        setContractDropdown(!contractDropdown)
        setToggleRegion(false);
        setToggleTypeContract(false);
        setDomainesDropdown(false)
    }
  
  const handleContractOption = (label:string , field: string)=> {
        
        setSelectedContract(label)
        setNewJob((prev)=>({
          ...prev,
          [field] : label
        }))
        HandleToggleContactDropdown()
    }
    //Types de Contrat functions
    const handleTypeTravailToggle = ()=> {
        setToggleTypeContract(!toggleTypeContract);
        setContractDropdown(false);
        setToggleRegion(false);
        setDomainesDropdown(false)
    }
    const handleTypeTravailOptions = (option : string, field: string) => {
      setSelectedTypeTravail(option);
      setNewJob((prev)=>({
        ...prev,
        [field] : option
      }))
      handleTypeTravailToggle();
    }

    // regions 
    const [toggleRegion, setToggleRegion]=useState(false);
    const [selectedRegion, setSelectedRegion]= useState("Choisir la region")
    const handleToggleRegion = ()=>{
      setToggleTypeContract(false);
      setContractDropdown(false);
      setDomainesDropdown(false);
      setToggleRegion(!toggleRegion);
    }
    const contractMenuRef = useRef<HTMLDivElement>(null);
    const typeTravailMenuRef = useRef<HTMLDivElement>(null);
    const regionMenuRef = useRef<HTMLDivElement>(null);
    const domaineMenuRef = useRef<HTMLDivElement>(null);
    
    const handleSubmit = (e: React.FormEvent)=>{
      e.preventDefault();
      console.log(newJob);
      
 
    }
    const handler = useCallback((e: MouseEvent) => {
      if (contractMenuRef.current && !contractMenuRef.current.contains(e.target as Node)) {
        setContractDropdown(false);
      }
      if (typeTravailMenuRef.current && !typeTravailMenuRef.current.contains(e.target as Node)) {
        setToggleTypeContract(false);
      }
      if (regionMenuRef.current && !regionMenuRef.current.contains(e.target as Node)) {
        setToggleRegion(false);
      }
      if (domaineMenuRef.current && !domaineMenuRef.current.contains(e.target as Node)) {
        setDomainesDropdown(false);
      }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setNewJob((prevVal) => ({
        ...prevVal,
        [name]: value,
      }));
      console.log(newJob);
      
    };
    // Handle avantages changes in newJob     
    const handleAdvantagesChange = (newAdvantages: string[]) => {
      setNewJob((prevJob) => ({
        ...prevJob,
        advantages: newAdvantages,
      }));
    };

  
    
    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.focus();
        console.log('Input focused:', inputRef.current.value)
      } else if (inputTextArea.current) {
        inputTextArea.current?.focus()
        console.log('Input focused:', inputTextArea.current?.value);
      }
    
      document.addEventListener('mousedown', handler);
    
      return () => {
        document.removeEventListener('mousedown', handler);
      };
    }, [inputRef, handler]);

  // useEffect(() => {
  //   console.log(newJob);
  // }, [newJob]);

    return (
    <div className="w-full h-screen flex flex-col ">
     
      <div className="w-full overflow-scroll pb-12 ">
      <div className="w-full flex justify-center items-center p-10 bg-neutral-100">
          <h3 className="text-5xl font-semibold ">
            Lancer votre <span className="underline decoration-dashed decoration-darkk">offre d'emploi</span>
          </h3>
        </div>
        <div className="px-24 flex flex-col justify-center items-center">
          <form onSubmit={handleSubmit} id="contactForm" className="w-full">
            <div className="w-full">
              <ul>
                <li className="p-3">
                  <div className=" mx-14 flex justify-center items-center">
                    <div className="w-1/4 mx-14">
                      <label
                        htmlFor="title"
                        className="w-full m-1 text-xl font-semibold">
                        Titre De Poste:
                      </label>
                    </div>
                    <div className="w-3/4">
                      <input
                      // ref={inputRef}
                      onChange={handleChange}
                      
                      ref={inputRef}
                        type="text"
                        name ='title'
                        id="title"
                        className=" block w-full rounded-md border-0 py-2 pl-3 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 "/>
                    </div>
                  </div>
                </li>

                <li className="p-3">
                  <div className=" mx-14 flex justify-center items-center">
                    <div className="w-1/4 mx-14">
                      <label
                        htmlFor="entreprise"
                        className="w-full m-1 text-xl font-semibold">
                        Entreprise:
                      </label>
                    </div>
                    <div className="w-3/4">
                      <input
                       onChange={handleChange}
                       ref={inputRef}
                       name='companyName'
                        type="text"
                        id="entreprise"
                        className=" block w-full rounded-md border-0 py-2 pl-3 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 "/>
                    </div>
                  </div>
                </li>

                <li className="p-3">
                  <div className=" mx-14 flex justify-center items-center">
                    <div className="w-1/4 mx-14">
                      <label
                        htmlFor="experience"
                        className="w-full m-1 text-xl font-semibold">
                        Experience:
                      </label>
                    </div>
                    <div className="w-3/4">
                      <input
                        onChange={handleChange}
                        ref={inputRef}
                        type="text"
                        name='experience'
                        id="experience"
                        className=" block w-full rounded-md border-0 py-2 pl-3 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 "/>
                    </div>
                  </div>
                </li>

                <li className="p-3">
                  <div className=" mx-14 flex justify-center items-center">
                    <div className="w-1/4 mx-14">
                      <label
                        htmlFor="fonction"
                        className="w-full m-1 text-xl font-semibold">
                        Fonction:
                      </label>
                    </div>
                    <div className="w-3/4">
                      <input
                        onChange={handleChange}
                        ref={inputRef}
                        type="text"
                        name='fonction'
                        id="fonction"
                        className=" block w-full rounded-md border-0 py-2 pl-3 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 "/>
                    </div>
                  </div>
                </li>

                <li className="p-3">
                  <div className=" mx-14 flex flex-row-4 justify-center">
                    <div className="w-1/4 mx-14">
                      <label
                        htmlFor="description"
                        className="w-full m-1 text-xl font-semibold">
                            Description:
                      </label>
                    </div>
                    <div className="w-3/4">
                      <textarea
                          onChange={handleChange}
                          ref={inputTextArea}
                          id="descriptionField"
                          name="description"
                          className="block w-full rounded-md border-0 h-24 py-2 pl-3 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 "/>
                    </div>
                  </div>
                </li>
                {/* Missions */}
                <li className="p-3">
                  <div className=" mx-14 flex flex-row-4 justify-center">
                    <div className="w-1/4 mx-14">
                      <label
                        htmlFor="missions"
                        className="w-full m-1 text-xl font-semibold">
                            Missions:
                      </label>
                    </div>
                    <div className="w-3/4">
                      <textarea
                          onChange={handleChange}
                          ref={inputTextArea}
                          id="missionField"
                          name="missions"
                          className="block w-full rounded-md border-0 h-24 py-2 pl-3 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 "/>
                    </div>
                  </div>
                </li>
                {/* studiesRequirement */}
                <li className="p-3">
                  <div className=" mx-14 flex flex-row-4 justify-center">
                    <div className="w-1/4 mx-14">
                      <label
                        htmlFor="studiesRequirement"
                        className="w-full m-1 text-xl font-semibold">
                            Studies requirement:
                      </label>
                    </div>
                    <div className="w-3/4">
                      <textarea
                          onChange={handleChange}
                          ref={inputTextArea}
                          id="studiesRequirement"
                          name="studiesRequirement"
                          className="block w-full rounded-md border-0 h-24 py-2 pl-3 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 "/>
                    </div>
                  </div>
                </li>
                {/* Profil input */}
                <li className="p-3">
                  <div className=" mx-14 flex flex-row-4 justify-center">
                    <div className="w-1/4 mx-14">
                      <label
                        htmlFor="profil"
                        className="w-full m-1 text-xl font-semibold">
                            Profil:
                      </label>
                    </div>
                    <div className="w-3/4">
                      <textarea
                        onChange={handleChange}
                        ref={inputTextArea}
                        id="profilField"
                        name="profil"
                        className="block w-full rounded-md border-0 h-24 py-2 pl-3 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 "/>
                    </div>
                  </div>
                </li>
                {/* DeadLine Date */}
                <li className="p-3">
                  <div className=" mx-14 flex justify-center items-center">
                    <div className="w-1/4 mx-14">
                      <label
                        htmlFor="deadline"
                        className="w-full m-1 text-xl font-semibold">
                        Deadline:
                      </label>
                    </div>
                    <div className="w-3/4">
                      <input
                        onChange={handleChange}
                        
                        type="date"
                        name='deadline'
                        id="deadline"
                        className="block w-full rounded-md border-0 py-2 pl-3 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                  </div>
                </li>
                {/* Contract Types */}
                <li className="p-3">
                  <div className=" mx-14 flex flex-row-4 justify-center">
                    <div className="w-1/4 mx-14">
                      <label
                        htmlFor="contractType"
                        className="w-full m-1 text-xl font-semibold">
                            Type de Contract:
                      </label>
                    </div>
                    <div className="w-3/4 relative" ref={contractMenuRef} >
                    <button id="dropdownDefaultButton" onClick={HandleToggleContactDropdown} data-dropdown-toggle="dropdown-list" className="w-full text-white bg-fourth hover:bg-darkk font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center justify-between" type="button">
                            {selectedContract}
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>
                  { contractDropdown &&
                   
                   <div  id="dropdown-list" className={`absolute z-10 h-36 overflow-scroll bg-third divide-y divide-gray-100 rounded-lg shadow w-full`}>
                        <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                            {dropdownOptions.map(option => (
                                 <li
                                 key={option.id}
                                 onClick={() => { 
                                    handleContractOption( option.label, 'contractType')
                                  }}
                                    
                                 className="w-full text-left block px-4 py-2 hover:bg-primary cursor-pointer">
                                    {option.label}
                                </li>
                            ))}
                        </ul>
                    </div>}
                    </div>
                  </div>
                </li>
                <li className="p-3">
                  <div className=" mx-14 flex flex-row-4 justify-center">
                    <div className="w-1/4 mx-14">
                      <label
                        htmlFor="jobType"
                        className="w-full m-1 text-xl font-semibold">
                            Type de Travail:
                      </label>
                    </div>
                    <div className="w-3/4 relative " ref={typeTravailMenuRef} >
                    <button id="dropdownDefaultButton" onClick={handleTypeTravailToggle} data-dropdown-toggle="dropdown-list" className="w-full text-white bg-fourth hover:bg-darkk font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center justify-between" type="button">
                            {selectedTypeTravail}
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>
                   { toggleTypeContract &&
                   
                   <div id="dropdown-list" className={`absolute z-10 h-36 overflow-scroll bg-third divide-y divide-gray-100 rounded-lg shadow w-full`}>
                        <ul className="w-full py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                            {typeTravail.map(opt => (
                                 <li
                                key={opt.id}
                                onClick={() => {
                                  handleTypeTravailOptions(opt.label, 'jobType');
                                }}
                                className="w-full text-left block px-4 py-2 hover:bg-primary cursor-pointer">
                                  {opt.label}
                                </li>
                            ))}
                        </ul>
                    </div>}
                    </div>
                  </div>
                </li>
                {/* Regions */}
                <li className="p-3">
                  <div className=" mx-14 flex flex-row-4 justify-center">
                    <div className="w-1/4 mx-14">
                      <label
                        htmlFor="typesContract"
                        className="w-full m-1 text-xl font-semibold">
                            Région:
                      </label>
                    </div>
                    <div className="w-3/4 relative" ref={regionMenuRef} >
                    <button id="dropdownDefaultButton" onClick={handleToggleRegion} data-dropdown-toggle="dropdown-list" className="w-full text-white bg-fourth hover:bg-darkk font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center justify-between" type="button">
                            {selectedRegion}
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>
                   { toggleRegion &&
                   
                   <div id="dropdown-list" className={`absolute z-10 h-36 overflow-scroll bg-third divide-y divide-gray-100 rounded-lg shadow w-full`}>
                        <ul className="w-full py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                            {regions.map((opt, index) => (
                                 <li
                                 key={index}
                                 onClick={() => {
                                  handleToggleRegion()
                                  setSelectedRegion(opt);
                                  
                                  setNewJob((prev) => ({
                                    ...prev,
                                    city: opt
                                  }));
                                }}
                                 className="w-full text-left px-4 py-2 hover:bg-primary cursor-pointer">
                                    {opt}
                                </li>
                            ))}
                        </ul>
                    </div>}
                    </div>
                  </div>
                </li>

                {/* Domaines */}
                <li className="p-3">
                  <div className=" mx-14 flex flex-row-4 justify-center">
                    <div className="w-1/4 mx-14">
                      <label
                        htmlFor="domaine"
                        className="w-full m-1 text-xl font-semibold">
                            Domaines:
                      </label>
                    </div>
                    <div className="w-3/4 relative" ref={domaineMenuRef} >
                    <button id="dropdownDefaultButton" onClick={()=> toggleDomaine()} data-dropdown-toggle="dropdown-list" className="w-full text-white bg-fourth hover:bg-darkk font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center justify-between" type="button">
                            {domaine}
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>
                   { domainesDropdown &&
                   
                   <div id="dropdown-list" className={`absolute z-10 h-36 overflow-scroll bg-third divide-y divide-gray-100 rounded-lg shadow w-full`}>
                        <ul className="w-full py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                            {domaineOptions.map((opt, index) => (
                                 <li
                                 key={index}
                                 onClick={() => {
                                  setDomaine(opt.label)
                                  toggleDomaine()
                                  setNewJob((prev) => ({
                                    ...prev,
                                    domaine: opt.label
                                  }));
                                }}
                                 className="w-full text-left px-4 py-2 hover:bg-primary cursor-pointer">
                                    {opt.label}
                                </li>
                            ))}
                        </ul>
                    </div>}
                    </div>
                  </div>
                </li>
                <li className="p-3">
                  <AddAdvantageComponent avantageList={newJob.advantages} onAdvantagesChange={handleAdvantagesChange} />
                </li>
              </ul>
            </div>
            <div className="w-full pt-12 flex justify-center items-center">
              <button type="submit" className="block bg-darkk rounded-md py-2.5 px-6 text-normal font-semibold text-white">Publier l'offre</button>
            </div>
          </form>
           
        </div>
            
      </div>
      {/* <div className="w-1/4 bg-bright">
        <HistoricalSideBarComponent/>
      </div> */}
      
    </div>
  );
};
