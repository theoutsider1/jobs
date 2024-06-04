import { createBrowserRouter } from "react-router-dom";
import HeroSection from "../components/HeroSection/HeroSection";
import  Layout  from "./Layout";
import OffersList from "../components/Offers/OffersList";
import JobDescription from "../components/OfferDetails/JobDescription";
import { HeroSectionRecruteur } from "../components/Recruteur/LandingPage/HeroSection2";
import { ContactezNous } from "../components/ContactPage/ContactezNous";
import { AddJobComponent } from "../components/Recruteur/AddOffersPage/AddJobComponent";
import { ChooseSpace } from "../components/ChooseSpace/ChooseSpaceT";
import { OffersManagement } from "../components/Recruteur/JobsManagement/JobsManagement";
import { EditJobOffer } from "../components/Recruteur/JobsManagement/EditJobOffer/EditJobOffer";
import { LoginCanditatesForm } from "../components/Navbar/IdentificationForms/LoginForm";
import { CreateAccountCandidates } from "../components/Navbar/IdentificationForms/CreateAccount";

const Router = createBrowserRouter([
    {
        path: "/",
        element:<Layout/>,
        children: [
            {
                path: "/",
                element: <HeroSection/>,
            },
            {
                // public 
                path: "/trouverunemploi",
                element: <OffersList/>,
            },
            {
                // public
                path: "/description/:id",
                element:<JobDescription/>,
            },
            {
                // public and but if the user if logged in as a candidate can't access it 
                path: "/EspaceRecruteur",
                element:<HeroSectionRecruteur/>,
            },
            { 
                // public routes
                path: "/ContacezNous",
                element:<ContactezNous/>,
            },
            {
                // check if the user  is logged in and is a recruiter
                path:"/lancerUnOffre",
                element: <AddJobComponent/>,
            },
            {
                // first page if the user is not logged in 
                path:"/chooseSpace",
                element: <ChooseSpace/>,
            },
            {
                // check if the user  is logged in and is a recruiter
                path:"/suivezlesOffres",
                element: <OffersManagement/>,
            },
            {
                // check if the user  is logged in and is a recruiter
                path:"/suivezlesoffres/modifieroffre/:id",
                element: <EditJobOffer/>,
            },
            {
                // public

                path:"/login",
                element: <LoginCanditatesForm/>,
            },
            {
                // public 
                path:"/signup",
                element: <CreateAccountCandidates/>,
            },
            
        ]

    }
])

export default Router