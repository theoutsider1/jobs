import { useState } from 'react';
import {IonIcon} from '@ionic/react';
import {chevronForward} from 'ionicons/icons';

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
    const [showList, setShowList] = useState(false);
    const [clickField, setClickField] = useState("select field");
    
    const handleClick = () =>{
        setShowList(!showList);
    }
    // const handleClickField = (fieldName: any) => {
    //     setClickField(fieldName)
       
    // }
    
    return(

        <div className="w-full h-screen bg-[url('../../src/assets/hero-section.png')] flex justify-center items-center flex-col">
            <div className="">
                <h1 className="text-white text-5xl font-extrabold tracking-widest ">2 Etapes pour trouver un emploi</h1>
                
            </div>

            <div className="flex mb-4 gap-3 w-full px-48 py-8 text-white ">
                <div className="w-1/3 h-10 bg-secondary rounded ">
                    <div className='flex w-full justify-between cursor-pointer' onClick={handleClick}>
                        
                            <span className='p-2 text-black'>{clickField}</span>
                        <IonIcon icon= {chevronForward} className= {`py-3 text-black transition-transform transform ${showList ? 'rotate-90' : 'rotate-0'}`}></IonIcon>  
                    </div>
                    <div className='h-60 p-0 overflow-y-auto rounded-lg' >
                        { showList &&
                            fields.map((elem: Field)=>(
                                <ul className='bg-secondary p-2 text-black '>
                                    <li className='w-full p-2 border-b-2 border-neutral-950/[.10] hover:bg-primary' 
                                        key={elem.id} 
                                        onClick={()=> {setClickField(elem.field)}}>
                                        {elem.field}</li>
                                    
                                </ul>
                            ))
                        }
                    </div>
                                       
                   {/* <label  htmlFor="">
                        <select className='w-full h-10 bg-secondary text-black rounded border-none' name="" id="">
                        { 
                            fields.map((elem:Field )=> (
                            <option value={`${elem.field}`}>{elem.field}</option>
                         ))}
                        </select> 
                    </label>  */}
                </div>
                <div className="w-1/3 h-10 bg-secondary">2</div>
                <div className="w-1/3 h-10 bg-secondary">3</div>

            </div>
        </div>
    )
}

export default HeroSection;