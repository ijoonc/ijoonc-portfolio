import React from 'react'
import { SectionWrapper } from '../hoc'

const Home = () => {

  const handleHomeClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
  }

  return (
    <div options = {{speed: 450}}>
      <a href = '#' className = 'hash-span'
         onClick = {handleHomeClick}
         id = "home">
      </a>
    </div>
  )
}

export default Home