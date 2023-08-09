import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant2 } from "../utils/motion";
import { styles } from "../styles";


/**
 * 
 * This Tech file portrays the Computer Skills I have developed up to this point, including some
 * 3D balls that represent some of my main programming languages, software, and technical skills.
 * 
 **/
const Tech = () => {
  return (
    <>
    {/* Basic Header to Showcase and Explain what the 3D balls below indicate */}
    <motion.div variants={textVariant2()}>
      <h2 className = {`${styles.sectionHeadText} text-center`}>Computer Skills</h2>
      <h5 className = {`${styles.heroSubText} text-center`}>Tools I Have Used So Far</h5>
      <p className = {`${styles.sectionSubText} text-center`}>Main Programming Languages: Python, C++, Java, R, JavaScript, React, HTML, CSS</p>
      <p className = {`${styles.sectionSubText} text-center`}>Main Software: Visual Studio, Google Colab, Git, Jupyter, LaTeX, RStudio</p>
      <p className = {`${styles.sectionSubText} text-center`}>Main Technical Skills: Software Development, Machine Learning, Computer Vision, AI, Neural Nets, Decision Trees, Algorithms, Data Science, Image Processing, OOP</p>
    </motion.div>

    {/* Represent my technologies one by one */}
    <div className = 'flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className = 'w-28 h-28' key = {technology.name}>
           <BallCanvas icon = {technology.icon} />
        </div>
      ))}
    </div>

  </>
  )
}

export default SectionWrapper(Tech, "");