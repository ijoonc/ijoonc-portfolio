import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant2 } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>

    <motion.div variants={textVariant2()}>
      <h2 className = {`${styles.sectionHeadText} text-center`}>Computer Skills</h2>
      <h5 className = {`${styles.heroSubText} text-center`}>Tools I Have Used So Far</h5>
      <p className = {`${styles.sectionSubText} text-center`}>Main Programming Languages: Python, C++, Java, R</p>
      <p className = {`${styles.sectionSubText} text-center`}>Main Software: Visual Studio, Google Colab, Git, Jupyter, LaTeX, RStudio</p>
      <p className = {`${styles.sectionSubText} text-center`}>Main Technical Skills: Software Development, Machine Learning, Computer Vision, AI, Neural Nets, Decision Trees, Algorithms, Data Science, Image Processing, OOP</p>
    </motion.div>

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