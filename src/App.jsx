/*
* This is the skeleton (structural component) of my website.
* Removed unnecessary imports and App structures to make code look cleaner.
*/

import { BrowserRouter } from "react-router-dom"; 
import { About, Contact, Experience, Hero, Home, Navbar, Tech, Works, StarsCanvas} from './components'; 

const  App = () => {
  return (
    <BrowserRouter>
      <div className = 'relative z-0 bg-primary'>

        <Home />
        
        <div className = 'bg-hero-pattern bg-cover bg-no-repeat bg-center'>
           <Navbar />
           <Hero />
        </div>
        
        <About />
        <Experience />
        <Tech />
        <Works />

        <div className = 'relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
