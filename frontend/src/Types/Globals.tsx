// Manage which space is active props 

export interface  activeStateProps{
    
    onActive: ()=> void;
}


// interfaces
export interface OfferData {
    id: number;
    jobTitle: string;
    companyName?: string;
    contract?: string;
    ville: string;
    domaine?: string;
    studies?: string;
    experienceYears?: string;
    description? : string;
    missions? : string[] ;
    profil? : string[];
    avantages?: string[];

}

// function props that i'm passing to sideBarFilter to collect checkboxes values 


export interface dataFromChild {
    onCheckboxChange: (values: string[])=> void;
}



// régions

export const regions: string[] = [
    "Casablanca, Settat",
    "rabat",
    "Fes, Meknes",
    "Souss Massa",
    "Daraa Tafilalt",
    "Tanger - Al houceima",
    "Oujda",
    "Marrakesh, Safi",
    "Laayoune Dakhla",
    "Beni Mellal-khnifra"
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