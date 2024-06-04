 import axios from "axios";
import { 
    // ChangeEvent, useRef, 
useState, useEffect} from "react"
import { OffData } from "../../../Types/Globals";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getRecruiterOffersList, } from "../../store/features/recruiterOffersSlice";
import {  IonIcon } from "@ionic/react";
import {pencilOutline} from 'ionicons/icons';
import {trash} from 'ionicons/icons';
import { DeletePopup } from "./DeletePopup";
import { Riple } from "react-loading-indicators";


export const OffersManagement = () =>{
    const navigate = useNavigate()
    const dispatch = useDispatch();
    // const ref: React.MutableRefObject<HTMLInputElement | null>  = useRef(null);
    // const [value , setValue] = useState('');
    const [allOffers, setAllOffers] = useState(true);
    const [inprogressOffers, setInprogressOffers] = useState(false);
    const [closedOffers , setClosedOffers] = useState(false);
    const [allData , setAllData ] = useState<OffData []>([]);
    

    const [allOffersLength ,setAllOffersLength] = useState<number>(0);

    // IMPORTANT : WILL be calculated later once the schema has been modified
    
    const [inprogressOffersLength ,setInprogressOffersLength] = useState<number>(0);
    const [closedOffersLength ,setClosedOffersLength] = useState<number>(0);

    
    //Store Click job offer in redux store & navigate to # to edit it
    const handleEditJobOffer = (data : OffData , jobId : number)=> {
        
        dispatch(getRecruiterOffersList({recruiterOffer : [data]}))
        navigate(`/suivezlesoffres/modifieroffre/${jobId}`)
        window.scrollTo({
            top: 0,
            // behavior: 'smooth' // Optional: Smooth scrolling animation
          });
    }

    //Delete job confirmation
    const [deleteConfirmation , setDeleteConfirmation] = useState(false);

    const handleDeleteConfirmation = () => {
        setDeleteConfirmation(true);
    };

    const handleCancelConfirmation = () => {
        setDeleteConfirmation(false);
    };

    // toggle between h4 tags 
    const toggleBetweenOffers = (selectedOffer : string) => {
        switch(selectedOffer) {
            case 'all':
                setAllOffers(true);
                setInprogressOffers(false);
                setClosedOffers(false);
                break;
            case 'inprogress':
                setAllOffers(false);
                setInprogressOffers(true);
                setClosedOffers(false);
                break;
            case 'closed':
                setAllOffers(false);
                setInprogressOffers(false);
                setClosedOffers(true);
                break;
            default:
                setAllOffers(true);
                setInprogressOffers(false);
                setClosedOffers(false);
                break;
        }
    }
    const fetchAllData = async () => {
        try {
           
            // const token : string | null = localStorage.getItem('token');// Change 'jwtToken' to your token key
            
            // // const headers = { 'Authorization': 'Bearer access_token' };
            // // Make sure token is available
            // if (!token) {
            // throw new Error('JWT token not found');
            // }

            await axios.get("http://localhost:3000/recruteurs/myjoboffers",  
            {
                withCredentials: true,
            }
            )
            .then (response => {
                const allOffersData : OffData[] = response.data
                
                setAllData(allOffersData)
                // allOffers number
                response.data.length ? setAllOffersLength(response.data.length) : setAllOffersLength(0);
                
  
            }) 
            
        } catch (error) {
            console.log(error);
            
        }    
    }
   
      
      // 
     
    useEffect ( () => {
       fetchAllData() 

    },[])

    return (
        <div className="w-full flex flex-col">
            <div className="w-full flex justify-center items-center p-10 ">
                <h3 className="text-5xl font-semibold ">
                    Suivez vos <span className="underline decoration-dashed decoration-darkk">offre d'emploi</span>
                </h3>
            </div>

            <div className="px-28">
                <div className=" flex gap-12 justify-start border-b-2 py-0.5">

                    {/* underline titles */}
                    {/*  Tous les offres de travail */}
                    <div className="px-3">
                        <h4 onClick={() => toggleBetweenOffers('all')} 
                            className={` cursor-pointer inline ${allOffers ? 'underline underline-offset-8 decoration-darkk' : '' } `} >
                            Tous les offres de travail
                        </h4>
                        <span className="px-1 m-1 text-md rounded-lg bg-primary decoration-none">{allOffersLength}</span>

                    </div>

                    {/* Offres de travail en cours  */}
                    <div className="px-3">
                        <h4 onClick={() =>  toggleBetweenOffers('inprogress')}
                            className={`inline px-3 cursor-pointer ${inprogressOffers ? 'underline underline-offset-8 decoration-darkk' : ''} `}>
                            Offres de travail en cours 
                        </h4>
                        <span className="px-1 m-1 text-md rounded-lg bg-primary decoration-none">{inprogressOffersLength}</span>

                    </div>

                    {/* Offres de travail clôturées */}
                    <div className="px-3">
                        <h4 onClick={() => toggleBetweenOffers('closed')} 
                            className={`inline px-3 cursor-pointer ${closedOffers  ? 'underline underline-offset-8 decoration-darkk' : ''}`}>
                            Offres de travail clôturées
                        </h4>
                        <span className="px-1 m-1 text-md rounded-lg bg-primary decoration-none">
                            {closedOffersLength}
                        </span>
                    </div>                   
                </div>
                {/* Seach Form (Input)*/}
                <div className="w-full flex justify-end m-2">
                {/* <input type="text" ref={ref} value={value} className="px-14" /> */}
                {/* <input
                        type="text"
                        id="searchJob"
                        className="  w-1/2 rounded-md border-0 py-2 m-2 text-gray-900 ring-1 ring-inset ring-gray-300 "/>
                     */}
                     <div className="w-1/3">
                        <form className="py-4">   
                            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div> 
                                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-third focus:border-third" placeholder="Recherche" required />
                                <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-secondary  hover:bg-primary focus:ring-4 focus:ring-third focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 ">Search</button>
                            </div>
                        </form>
                    </div>
                    
                </div>
                
                {/* Data table */}
               
                <div className=" w-full overflow-hidden rounded-md m-2">
                
                    {allData && allData.length > 0 ? (
                        <table className="table-fixed w-full">
                            <thead className="bg-primary">
                                <tr>
                                    <th className="p-3">Publication</th>
                                    <th>Date de publication</th>
                                    <th>Date de clôture</th>
                                    <th>Nombre de vues</th>
                                    <th>Nombre de CVs</th>
                                    <th>Modifier</th>
                                    
                                </tr>
                            </thead>
                            <tbody className="bg-fifth">
                                {allData.map(data => (
                                    <tr key={data.id} className="text-center">
                                        <td className="p-3">{data.title}</td>
                                        <td>{data.createdAt}</td>
                                        <td>{data.updatedAt}</td>
                                        <td>0</td>
                                        <td>0</td>
                                        <td className="flex justify-center gap-4 items-center p-3">
                                            <button onClick={() => handleEditJobOffer(data, data.id)} className="px-5 rounded-lg bg-third cursor-pointer hover:bg-secondary focus:underline">
                                                edit
                                                <IonIcon icon={pencilOutline}></IonIcon>
                                            </button>
                                            <IonIcon icon={trash} onClick={handleDeleteConfirmation} className="cursor-pointer px-2.5"></IonIcon>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="w-full flex justify-center ">
                            <div className="flex flex-col m-36 gap-8 justify-center">
                                <Riple color="#4ADE80" size="medium" text="" textColor="" />
                                {/* <button className="mx-24 p-1.5 bg-secondary text-white">Ajouter</button> */}
                            </div>
                            
                        </div>
                        
                    )}
                </div>
                               
            </div>

            {deleteConfirmation && (
                <DeletePopup closePopup={handleCancelConfirmation} />
            )}
        
        </div>
    )
}