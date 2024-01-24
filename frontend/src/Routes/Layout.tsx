import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Espace from "../components/Navbar/BeforeNav/Espace";

const Layout = ()=> {

    return (
        <div className="App">
            <Espace/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout;