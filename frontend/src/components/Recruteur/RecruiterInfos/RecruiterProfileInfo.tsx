import { useEffect, useState } from "react";
import { axiosPrivate } from "../../../api/axios";
import { RecruiterInfo } from "../../../Types/Globals";
import { Riple } from "react-loading-indicators";
import { formatDate } from "../../../Types/globalFunctions";

export const RecruiterProfileInfo = ()=>{
    const [loading, setLoading] = useState(true); // Local loading state
   
    const [userData, setUserData] = useState<RecruiterInfo>({
        createdAt: "",
        fullName: "",
        id: 0,
        mail: "",
        phone_number: "",
        updatedAt: ""
    });

    const fetchRecruiterData = async ()=>{
        const response = await axiosPrivate.get('/recruteurs/profile');
        const datainfo = response.data.myProfileDetails
        const data= {
            ...datainfo,
            createdAt: formatDate(datainfo.createdAt),
            updatedAt: formatDate(datainfo.updatedAt)}
        setUserData(data)
        setLoading(false)
      
    }
    useEffect(()=>{
        fetchRecruiterData()
    },[])

    if (loading) {
        return (
          <div className="w-full flex h-screen justify-center items-center">
             <Riple color="#4ADE80" size="medium" text="" textColor="" />
          </div>
        )}
    if(userData){
        return(
            <div className="w-full">
                <div className="p-12 text-5xl font-semibold text-center bg-neutral-100">
                    <h3>Mon Profile</h3>
                </div>
                <div className="flex m-8 px-12">
                    <div className="w-2/6 flex ">
                         <h3>Photo</h3>
                    </div>
    
                    <div className="w-4/6">
                        <div className="my-4 w-full text-md">
                            <span className=" text-xl font-bold">ID: </span>
                            <span className="text-2xl font-semibold">{userData.id}</span>
                        </div>

                        <div className="">
                            <label htmlFor="fullName" className="w-full text-xl font-semibold">
                                <span>Nom complet</span>
                            </label>
                         
                                <input type="text" id="fullName" defaultValue={userData.fullName}  className=" block w-full rounded-md border-0 py-1.5 pl-3 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 " />
                      
                        </div>
                        <div className="py-2">
                            <label htmlFor="mail" className="w-full text-xl font-semibold">
                                <span className="">Mail</span>
                            </label>
                                <input type="text" id="mail" defaultValue={userData.mail} className="block w-full rounded-md border-0 py-1.5 pl-3 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 " />
                      
                       </div>
                       <div className="py-2">
                            <label htmlFor="phone_number" className="w-full text-xl font-semibold">
                                <span>Numéro de Téléphone</span>
                            </label>
                                <input type="text" id="phone_number" defaultValue={userData.phone_number} className="block w-full rounded-md border-0 py-1.5 pl-3 pr-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 " />
                      
                       </div>
                        <div className="my-4 w-full text-md ">
                            <span className="block my-2">Compte créé le: </span>
                            <span className="text-xl font-semibold">{userData.createdAt}</span>
                        </div>
                        <div className="my-4 w-full text-md ">
                            <span className="block my-2">Modifié  le: </span>
                            <span className="text-xl font-semibold">{userData.updatedAt}</span>
                        </div>

                    </div>
    
                </div>
                
            </div>
        )
    }
   
}