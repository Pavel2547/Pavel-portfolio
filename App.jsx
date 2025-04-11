import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./Componenets/LoadingScreen";
import { Navbar } from "./Componenets/Navbar";
import { MobileMenu } from "./Componenets/MobileMenu";
import { Home } from "./Componenets/section/Home";
import { About } from "./Componenets/section/About";
import { Projects } from "./Componenets/section/Project";
import { Contact } from "./Componenets/section/Contact";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (

  <>
   {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
   <div className={`min-h-screen transition-opacity duration-700 ${isLoaded? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>

     <Navbar menuOpen= {menuOpen} setMenuOpen={setMenuOpen}/>
     <MobileMenu menuOpen= {menuOpen} setMenuOpen={setMenuOpen}/>
     <Home />
     <About/>
     <Projects/>
     <Contact/>

    </div>
    </>
  );
}

export default App;