// import React from "react";
// import logo from '../assets/2jobs.svg';

// interface SubMenuItem {
//     label : string;
//     link : string;
// }
// interface MenuItem {
//     name?: string;
//     link?: string;
//     SubMenu?: SubMenuItem[];
// }

// const menuItems: MenuItem[] = [
//     {name: 'A propos' , link: '/'},
//     {
//         //name: 'Offres d\'emplois' , 
//         //link: '/',
//         SubMenu: [
//             {
//                 label: 'Offres d\'emplois',
//                 link: '/'},
//             {
//                 label: 'Offres jeunes diplômés',
//                 link: '/'},
//             {
//                 label: 'Offres cadres',
//                 link: '/'},
//             {
//                 label: 'Offres freelances',
//                 link: '/'},
//             {
//                 label: 'Offres de stage',
//                 link: '/'},
//             {
//                 label: 'Offres internationales',
//                 link: '/'},
//      ]
//     },
//     {//name: 'Guides' , link: '/',
//         SubMenu: [
//             {
//                 label : 'Guides',
//                 link : '/',
//             },
//             {
//                 label : 'Créer la letter de motivation',
//                 link : '/',
//             },
//             {
//                 label : 'Préparer l\'entretien orale',
//                 link : '/',
//             },
//             {
//                 label : 'j\'estime mon salaire',
//                 link : '/',
//             },
//             {
//                 label : 'Découvrir les droits du travail',
//                 link : '/'
//             },
//             {
//                 label : 'je teste mes compétences',
//                 link : '/'
//             },
//     ]},
//     {//name: 'Mon CV' , link: '/',
//     SubMenu: [
//         {
//             label : 'Mon CV',
//             link : '/',
//         },
//         {
//             label : 'Créer le CV',
//             link : '/',
//         },
//         {
//             label : 'Dépot le CV',
//             link : '/',
//         },
        
//     ]},
//     {name: 'Contact' , link: '/'},
//     {name: 'Pays' , link: '/'},

// ]
// function Nav(){
//     return (
//         <div className="shadow-md w-full fixed top-0 left-0">
//               <div className="md:flex bg-primary py-4">
//                 <div className="font-bold text-2xl cursor-pointer flex items-center text-black-500">
//                     <a href="#"><img src={logo} className="w-[126px] h-8" alt="" /></a>
                    
//                     <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6">
//                        {menuItems.map((item:MenuItem) => (
//                         <li key={item.link}>
//                             <a href={item.link}>{item.name}</a>
//                             {item.SubMenu &&  (
//                                 <select className="">
                                    
//                                     {item.SubMenu.map((subItem:SubMenuItem) => (
//                                         <option key={subItem.link}>                                            
//                                             <a href={subItem.link}>{subItem.label}</a>
//                                         </option>
//                                     ))}
//                                 </select>
//                             )}                       
//                         </li>
//                        ))}
//                     </ul>
//                 </div>
//               </div>
//         </div>
//     )
// }

// export default Nav;