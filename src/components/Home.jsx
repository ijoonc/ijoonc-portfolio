import React from 'react'
import { SectionWrapper } from '../hoc'

/**
 * 
 * This Home section helps us move to the very top when the Home button is clicked in the Navbar.
 * 
 **/
const Home = () => {

  // Handy function that helps us move to the top when clicked
  const handleHomeClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
  }

  return (
    // We move up really quickly if the Home button is clicked
    <div options = {{speed: 450}}>
      <a href = '#' className = 'hash-span'
         onClick = {handleHomeClick}
         id = "home">
      </a>
    </div>
  )
}

export default Home