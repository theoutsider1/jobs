import {useState} from 'react';
import { Link } from 'react-router-dom';



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
    // {id : 1,name: 'Offres d\'emplois', submenu: false,
    // subLinks: [
    //    { head: 'Offres jeunes diplômés', sublink: '/',},
    //    { head: 'Offres cadres', sublink: '/',},
    //    { head: 'Offres Freelance', sublink: '/',},
    //    { head: 'Offres de stage', sublink: '/',},
    //    { head: 'Offres internationales', sublink: '/',},
    // ] 
// },
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
        // { head: 'France',sublink: '/',},
        // { head: 'Allemagne',sublink: '/',},
        // { head: 'Canada',sublink: '/',},
        // { head: 'Espagne',sublink: '/',},
     ]
    }];


const NavLinks = ()=>{
     const [hover, setHover]= useState(false);
     const [indexHovered, setIndexHovered]=useState<null | number>(null);
     

     const handleHoverIn = (index:number) =>{
        setHover(true);
        setIndexHovered(index)
        
     }
     const handleMouseLeave = ()=>{
        setHover(!hover)
     }

     
    

    return (
    <>
        {
            links.map((item,index:number) => (
                
                    <div key={index} className='inline-block px-3 text-left cursor-pointer '  >
                        <div className=''>
                            <h2 className='inline py-7 ' onMouseEnter={() => handleHoverIn(index)}  key={item.name} >{item.name} </h2>
                            <svg className={`inline w-2.5 h-2.5 transform ${hover && indexHovered === index ? '' : `-rotate-90`}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                            </svg>
                         </div>
                                          
                            <div className= {`${hover ? `absolute bg-primary rounded-md mt-5 `: `hidden` }  `} onMouseLeave={handleMouseLeave}>    
                                { hover && indexHovered === index &&
                                    item.subLinks.map((subItem, subIndex) => (
                                        <ul className='py-2 '  key={`ul-${subIndex}`}  >
                                            <li key={`li-${subItem.sublink}`} className='w-full text-left block px-4 py-2 hover:bg-bright '>
                                                <Link to="/">
                                                    {subItem.head}
                                                </Link> 
                                            </li>                                            
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