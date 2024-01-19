import './App.css';
//import Nav from './components/nav';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';

import Espace from './components/Navbar/BeforeNav/Espace';

function App() {
  

  return (
    <>
    <Espace/>
    <Navbar/>
    <HeroSection/>
    <div className='h-56'></div>
    
    </>
  )
}

export default App
