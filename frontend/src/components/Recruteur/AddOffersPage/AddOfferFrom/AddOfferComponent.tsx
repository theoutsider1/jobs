import { useState } from "react";
import { dropdownOptions, typeTravail } from "../../../../Types/Globals";
import { AddAdvantageComponent } from "./AddAdvantageComponent";
import { HistoricalSideBarComponent } from "../Historic/HistoricalSection";








export const AddOfferFormComponent = () => {
    const [contractDropdown, setContractDropdown] = useState(false);
    const [selectedContract, setSelectedContract] = useState("Choisir le type de contrat");

    //Types de Contrat

    const [toggleTypeContract, setToggleTypeContract]=useState(false);
    const [selectedTypeTravail, setSelectedTypeTravail]= useState("Choisir le type de travail")

    const HandleToggleContactDropdown = () => {
        setContractDropdown(!contractDropdown)
    }
  
    const handleContractOptionClick = (e:React.MouseEvent<HTMLButtonElement>,label:string)=> {
        e.preventDefault;
        setSelectedContract(label)
        HandleToggleContactDropdown()
    }
    //Types de Contrat functions
    const handleTypeTravailToggle = ()=> {
        setToggleTypeContract(!toggleTypeContract);
    }
    const handleTypeTravailOptions = (e: React.MouseEvent<HTMLButtonElement>, label:string)=> {
        e.preventDefault;
        setSelectedTypeTravail(label)
        handleTypeTravailToggle()
    }
  
    return (
    <div className="w-full flex flex-row-4 ">
      <div className="w-3/4 bg-third ">
        <div className="w-full flex justify-center items-center p-10 ">
          <h3 className="text-5xl font-semibold ">
            Lancer votre <span className="underline decoration-dashed decoration-darkk">offre d'emploi</span>
          </h3>
        </div>
        <div className="w-full p-6 flex flex-col justify-start items-start">
          <form id="contactForm" className="w-full">
            <div className="w-full">
              <ul>
                <li className="p-3">
                  <div className=" mx-14 flex justify-center items-center">
                    <div className="w-1/4 mx-14">
                      <label
                        htmlFor="nomComplet"
                        className="w-full m-1 text-xl font-semibold">
                        Nom Du Poste:
                      </label>
                    </div>
                    <div className="w-3/4">
                      <input
                        type="text"
                        id="nomComplet"
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
                        type="text"
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
                        type="text"
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
                            Mission:
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
                            Types de Contract:
                      </label>
                    </div>
                    <div className="w-3/4">
                    <button id="dropdownDefaultButton" onClick={HandleToggleContactDropdown} data-dropdown-toggle="dropdown-list" className="w-full text-white bg-fourth hover:bg-darkk font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center justify-between" type="button">
                            {selectedContract}
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>
                   { contractDropdown &&
                   
                   <div id="dropdown-list" className={`z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-auto`}>
                        <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                            {dropdownOptions.map(option => (
                                 <button
                                 key={option.id}
                                 onClick={(e) => {
                                    
                                    handleContractOptionClick(e, option.label)}}
                                 className="w-full text-left block px-4 py-2 hover:bg-gray-100">
                                    {option.label}
                                </button>
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
                            Types de Travail:
                      </label>
                    </div>
                    <div className="w-3/4">
                    <button id="dropdownDefaultButton" onClick={handleTypeTravailToggle} data-dropdown-toggle="dropdown-list" className="w-full text-white bg-fourth hover:bg-darkk font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center justify-between" type="button">
                            {selectedTypeTravail}
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </button>
                   { toggleTypeContract &&
                   
                   <div id="dropdown-list" className={`z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-auto`}>
                        <ul className="w-full py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                            {typeTravail.map(opt => (
                                 <button
                                 key={opt.id}
                                 onClick={(e) => {
                                    
                                    handleTypeTravailOptions(e, opt.label)}}
                                 className="w-full text-left block px-4 py-2 hover:bg-gray-100">
                                    {opt.label}
                                </button>
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
            
          </form>
          <div className="w-full pt-12 flex justify-center items-center">
              <button type="submit" className="block bg-darkk rounded-md py-2.5 px-6 text-normal font-semibold text-white">Postuler</button>
            </div>
        </div>
            
      </div>
      <div className="w-1/4 bg-bright">
        <HistoricalSideBarComponent/>
      </div>
      
    </div>
  );
};
