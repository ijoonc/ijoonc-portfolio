import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


/**
 * 
 * This ProjectCard component illustrates my projects by giving a short description, some of the
 * technologies I have used, a picture to showcase my project, and a GitHub link to my project.
 * 
 **/
const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
  return (

    // I want each project card to slide in from above
    <motion.div variants = {fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{max: 45,
                      scale: 1,
                      speed: 450}} 
            className='down-blue-gradient p-5 rounded-2xl sm:w-[360px] w-full'>

        <div className = "relative w-full h-[230px]">

          {/* Add a project image */}
          <img src = {image} alt = {name} className = 'w-full h-full object-cover rounded-2xl'/>

          <div className = 'absolute inset-0 flex justify-end m-3 card-img_hover'>

            {/* Send the user to the GitHub link when button is clicked */}
            <div onClick = {() => window.open(source_code_link, "_blank")}
                 className = "black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src = {github} alt = "github" className = 'w-1/2 h-1/2 object-contain' />
            </div>
          </div>
        </div>
        
        {/* Provide the project name and description */}
        <div className = "mt-5">
          <h3 className = "text-white font-bold text-[24px]">{name}</h3>
          <p className = "mt-2 gray-text text-[14px]">{description}</p>
        </div>
        
        {/* Showcase the tags of which technologies I have used for this particular project */}
        <div className = 'mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key = {tag.name} className = {`text-[14px] ${tag.color}`}>
              -{tag.name}
            </p>
          ))}
        </div>
        
      </Tilt>
    </motion.div>
  )
}


/**
 * 
 * This Works component shows a basic header for my work as well as the project cards defined above.
 * 
 */
const Works = () => {
  return (
    <>

      {/* Basic Header Introduction */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My Work So Far</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects</h2>
      </motion.div>

      {/* A Basic Description For My Projects Collectively */}
      <div className='w-full flex'>
        <motion.p variants = {fadeIn("", "", 0.1, 1)}
                  className = "text-center mt-3 text-[17px] leading-[30px] gray-text tracking-wider px-7">
          The following projects showcase my skills and experience through real-world examples of my computational repertoire.
          Each project is briefly described with links to its code repositories.
          My projects reflect my ability to solve complex problems, work with different software tools, and manage projects effectively.
          Please feel free to contact me below if any of my projects interest you, if you have any questions, or if you would like a deeper view of my projects!
        </motion.p>
      </div>

      {/* Display each project one by one */}
      <div className = "mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key = {`project-${index}`} index = {index} {...project}/>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");