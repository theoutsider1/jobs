import React, { useEffect, useRef, useState } from "react";
import { personCircleOutline } from 'ionicons/icons';
import { isLogged } from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { axiosPrivate } from "../../api/axios";
import axios from "axios";

const ProfilDropdown: React.FC<isLogged> = ({ isLoggedIn }) => {
    const navigate = useNavigate();
   
    const menuRef = useRef<HTMLDivElement>(null);
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setOpen(false);
                console.log("Menu closed", menuRef.current);
            } else {
                console.log("Clicked inside menu", menuRef.current);
            }
        };

        console.log("Adding event listener");
        document.addEventListener('mousedown', handler);

        return () => {
            console.log("Removing event listener");
            document.removeEventListener('mousedown', handler);
        };
    }, []);

    const toggleMenu = () => {
        setOpen(!isOpen);
        console.log("Menu toggled", isOpen);
    };

    const logOut = async() => {
        try {
            setOpen(!isOpen);
            const response = await axiosPrivate.get('/espacerecruteurs/logout', {});
            console.log('Logout response:', response);
            navigate('/login');
            
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Axios error during logout:', error.response?.status, error.response?.data);
            } else {
                console.error('Unexpected error during logout:', error);
            }
        }
  
  };
    

    return (
        <>
            {!isLoggedIn ? (
                <div className="flex gap-5">
                    <span className="cursor-pointer" onClick={() => navigate('/signup')}>S'inscrire</span>
                    <span>|</span>
                    <span className="cursor-pointer" onClick={() => navigate('/login')}>S’identifier</span>
                </div>
            ) : (
                <div className="flex flex-row items-center gap-4">
                    <div className="border-r-2 border-neutral-950 px-4">
                        <Link to="">
                            Hatim
                        </Link>
                    </div>
                    <div className="relative z-40 flex justify-center items-center" ref={menuRef}>
                        <IonIcon icon={personCircleOutline} onClick={toggleMenu} className="text-4xl cursor-pointer" />
                        <div className={`${isOpen ? 'absolute top-8 bg-primary rounded-md mt-5' : 'hidden'}`}>
                            {isOpen && (
                                <ul className='py-2'>
                                    <li className='block w-44 text-left px-2.5 py-2 hover:bg-bright'>
                                        <Link to="/suivezlesOffres/mon-profile" onClick={toggleMenu}>
                                            Mon profile
                                        </Link>
                                    </li>
                                    <li className='block w-full text-left px-2.5 py-2 hover:bg-bright'>
                                        <Link to="/suivezlesOffres/ajouter-offre" onClick={toggleMenu}>
                                            Ajouter un offre
                                        </Link>
                                    </li>
                                    <li className='w-full text-left block px-2.5 py-2 hover:bg-bright'>
                                        <Link to="/lancerUnOffre" onClick={toggleMenu}>
                                            Ajouter un offre
                                        </Link>
                                    </li>
                                    <li className='w-full text-left block px-2.5 py-2 hover:bg-bright'>
                                        <Link to="/lancerUnOffre" onClick={logOut}>
                                            Déconnexion
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProfilDropdown;
