import { createBrowserRouter } from "react-router-dom";
import HeroSection from "../components/HeroSection/HeroSection";
import  Layout  from "./Layout";
import LastProfiles from "../components/Last Profiles/LastProfiles";
import OffersPage from "../components/Offers/OffersPage";

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
                element: <OffersPage/>,
            }
        ]

    }
])

export default Router