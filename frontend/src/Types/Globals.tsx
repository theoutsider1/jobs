// interfaces
export interface OfferData {
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