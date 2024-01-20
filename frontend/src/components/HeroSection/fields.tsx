import React, { useState } from 'react';
import {IonIcon} from '@ionic/react';
import {chevronForward} from 'ionicons/icons';

 

interface Field {
    id: number;
    field: string;
}
type b = {
    isActive: boolean;
    onClick?: ()=> void;
    onItemClick?: (item: Field)=> void;
}  

const fieldsData:Field[] = [
    
        
    {id:1,field:'Secrétariat / Administration'},
    
    {id:2,field:'Agriculture / Environnement'},
    
    {id:3,field:'Automobile'},
    
    {id:4,field:'Biologie / Chimi'},
    
    {id:5,field:'Comptabilité / Finance/Audit'},
    
    {id:6,field:'Commerce / Ventes'},
    
    {id:7,field:' Informatique / Télécommunication'},
    
    {id:8,field:'Tourisme / Restauration / Hôtellerie'},
    
    {id:9,field:'Transport / Logistique'},
    
    {id:10,field:'Urbanisme / Architecture'},

]

const Fields: React.FC<b> = ({isActive, onClick, onItemClick})=> {
    //const [showList, setShowList] = useState(false);
    const [clickField, setClickField] = useState("select field");

    // const handleClick = () =>{
    //     setShowList(!showList);
    // }

    return(
        <>
            
                            <div className='flex w-full justify-between cursor-pointer' onClick={onClick}>
                                
                                    <span className='p-2 text-black'>{clickField}</span>
                                    <IonIcon icon= {chevronForward} className= {`py-3 text-black transition-transform transform ${isActive ? 'rotate-90' : 'rotate-0'}`}></IonIcon>  
                            </div>
                            
                            <div className={`${!isActive ? 'hidden' : 'h-56 overflow-y-auto rounded' }`}>
                                { isActive &&
                                    fieldsData.map((elem)=>(

                                        <ul className='bg-secondary p-2 text-black '>
                                            <li className='w-full p-2 border-b-2 border-neutral-950/[.10] hover:bg-primary cursor-pointer' 
                                                key={elem.id} 
                                                onClick={()=> {
                                                    // Hide List after the Click
                                                    
                                                    onItemClick ? onItemClick(elem): null;
                                                    setClickField(elem.field)}}>
                                                {elem.field}</li>
                                            
                                        </ul>
                                    ))
                                }
                            </div>
                        
        </>
    )
}

export default Fields;