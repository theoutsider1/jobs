import React, { useState } from "react";
import { personCircleOutline } from 'ionicons/icons';

import { isLogged } from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import { IonIcon } from "@ionic/react";

 const ProfilDropdown: React.FC<isLogged> = ({isLoggedIn})=>{
    const navigate = useNavigate();
    const [handleClick, setHandleClick]= useState(false);
   
    return(

        <>
            {!isLoggedIn ? (
                <div className="flex gap-5">
                    <span className="cursor-pointer" onClick={() => navigate('/signup')}>S'inscrire</span>
                    <span>|</span>
                    <span className="cursor-pointer" onClick={() => navigate('/login')}>S’identifier</span>
                </div>
                ) : (
                <div className="relative z-40 flex justify-center items-center ">
                    <IonIcon icon={personCircleOutline} onClick={() => setHandleClick(!handleClick)} className="text-4xl cursor-pointer" />
                    <div className={`${handleClick ? ' absolute top-8 bg-primary rounded-md mt-5' : 'hidden'}`}>
                    {handleClick && (
                        <ul className='py-2'>
                        <li className='block w-44 text-left  px-2.5 py-2 hover:bg-bright'>
                            <Link to="">
                                Mon Profile
                            </Link>
                        </li>
                        <li className='block w-full text-left  px-2.5 py-2 hover:bg-bright'>
                            <Link to="">
                                Mes Offres
                            </Link>
                        </li>
                        {/* <li className='w-full text-left block px-2.5 py-2 hover:bg-bright'>
                            <Link to="/">
                                
                            </Link>
                        </li> */}
                        <li className='block w-full text-left px-2.5 py-2 hover:bg-bright'>
                            <Link to="">
                                Se déconnecter
                            </Link>
                        </li>
                        </ul>
                    )}
                    </div>
                </div>
                )}
        </>
    )
}
export default ProfilDropdown;