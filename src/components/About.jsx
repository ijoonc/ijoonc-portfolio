import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles'; 
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion'; 

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className = 'xs:w-[250px] w-full'>
      <motion.div variants = {fadeIn('right', 'spring', 0.5 * index, 0.75)}
                  className = 'w-full ocean-blue-gradient p-[1px] rounded-[20px] shadow-card'>
        <div options = {{max: 45, 
                         scale: 1, 
                         speed: 450}}
             className = 'bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly
                          items-center flex-col'>

          <img src = {icon} alt = {title} className = 'w-16 h-16 object-contain'/>
          <h3 className = 'text-white text-[20px] font-bold text-center'>{title}</h3>

        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>

      <motion.div variants = {textVariant()}>
        <p className = {styles.sectionSubText}>Introduction</p>
        <h2 className = {styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants = {fadeIn('', '', 0.1, 1)}
                className = 'mt-4 text-[#d3d3d3] text-[17px] max-w-3xl leading-[30px]'>
          I am currently a rising junior at <b className = 'text-[#efcf00]'><a href = 'https://www.hmc.edu/' target = '_blank'><u>Harvey Mudd College</u></a></b>  who 
          is pursuing a Bachelor's Degree in the field of <b>Computer Science</b> 💻. I am also studying <i>(concentrating)</i> in <b>Economics</b> 📈. <br /><br />

          GPA: 3.905; Dean's List: Spring 2022 - Spring 2023; Expected to Graduate in <b>May 2025</b>. <br /><br />

          <b>Goal/Vision</b>: I wish to utilize my computational intelligence, skillset, and repertoire to make a positive, lasting change in our society. <br /><br />

          <b>What I am currently looking for</b>: an internship or research position in the field of Computer Science. <br /><br />
          I am looking for a group of innovative, creative, and inspiring talent that can provide me real-world technical experiences. 
          I wish to join a team that can help me to accomplish my dream: <b>to combine my passions for Computer Science and supporting others in need to change the world for the better.</b><br /><br />
      </motion.p>

      <div className = 'mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key = {service.title} index = {index} {...service}/>
        ))}
      </div>

    </>
  )
}

export default About