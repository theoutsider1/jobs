import { useEffect, useState } from "react"





export const SiderbarFilter = () => {
    const [userInfo, setUserInfo]= useState([])

    const [newValue, setnewValue]= useState('')
    const handleChange = (e:React.FormEvent<HTMLInputElement>)=> {
        
        if (e.currentTarget.checked){
            setUserInfo([...userInfo , e.currentTarget.value])
            
        } else {
            setUserInfo(userInfo.filter(item => item !== e.currentTarget.value))
            
        }
        
    };    

    useEffect(()=> {
        console.log(userInfo)
    },[userInfo])

    
    
    return (
        <>
             <div className="bg-third w-full">
                <form action="">
                <div className="p-4 border-b-2 border-b-pink-950">
                    <h4>Le type du travail:</h4>
                    <ul className="p-2">
                        <li> 
                            <label className="" htmlFor="temps_plein" >
                            <input type="checkbox" id="temps-plein" value ="temps_plein" name="work_type" onChange={handleChange} />
                               <span className="px-3">Temps plein</span> 
                            </label>
                        </li>
                        <li>
                            <label htmlFor="mi_temps">
                                <input type="checkbox" id="mi-temps" value ="mi_temps"  name="work_type" onChange={handleChange}/>
                                <span className="px-3">Mi-temps</span>
                              </label>
                        </li>
                        <li>
                            <label htmlFor="etudiant">
                                <input type="checkbox" id="etudiant" value ="étudiant" name="work_type" onChange={handleChange}/>
                                <span className="px-3">étudiant</span>
                            </label>
                        </li>
                        <li>
                             <label htmlFor="distance">
                                <input type="checkbox" id="distance" value ="distance" name="work_type" onChange={handleChange}/>
                                <span className="px-3">à distance</span> 
                            </label>
                        </li>
                    </ul>
                   
                   
                   
                </div>

                {/** le type du contrat: */}

                <div className="p-4 border-b-2 border-b-pink-950">
                    <h4>Le type du contrat:</h4>
                    <ul className="p-2">
                        <li> 
                            <label className="" >
                            <input type="checkbox" value ="" />
                               <span className="px-3">CDI</span> 
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" value =""/>
                                <span className="px-3">CDD</span>
                              </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" value =""/>
                                <span className="px-3">Stage</span>
                            </label>
                        </li>
                        <li>
                             <label>
                                <input type="checkbox" value =""/>
                                <span className="px-3">Anapec</span> 
                            </label>
                        </li>
                        <li>
                             <label>
                                <input type="checkbox" value =""/>
                                <span className="px-3">Freelance</span> 
                            </label>
                        </li>
                    </ul>
                </div>

                {/**Domaines: */}
                <div className="p-4 border-b-2 border-b-pink-950">
                    <h4>Domaines:</h4>
                    <ul className="p-2">
                        <li> 
                            <label className="" >
                            <input type="checkbox" value ="" />
                               <span className="px-3">Agriculture</span> 
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" value =""/>
                                <span className="px-3">Audiovisual</span>
                              </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" value =""/>
                                <span className="px-3">industrie</span>
                            </label>
                        </li>
                        <li>
                             <label>
                                <input type="checkbox" value =""/>
                                <span className="px-3">énergie</span> 
                            </label>
                        </li>
                        <li>
                             <label>
                                <input type="checkbox" value =""/>
                                <span className="px-3">électrique</span> 
                            </label>
                        </li>
                        <li>
                             <label>
                                <input type="checkbox" value =""/>
                                <span className="px-3">Marketing</span> 
                            </label>
                        </li>
                        <li>
                             <label>
                                <input type="checkbox" value =""/>
                                <span className="px-3">Finance</span> 
                            </label>
                        </li>
                        <li>
                             <label>
                                <input type="checkbox" value =""/>
                                <span className="px-3">Santé</span> 
                            </label>
                        </li>
                        <li>
                             <label>
                                <input type="checkbox" value =""/>
                                <span className="px-3">Tourisme</span> 
                            </label>
                        </li>
                        <li>
                             <label>
                                <input type="checkbox" value =""/>
                                <span className="px-3">Immobilier</span> 
                            </label>
                        </li>
                    </ul>
                </div>
                
                {/**Fonction: */}

                <div className="p-4 border-b-2 border-b-pink-950">
                    <h4>Fonction:</h4>
                    <ul className="p-2">
                        <li> 
                            <label className="" >
                            <input type="checkbox" />
                               <span className="px-3">RH</span> 
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                <span className="px-3">Comptabilité</span>
                              </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                <span className="px-3">Gestion/Gestion du projet</span>
                            </label>
                        </li>
                        <li>
                             <label>
                                <input type="checkbox" />
                                <span className="px-3">Achat</span> 
                            </label>
                        </li>
                        <li>
                             <label>
                                <input type="checkbox" />
                                <span className="px-3">Communication/publicité</span> 
                            </label>
                        </li>
                        <li>
                             <label>
                                <input type="checkbox" />
                                <span className="px-3">Assurance</span> 
                            </label>
                        </li>
                        <li>
                             <label>
                                <input type="checkbox" />
                                <span className="px-3">Commercial</span> 
                            </label>
                        </li>
                        <li>
                             <label>
                                <input type="checkbox" />
                                <span className="px-3">Assistant</span> 
                            </label>
                        </li>
                        <li>
                             <label>
                                <input type="checkbox" />
                                <span className="px-3">Audit</span> 
                            </label>
                        </li>
                        <li>
                             <label>
                                <input type="checkbox" />
                                <span className="px-3">Droit</span> 
                            </label>
                        </li>
                    </ul>
                </div>

                {/**Niveau d’études: */}

                <div className="p-4 border-b-2 border-b-pink-950">
                    <h4>Niveau d’études:</h4>
                    <ul className="p-2">
                        <li> 
                            <label className="" >
                            <input type="checkbox" />
                               <span className="px-3">Bac+5 et plus</span> 
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                <span className="px-3">Bac+4</span>
                              </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                <span className="px-3">Bac+3</span>
                            </label>
                        </li>
                        <li>
                             <label>
                                <input type="checkbox" />
                                <span className="px-3">Bac+2</span> 
                            </label>
                        </li>
                        <li>
                             <label>
                                <input type="checkbox" />
                                <span className="px-3">Bac</span> 
                            </label>
                        </li>
                        
                    </ul>
                </div>

                 {/** Année d’expériences: */}

                <div className="p-4 border-b-2 border-b-pink-950">
                    <h4> Année d’expériences:</h4>
                    <ul className="p-2">
                        <li> 
                            <label className="" >
                            <input type="checkbox" />
                               <span className="px-3">Plus de 20 ans</span> 
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                <span className="px-3">De 5 à 10 ans </span>
                              </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                <span className="px-3">de 3 à 5 ans</span>
                            </label>
                        </li>
                        <li>
                             <label>
                                <input type="checkbox" />
                                <span className="px-3">De 1 à 3 ans</span> 
                            </label>
                        </li>
                        <li>
                             <label>
                                <input type="checkbox" />
                                <span className="px-3">Moins de 1 an</span> 
                            </label>
                        </li>
                        <li>
                             <label>
                                <input type="checkbox" />
                                <span className="px-3">Débutant</span> 
                            </label>
                        </li>
                        
                    </ul>
                </div>

                 {/** Région:*/}

                <div className="p-4 border-b-2 border-b-pink-950">
                    <h4> Région:</h4>
                    <ul className="p-2">
                        <li> 
                            <label className="" >
                            <input type="checkbox" />
                               <span className="px-3">Casablanca/settat</span> 
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                <span className="px-3">Rabat/Salé </span>
                              </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                <span className="px-3">Fes/Meknes</span>
                            </label>
                        </li>
                        <li>
                             <label>
                                <input type="checkbox" />
                                <span className="px-3">Souss Massa</span> 
                            </label>
                        </li>
                        <li>
                             <label>
                                <input type="checkbox" />
                                <span className="px-3">Daraa Tafilalt</span> 
                            </label>
                        </li>
                        <li>
                             <label>
                                <input type="checkbox" />
                                <span className="px-3">Tanger-Al houceima</span> 
                            </label>
                        </li>
                        <li>
                             <label>
                                <input type="checkbox" />
                                <span className="px-3">Oujda</span> 
                            </label>
                        </li>
                        <li>
                             <label>
                                <input type="checkbox" />
                                <span className="px-3">Marrakesh/Safi</span> 
                            </label>
                        </li>
                        <li>
                             <label>
                                <input type="checkbox" />
                                <span className="px-3">Laayoune Dakhla</span> 
                            </label>
                        </li>
                        <li>
                             <label>
                                <input type="checkbox" />
                                <span className="px-3">Beni Mellal-khnifra</span> 
                            </label>
                        </li>
                        
                    </ul>
                </div>

                {/** Offers de stages */}

                <div className="p-4 ">
                    <h4>Offers de stages:</h4>
                    <ul className="p-2">
                        <li> 
                            <label className="" >
                            <input type="checkbox" />
                               <span className="px-3">Stage PFE</span> 
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                <span className="px-3">Stage PFA</span>
                              </label>
                        </li>
                        <li>
                            <label>
                                <input type="checkbox" />
                                <span className="px-3">Stage d’observation</span>
                            </label>
                        </li>
                        <li>
                             <label>
                                <input type="checkbox" />
                                <span className="px-3">Stage pré-mbauche</span> 
                            </label>
                        </li>
                    </ul>
                   
                   
                   
                </div>
                </form>
               
            </div>
        </>
    )
}

