import { useState } from 'react';
import {IonIcon} from '@ionic/react';
import {chevronForward} from 'ionicons/icons';

import ContractDropDown from './Contract';
import CountryDropDown from './Country';
import GetStartedButton from './GetStartedButton';


interface Field {
    id: number;
    field: string;
}

const fields:Field[] = [
    
        
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

function HeroSection (){
    // Field State 
    const [showList, setShowList] = useState(false);
    const [clickField, setClickField] = useState("select field");
    
    const handleClick = () =>{
        setShowList(!showList);
    }
    // const handleClickField = (fieldName: any) => {
    //     setClickField(fieldName)
       
    // }
    
    return(
        
        <div className="w-full h-screen bg-[url('../../src/assets/hero-section.png')] flex justify-center items-center flex-col gap-14">
            <div className="">
                <h1 className="text-white text-5xl font-extrabold tracking-widest ">2 Etapes pour trouver un emploi</h1>
                
            </div>
{/*                <div className='flex flex-col gap-32 w-full'>}
                    {/* ---------Filter div---------- */}
                    
                    <div className="flex mb-4 gap-3 w-full px-48  text-white  ">

                        { /* ---------Country DropDown----------- */}

                        <div className="w-1/3 h-10 bg-secondary rounded ">
                            <div className='flex w-full justify-between cursor-pointer' onClick={handleClick}>
                                
                                    <span className='p-2 text-black'>{clickField}</span>
                                    <IonIcon icon= {chevronForward} className= {`py-3 text-black transition-transform transform ${showList ? 'rotate-90' : 'rotate-0'}`}></IonIcon>  
                            </div>
                            
                            <div className={`${!showList ? 'hidden' : 'h-56 overflow-y-auto rounded' }`}>
                                { showList &&
                                    fields.map((elem: Field)=>(

                                        <ul className='bg-secondary p-2 text-black '>
                                            <li className='w-full p-2 border-b-2 border-neutral-950/[.10] hover:bg-primary' 
                                                key={elem.id} 
                                                onClick={()=> {
                                                    // Hide List after the Click
                                                    handleClick();
                                                    setClickField(elem.field)}}>
                                                {elem.field}</li>
                                            
                                        </ul>
                                    ))
                                }
                            </div>
                        </div>
                        
                            {/*---------Contract DropDown-----------*/ }
                            
                            <div className="w-1/3 h-10 z-20 bg-secondary rounded">
                                
                                <ContractDropDown/>
                            
                            </div>
                            {/*---------Country DropDown----------- */}
                            
                            <div className="w-1/3 h-10 bg-secondary rounded"> 
                            <CountryDropDown/>
                            </div>

                    </div>
                     {/*---------Button----------- */}
                    <div className='-z-1'>
                            <GetStartedButton/>
                    </div>
               {/* </div>*/}               
           
        </div>
    ) 
}

export default HeroSection;