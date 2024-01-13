import {useState} from 'react';
import { IonIcon } from '@ionic/react';
import {chevronForward} from 'ionicons/icons';



interface Links {
    id : number;
        name: string; 
        submenu: boolean; 
        subLinks:  SubLinks[];
     }

interface SubLinks {
        head: string,
        sublink: string,
    }

const links:Links[] = [
    {id : 1,name: 'Offres d\'emplois', submenu: false,
    subLinks: [
       { head: 'Offres jeunes diplômés', sublink: '/',},
       { head: 'Offres cadres', sublink: '/',},
       { head: 'Offres Freelance', sublink: '/',},
       { head: 'Offres de stage', sublink: '/',},
       { head: 'Offres internationales', sublink: '/',},
    ] 
},
    {id :2,name: 'Guides', submenu: false,
    subLinks: [       
        { head: 'Créer la lettre de motivation',sublink: '/',},
        { head: 'Préparer l’entretien orale',sublink: '/',},
        { head: 'J’estime mon salaire',sublink: '/',},
        { head: 'Découvrir les droits du travail',sublink: '/',},
        { head: 'Je teste mes compétences',sublink: '/',}
     ] 
},
     {id :3,name: 'Mon CV',submenu: false,
     subLinks: [
        { head: 'Créer le CV',sublink: '/',},
        { head: 'Dépot le CV',sublink: '/',},
     ]
},
      {id :4,name: 'Pays',submenu: false, 
      subLinks: [
        { head: 'Maroc',sublink: '/',},
        { head: 'France',sublink: '/',},
        { head: 'Allemagne',sublink: '/',},
        { head: 'Canada',sublink: '/',},
        { head: 'Espagne',sublink: '/',},
     ]
    }];


const NavLinks = ()=>{
     const [hover, setHover]= useState(false);
     const [indexHovered, setIndexHovered]=useState<null | number>(null);
     
     const handleHoverIn = (index:number) =>{
        setHover(true);
        setIndexHovered(index)
        
     }

     
     const handleHoverOut = ()=>{
        setHover(false);
     }
    return (
    <>
        {
            links.map((item,index:number) => (
                
                    <div className='inline-block px-3 text-left cursor-pointer'  >
                        <h1 className='inline py-7' onMouseOver={() => handleHoverIn(index)} onMouseOut= {handleHoverOut}  key={index} >{item.name} </h1>
                        <IonIcon icon= {chevronForward} className= ''></IonIcon>                      
                            <div className= {` absolute bg-primary rounded-xl `}>    
                                { hover && indexHovered === index &&
                                    item.subLinks.map((subItem) => (
                                        <ul className='p-7 ' key={index} onMouseOver={() => setHover(true)}  onMouseOut= {handleHoverOut} >
                                            <li >{subItem.head} </li>                                            
                                        </ul>
                                    ))
                                }
                         </div>
                    </div>                
            ))
        }
        
    </>
    )
}

export default NavLinks;