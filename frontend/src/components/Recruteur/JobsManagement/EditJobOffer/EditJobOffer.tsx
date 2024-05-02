

import { useState } from "react"
import { useAppSelector } from "../../../store/store"
import { AddAdvantageComponent } from "../../AddOffersPage/AddOfferFrom/AddAdvantageComponent"
import { AddOfferFormComponent } from "../../AddOffersPage/AddOfferFrom/AddOfferComponent"

export const EditJobOffer = () => {

   
    const toEditJob  = useAppSelector(state => {
    
        return state.recruiterOffersList.recruiterOffer
    })

    //  test const [contractDropdown, setContractDropdown] = useState(false);
    const [selectedContract, setSelectedContract] = useState("Choisir le type de contrat");
    const [contractDropdown, setContractDropdown] = useState(false);

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
        <div className="w-full">
            {toEditJob && toEditJob.map(field => (
                
           
            
            <div className="w-full flex-col jusify-between ">
               
                <h3 className="w-full p-10 bg-fifth  text-center text-5xl font-semibold ">
                     Modifier votre <span className="underline decoration-dashed decoration-darkk">offre d'emploi</span>
                </h3>
            <form id="" className="w-full bg-third p-5 flex flex-col ">
                {/* row 1 */}
                <div className="w-full flex flex-row-12 justify-around gap-8">
               {/* row 1 */}
                <div className="mb-5 w-4/12">
                    <label
                        htmlFor="name"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Nom Du Poste:
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Full Name"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                    </div>
                    <div className="mb-5 w-4/12">
                        <label
                            htmlFor="name"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                        Entreprise:
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5 w-4/12">
                        <label
                            htmlFor="name"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                            Experience:
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>    
                </div>

                {/* row 2 */}
                <div className="w-full flex flex-row-12 justify-around gap-8">
                    <div className="mb-5 w-4/12">
                        <label
                            htmlFor="name"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                            Fonction dropdown:
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5 w-4/12">
                        <label
                            htmlFor="name"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                        Type de Contrat dropdown:
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5 w-4/12">
                        <label
                            htmlFor="name"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                            Type de Travail dropdown:
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>    
                </div>

                {/* row 3 */}
                <div className="w-full flex flex-row-12 justify-around gap-8">
                    <div className="mb-5 w-4/12">
                        <label
                            htmlFor="name"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                            Ville dropdown:
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5 w-4/12">
                        <label
                            htmlFor="name"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                        Domaine dropdown:
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5 w-4/12">
                        <label
                            htmlFor="name"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                            Deadline (Date):
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>    
                </div>

                {/* row 4 */}
                <div className="w-full flex flex-row-12 justify-around gap-8">
                    <div className="mb-5 w-4/12">
                        <label
                            htmlFor="name"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                            Requirements Text Area:
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5 w-4/12">
                        <label
                            htmlFor="name"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                        Profil Text Area:
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5 w-4/12">
                        <label
                            htmlFor="name"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                            Avantage (Tags):
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>    
                </div>
                
                {/* row 5 */}
                <div className="w-full flex flex-row-12 justify-around gap-8">
                    <div className="mb-5 w-4/12">
                        <label
                            htmlFor="name"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                            Missions Text Area:
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div className="mb-5 w-4/12">
                        <label
                            htmlFor="name"
                            className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                        Description Text Area:
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
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