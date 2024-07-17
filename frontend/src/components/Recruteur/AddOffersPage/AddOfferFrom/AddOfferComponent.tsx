import React, { useState, useRef, useEffect, useCallback, RefObject } from 'react';
import { AddJob, dropdownOptions, regions, typeTravail } from "../../../../Types/Globals";
import { AddAdvantageComponent } from "./AddAdvantageComponent";
// import { HistoricalSideBarComponent } from "../Historic/HistoricalSection";

// city / domaine / deadline / studiesREquirements

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

    //Types de Contrat

    const [toggleTypeContract, setToggleTypeContract]=useState(false);
    const [selectedTypeTravail, setSelectedTypeTravail]= useState("Choisir le type de travail")

    const HandleToggleContactDropdown = () => {
        setContractDropdown(!contractDropdown)
        setToggleRegion(false);
        setToggleTypeContract(false);
    }
  
    const handleContractOptionClick = (label:string)=> {
        
        setSelectedContract(label)
        HandleToggleContactDropdown()
    }
    //Types de Contrat functions
    const handleTypeTravailToggle = ()=> {
        setToggleTypeContract(!toggleTypeContract);
        setContractDropdown(false);
        setToggleRegion(false);
    }
    const handleTypeTravailOptions = (label:string)=> {
       
        setSelectedTypeTravail(label)
        handleTypeTravailToggle()
    }

    // regions 
    const [toggleRegion, setToggleRegion]=useState(false);
    const [selectedRegion, setSelectedRegion]= useState("Choisir la region")
    const menuRef = useRef<HTMLDivElement>(null);

    const handleSubmit = (e: React.FormEvent)=>{
      e.preventDefault();
      console.log(newJob);
 
    }
    const handler = useCallback((e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setContractDropdown(false);
        setToggleTypeContract(false);
        setToggleRegion(false);
        console.log("Clicked outside menu", menuRef.current);
      } else {
        console.log("Clicked inside menu", menuRef.current);
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

                <li className="p-3">
                  <div className=" mx-14 flex flex-row-4 justify-center">
                    <div className="w-1/4 mx-14">
                      <label
                        htmlFor="mission"
                        className="w-full m-1 text-xl font-semibold">
                            Missions:
                      </label>
                    </div>
                    <div className="w-3/4">
                      <textarea
                          id="missionField"
                          name="mission"
                          className="block w-full rounded-md border-0 h-24 py-2 pl-3 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 "/>
                    </div>
                  </div>
                </li>
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
                        id="profilField"
                        name="profil"
                        className="block w-full rounded-md border-0 h-24 py-2 pl-3 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 "/>
                    </div>
                  </div>
                </li>
                <li className="p-3">
                  <div className=" mx-14 flex flex-row-4 justify-center">
                    <div className="w-1/4 mx-14">
                      <label
                        htmlFor="typesContract"
                        className="w-full m-1 text-xl font-semibold">
                            Type de Contract:
                      </label>
                    </div>
                    <div className="w-3/4 relative" ref={menuRef} >
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
                                    
                                    handleContractOptionClick( option.label)}}
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
                        htmlFor="typesContract"
                        className="w-full m-1 text-xl font-semibold">
                            Type de Travail:
                      </label>
                    </div>
                    <div className="w-3/4 relative " ref={menuRef} >
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
                                    handleTypeTravailOptions(opt.label)}}

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
                    <div className="w-3/4 relative" ref={menuRef} >
                    <button id="dropdownDefaultButton" onClick={()=> setToggleRegion(!toggleRegion)} data-dropdown-toggle="dropdown-list" className="w-full text-white bg-fourth hover:bg-darkk font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center justify-between" type="button">
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
                                    setToggleTypeContract(false);
                                    setContractDropdown(false);
                                    setSelectedRegion(opt);
                                    setToggleRegion(!toggleRegion)}}
                                 className="w-full text-left px-4 py-2 hover:bg-primary cursor-pointer">
                                    {opt}
                                </li>
                            ))}
                        </ul>
                    </div>}
                    </div>
                  </div>
                </li>
                <li className="p-3">
                  <AddAdvantageComponent/>
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
