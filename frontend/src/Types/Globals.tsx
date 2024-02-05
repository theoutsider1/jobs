export interface OfferData {
    jobTitle: string;
    companyName?: string;
    contract?: string;
    ville: string;
    domaine?: string;
    studies?: string;
    experienceYears?: string;
}


// function props that i'm passing to sideBarFilter to collect checkboxes values 


export interface dataFromChild {
    onCheckboxChange: (values: string[])=> void;
}