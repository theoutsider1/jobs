import { useEffect, useState } from "react";
import StatisticsBar from "./Statistics";
import axios from "axios";
import { formatDate } from "../../Types/globalFunctions";
import { Offers } from "../../Types/Globals";



const LatestOffer = ()=> { 
    const [offers, setOffers]= useState<Offers[]>([])


    useEffect(()=> {
        axios.get("http://localhost:3000/candidat")
        .then(response => {
            const comingOffers = response.data
            const formattedOffers = comingOffers.map((offer: Offers) => ({
                ...offer,
                createdAt: formatDate(offer.createdAt)
            }));
            setOffers(formattedOffers)})
        
        .catch(err => console.log(err))
    },[])
    

    return (
       <div className="w-full bg-third">

            <div className="w-full flex justify-center p-4">
                <div><h2 className="text-black text-3xl font-medium tracking-widest ">Dernière offres d'emploi</h2> </div>
               
            </div>

            <div className="w-full flex justify-center">
            
                <div className="grid grid-cols-3 justify-center items-center gap-10 p-10">
                
                    {offers && 
                        offers.map((off, index) => (
                            
                            <div key={index} className="flex items-center bg-primary p-3 rounded">
                                <div className="w-32">
                                <img
                                className="h-[83px] w-[83px] rounded-lg"
                                src="https://github.com/horizon-ui/horizon-tailwind-react-ts-corporate/blob/main/src/assets/img/profile/image1.png?raw=true"
                                alt=""
                                />
                            </div>
                            <div className="w-full ml-4">
                                <h2>{off.title}</h2>
                                <p className="text-base font-medium text-navy-700 dark:text-white">
                                {off.companyName}
                                </p>
                                <p className="mt-2 text-sm text-gray-600 inline">
                                {off.city} | {off.contractType}
                                </p>
                                <div className="flex justify-end items-end">
                                <p className="text-sm">{off.createdAt}</p>
                                </div>
                            </div>
                            </div>
                        
                        ))
                    }
                </div>
                
            </div>
            <div className="w-full pb-4 flex justify-center items-center ">
                    <button className="bg-fourth shadow-shadow hover:bg-secondary text-white font-light text-lg py-2 px-10 rounded">
                         Voir Plus
                    </button>
                </div>
            <div className="">
                <StatisticsBar/>
            </div>
            
        </div>
        
       
    )
}

export default LatestOffer;