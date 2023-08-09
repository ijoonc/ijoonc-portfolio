import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles'; 
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'; 
import { SectionWrapper } from '../hoc';


/**
 * 
 * The Service Card object illustrates who I am and what role I have played in the form of a card.
 * i.e. Software Developer, Research Intern, etc.
 * 
 **/
const ServiceCard = ({ index, title, icon }) => {
  return (
    
    // I want each service card to be able to tilt by hovering the cursor over it
    <Tilt className = 'xs:w-[250px] w-full'>

      {/* I want the card to slide in to the right one by one */}
      <motion.div variants = {fadeIn('right', 'spring', 0.5 * index, 0.75)}
                  className = 'w-full ocean-blue-gradient p-[1px] rounded-[20px] shadow-card'>
        
        {/* Basic settings for ALL service cards */}
        <div options = {{max: 45, 
                         scale: 1, 
                         speed: 450}}
             className = 'bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly
                          items-center flex-col'>

          {/* Adding an image to the card to add more detail */}
          <img src = {icon} alt = {title} className = 'w-16 h-16 object-contain'/>
          <h3 className = 'text-white text-[20px] font-bold text-center'>{title}</h3>

        </div>
      </motion.div>
    </Tilt>
  )
}

/**
 * 
 * The About Section incorporates basic information about myself and features the Service
 * Cards defined above.
 * 
 **/
const About = () => {
  return (
    <>
      {/* I want the header to have a sliding animation too! */}
      <motion.div variants = {textVariant()}>
        <p className = {styles.sectionSubText}>Introduction</p>
        <h2 className = {styles.sectionHeadText}>Overview</h2>
      </motion.div>

      {/* I want my basic description to fade into the screen for added details */}
      <motion.p variants = {fadeIn('', '', 0.1, 1)}
                className = 'mt-4 text-[#d3d3d3] text-[17px] max-w-3xl leading-[30px]'>
          I am currently a rising junior at <b className = 'text-[#efcf00]'><a href = 'https://www.hmc.edu/' target = '_blank'><u>Harvey Mudd College</u></a></b>  who 
          is pursuing a Bachelor's Degree in the field of <b>Computer Science</b> 💻. I am also studying <i>(concentrating)</i> in <b>Economics</b> 📈. <br /><br />

          GPA: 3.905; Dean's List: Spring 2022 - Spring 2023; Expected to Graduate in <b>May 2025</b>. <br /><br />

          <b>Goal/Vision</b>: I wish to utilize my computational intelligence, skillset, and repertoire to make a positive, lasting change in our society. <br /><br />

          <b>What I am currently looking for</b>: an internship or research position in the field of Computer Science. <br /><br />
          I am looking for a group of innovative, creative, and inspiring talent that can guide me towards gaining real-world technical experiences. 
          I wish to join a team that can help me accomplish my dream: <b>to combine my passions for Computer Science and supporting others in need to change the world for the better.</b><br /><br />
      </motion.p>

      {/* I display one service card at a time. */}
      <div className = 'mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key = {service.title} index = {index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")