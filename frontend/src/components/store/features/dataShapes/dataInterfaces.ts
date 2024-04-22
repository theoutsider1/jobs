// job interface for jobDetails 
// $$ used only in redux reducer $$


export interface offerEmploi {
    id: number,
    createdAt: string,
    title: string,
    city: string,
    contractType: string,
    experience: string,
    domaine: string,
    companyName: string,
    description: string,
    jobType: string,
    missions: string,
    profil: string,
    advantages: string[],
   
}