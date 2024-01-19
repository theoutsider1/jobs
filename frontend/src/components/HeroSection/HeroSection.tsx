import React,{ useState } from 'react';

import ContractDropDown from './Contract';
import CountryDropDown from './Country';
import GetStartedButton from './GetStartedButton';
import Fields from './fields';




const HeroSection: React.FC =( )=>{
    const [dropdownField , setdropdownField] =useState(false);
    const [dropdownContract , setdropdownContract] =useState(false);
    const [dropdownCountry, setdropdownCountry] =useState(false);

    const togglebetweenComponents = (num : number) =>{

        setdropdownField(num === 1);
        setdropdownContract(num ===2);
        setdropdownCountry(num === 3);
    }
    
    
    return(
        <>
        <div className="w-full h-screen pt-10 bg-[url('../../src/assets/hero-section1.png')] bg-cover bg-no-repeat flex justify-center items-center flex-col gap-14">
            <div className="">
                <h1 className="text-white text-5xl font-extrabold tracking-widest ">2 Etapes pour trouver un emploi</h1>
                
            </div>
                {/* ---------Filter div---------- */}
                    
                    <div className="flex mb-4 gap-3 w-full px-48  text-white  ">                

                        <div className="w-1/3 h-10 bg-secondary rounded ">

                        { /* ---------Fields DropDown----------- */}

                            <Fields isActive={dropdownField} onClick={()=>togglebetweenComponents(1)} />
                            
                        </div>
                        
                        {/*---------Contract DropDown-----------*/ }
                            
                        <div className="w-1/3 h-10  bg-secondary rounded">
                                
                            <ContractDropDown isActive={dropdownContract} onClick={()=> togglebetweenComponents(2)}/>
                            
                        </div>
                            
                        {/*---------Country DropDown----------- */}
                            
                        <div className="w-1/3 h-10  bg-secondary rounded"> 
                            
                            <CountryDropDown isActive={dropdownCountry} onClick={()=>togglebetweenComponents(3)}/>
                        </div>

                    </div>
                     {/*---------Button----------- */}
                    <div className=''>
                            <GetStartedButton />
                    </div>
               {/* </div>*/}               
           
        </div>
        </>
    ) 
}

export default HeroSection;