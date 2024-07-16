// Manage which space is active props 

export interface  activeStateProps{
    roleFromAuth : string | null;
    onActive: ()=> void;
}


// interfaces
export interface OfferData {
    id: number;
    createdAt: string;
    title: string;
    companyName?: string;
    contractType?: string;
    city: string;
    domaine?: string;
    jobType?: string;
    studies?: string | null;
    experience?: string;
    description? : string;
    missions? : string[] ;
    profil? : string[];
    avantages?: string[];

}

// used in JobsManagement component (fetchAllData()) 
export interface OffData {
    id: number;
    createdAt: string;
    updatedAt: string;
    title: string;
    companyName?: string;
    contractType?: string;
    city: string;
    domaine?: string;
    jobType?: string;
    deadline? : string ;
    fonction?: string;
    studiesRequirement?: string;
    experience?: string;
    description? : string;
    missions? : string[] ;
    profil? : string[];
    advantages?: string[];
    cvsFiles : number;

}

// function props that i'm passing to sideBarFilter to collect checkboxes values 


export interface dataFromChild {
    onCheckboxChange: (values: string[])=> void;
}



// régions

export const regions: string[] = [
    "Casablanca - Settat",
    "Rabat",
    "Fes - Meknes",
    "Souss Massa",
    "Daraa Tafilalt",
    "Tanger - Al houceima",
    "Oujda",
    "Marrakesh - Safi",
    "Laayoune - Dakhla",
    "Beni Mellal - khnifra"
];


// interface Manage Which space isActive 

export interface whichSpaceIsActive {
    recruteurSpace: boolean;
    candidatSpace: boolean;
}


// AddOffersComponent interfaces 

export interface DropdownOption {
    id: number;
    label: string;
}

export const dropdownOptions: DropdownOption[] = [
    { id: 1, label: "CDI" },
    { id: 2, label: "CDD", },
    { id: 3, label: "Stage", },
    { id: 4, label: "Anapec",}
];


export const fonctionOptions: DropdownOption[] = [
    { id: 1, label: "Communication" },
    { id: 2, label: "Marketing- social mediat", },
    { id: 3, label: "Commercial", },
    { id: 4, label: "Graphist",},
    { id: 5, label: "Data",},
    { id: 6, label: "Cybersécurité",},
    { id: 7, label: "Développeur",},
    { id: 8, label: "Finance",},
    { id: 9, label: "Product manager",},
    { id: 10, label: "Responsable relation client",},
    { id: 11, label: "RAF",},
    { id: 12, label: "HR",},
    { id: 13, label: "PR",},
    { id: 14, label: "Logistic",},
    { id: 15, label: "Juriste",},
    { id: 16, label: "Formation",}
];
export const regionOptions : DropdownOption[] = [
    { id: 1, label: "Chaouia - Ouardigha" },
    { id: 2, label: "Doukala – Abda", },
    { id: 3, label: "Fès – Boulemane", },
    { id: 4, label: "Casablanca",},
    { id: 5, label: "Gharb - Chrarda - Béni Hssen",},
    { id: 6, label: "Guelmim - Es-Semara",},
    { id: 7, label: "Laâyoune - Boujdour - S. El Hamra",},
    { id: 8, label: "Meknès – Tafilalet",},
    { id: 9, label: "Marrakech – Tensift - Al Haouz",},
    { id: 10, label: "Oriental",},
    { id: 11, label: "Oued Ed-Dahab - Lagouira",},
    { id: 12, label: "Rabat - Salé - Zemmour - Zaer",},
    { id: 13, label: "Souss - Massa - Daraa",},
    { id: 14, label: "Tadla – Azilal",},
    { id: 15, label: "Taza - Al Hoceïma - Taounate",},
    { id: 16, label: "Tanger - Tétouan",}
];
export const domaineOptions : DropdownOption[] = [
    { id: 1, label: "Agriculture" },
    { id: 2, label: "Audiovisual", },
    { id: 3, label: "Industrie", },
    { id: 4, label: "Energie",},
    { id: 5, label: "Electronique",},
    { id: 6, label: "Marketing",},
    { id: 7, label: "Finance",},
    { id: 8, label: "Santé",},
    { id: 9, label: "Tourisme",},
    { id: 10, label: "Immobilier",},
];

// Agriculture
//  Audiovisual
//   Industrie
//    Energie
//     Electronique
//      Marketing
//       Finance
//        Santé 
//       Tourisme 
//       Immobilier
// ---------- Types de travail -------

export const typeTravail: DropdownOption[] = [
    { id: 11, label: "Temps plein" },
    { id: 12, label: "A distance", },
    { id: 13, label: "Etudiant", },
    { id: 14, label: "Mi-Temps",}
];

// ----------- Upload Cv Props / espace candidat --------------

export interface uploadCvCandidatProps {
        isOpen : boolean;
        isClose : ()=> void;
        jobId: number | null; // Add jobId property
}
// ----------- Create Recruiter Account Props / espace recruiter --------------

export interface createAccountPopupProps {
        isOpen : boolean;
        isClose : ()=> void;
       // jobId: number | null; // Add jobId property
}

// -------------- lancer un offre  interface -------------------

export interface inputOffer {
    id: string;
    label : string;
}

export const inputOfferAttributes: inputOffer[] = [
    {id: 'nomComplet', label:'Nom Complet'},
    {id: 'description', label:'Description'},
    {id: 'companyName', label:'companyName'},
    {id: 'nomComplet', label:'Nom Complet'},
    {id: 'nomComplet', label:'Nom Complet'},
]


// interface used in Latestoffers component 
export interface Offers {
    title: string;
    createdAt : string;
    city :string;
    contractType : string;
    experience: string;
    companyName: string;
}

// Interface  UpdateJobOfferDTO used in EditJobOffer.tsx

export interface UpdateJobOfferDTO {
    id?: number;
    title?: string;
    companyName?: string;
    contractType?: string;
    city?: string;
    domaine?: string;
    jobType?: string;
    studies?: string | null;
    experience?: string;
    deadline? : string;
    description? : string;
    missions? : string[] ;
    profil? : string[];
    avantages?: string[];

}

export interface EditedJob {
    id?: number;
    createdAt?: string;
    updatedAt?: string;
    title?: string;
    companyName?: string;
    contractType?: string;
    city?: string;
    domaine?: string;
    jobType?: string;
    deadline?: string;
    fonction?: string;
    studiesRequirement?: string;
    experience?: string;
    description?: string;
    missions?: string; // Changed from string[] to string
    profil?: string; // Changed from string[] to string
    advantages?: string[];
}

export interface RecruiterInfo{

    createdAt: string;
    fullName: string;
    id : number;
    mail: string;
    phone_number : string;
    updatedAt : string;
}



export interface AddJob {
  id: number;
  title: string;
  city: string;
  contractType: string;
  experience: string;
  domaine: string;
  companyName: string;
  description: string;
  jobType: string;
  missions: string;
  deadline?: Date; 
  fonction?: string;
  studiesRequirement: string;
  profil: string;
  advantages: string[];
  }