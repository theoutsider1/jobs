import { createBrowserRouter } from "react-router-dom";
import HeroSection from "../components/HeroSection/HeroSection";
import  Layout  from "./Layout";
import LastProfiles from "../components/Last Profiles/LastProfiles";
//import OffersPage from "../components/Offers/OffersPage";
import OffersList from "../components/Offers/OffersList";
import JobDescription from "../components/OfferDetails/JobDescription";
import { HeroSectionRecruteur } from "../components/Recruteur/LandingPage/HeroSection2";
import { ContactezNous } from "../components/ContactPage/ContactezNous";

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
                path :"/about",
                element:<LastProfiles/>
            },
            {
                path: "/offers",
                element: <OffersList/>,
            },
            {
                path: "/JobDescription",
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
        ]

    }
])

export default Router