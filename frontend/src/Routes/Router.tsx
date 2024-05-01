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
                path: "/trouverunemploi",
                element: <OffersList/>,
            },
            {
                path: "/description/:id",
                element:<JobDescription/>,
            },
            {
                path: "/EspaceRecruteur",
                element:<HeroSectionRecruteur/>,
            },
            {
                path: "/ContacezNous",
                element:<ContactezNous/>,
            },
            {
                path:"/lancerUnOffre",
                element: <AddJobComponent/>,
            },
            {
                path:"/chooseSpace",
                element: <ChooseSpace/>,
            },
            {
                path:"/suivezlesOffres",
                element: <OffersManagement/>,
            },
            {
                path:"/suivezlesOffres/modifieroffre/:id",
                element: <EditJobOffer/>,
            },
            
        ]

    }
])

export default Router