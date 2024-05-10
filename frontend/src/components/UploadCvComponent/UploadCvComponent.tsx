import { IonIcon } from "@ionic/react";
import { uploadCvCandidatProps } from "../../Types/Globals"
import {shieldCheckmarkOutline} from "ionicons/icons";
import twoSvg from "../../assets/twoSvg.svg";
import { useState } from "react";
import axios from "axios";

export const UploadCvComponent: React.FC<uploadCvCandidatProps> = ({isOpen , isClose, jobId})=> {

    if (!isOpen){
        return null;
    }
    // ----------------
    const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!file ) {
      alert('Please select a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      // Replace 'YOUR_UPLOAD_ENDPOINT' with your actual upload endpoint
      const response = await axios.post(`http://localhost:3000/candidat/postuler/cv/${jobId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Upload successful:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Failed to upload file.');
    }
  };
    // ----------------

    return(
        <div className="flex flex-col items-center justify-center fixed inset-0 bg-gray-500 bg-opacity-75">
        <form onSubmit={handleFormSubmit} className="bg-third flex flex-col justify-center items-center rounded-md">
            <div className="w-full flex flex-row">
                        <div className="w-1/2">
                            <div className="w-full flex items-start p-3">
                                <img src={twoSvg} alt=""className="h-10" />                  
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="w-full flex justify-end items-start">
                                <span className="close px-3 cursor-pointer hover:text-neutral-700" onClick={isClose}>&times;</span>
                            </div>
                        </div>
                        
            </div>
            <label htmlFor="dropzone-file" className="z-40 p-14 flex justify-center items-center border-2 border-gray-300 border-dashed rounded-lg bg-third">
                
                    <div className="flex flex-col items-center justify-center pt-5 pb-6 cursor-pointer">
                        
                        <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 "><span className="font-semibold">Clicker Pour Télécharger </span> votre CV</p>
                        <p className="text-xs text-gray-500 ">PDF,word,Doc(2 Mo,max)</p>
                    </div>
                        <input onChange={handleFileChange} id="dropzone-file" type="file" className="hidden" />
                    
            </label>
            <div className="flex flex-row gap-2">
                <div className="w-3/4 px-2">
                    <ul className="opacity-50 ">
                        <li>
                            <div>
                                <IonIcon icon={shieldCheckmarkOutline} ></IonIcon>
                                <span  className="px-2">Assurez-vous que votre CV est bien structuré et facile à lire.</span>
                            </div>
                            
                        </li>
                        <li>
                            <div>
                                <IonIcon icon={shieldCheckmarkOutline} ></IonIcon>
                                <span className="px-2"> 
                                    Incluez uniquement des informations pertinentes par rapport
                                </span>
                                <span className="inline-block px-6"> au poste pour lequel vous postulez.</span>
                            
                            </div>
                            
                        </li>
                        <li>
                            <div>
                                <IonIcon icon={shieldCheckmarkOutline} ></IonIcon>
                                <span className="px-2">
                                    Personaliser votre CV en fonction  du poste pour lequel  vous
                                </span>
                                <span className="block px-6"> postuler.</span>
                            </div>
                            
                        </li>
                    </ul>
                </div>
                <div className="w-1/4 p-0 mr-0 flex justify-center items-center ">
                <button
                    type="submit"
                    
                    className="ustify-self-center rounded bg-darkk px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.2),0_8px_9px_-4px_rgba(0,0,0,0.3)] " >
                    Postuler
                </button>
                </div>
            </div>
        </form>
            
            
        </div>
    )
}