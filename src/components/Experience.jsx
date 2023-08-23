import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";


/**
 * 
 * The Experience Card displays my previous and current work, volunteering, and other relevant
 * experiences in the form of a card. These cards will be displayed in a Vertical Timeline, which adds
 * extra detail for the user's viewing satisfaction.
 * 
 **/
const ExperienceCard = ({ experience }) => {
  return (
    
    // Initializing our vertical timeline component to display each of my experiences
    <VerticalTimelineElement contentStyle = {{background: '#151E3D', color: '#fff'}}
                             contentArrowStyle = {{borderRight: '7px solid #232631'}}
                             date = {experience.date}
                             iconStyle = {{background: experience.iconBg}}
                             icon = {<div className = 'flex justify-center items-center w-full h-full'>
                                      <img src = {experience.icon} alt = {experience.company_name}
                                      className = 'w-[60%] h-[60%] object-contain '/>
                                   </div>}>

      {/* Experience Title and Company Name */}
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p className = 'gray-text text-[16px] font-semibold'
           style = {{ margin: 0 }}>{experience.company_name}</p>
      </div>

      {/* Bullet Points that Describe the Position */}
      <ul className = 'mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li key = {`experience-point-${index}`}
              className = 'text-white-100 text-[14px] pl-1 tracking-wider'>
                {point}
          </li>
        ))}
      </ul>

    </VerticalTimelineElement>)
}


/**
 * 
 * This Experience section contains the header introduction and the Vertical Timeline component
 * defined above with my relevant experiences.
 * 
 **/
const Experience = () => {
  // Maximum Number of Cards on Mobile Devices
  const isMobile1 = window.outerWidth <= 980;
  const isMobile2 = window.innerWidth <= 980;
  let pointsToRender = experiences;

  if (isMobile1 && isMobile2) {
    pointsToRender = experiences.slice(2, );
  } 

  return (
    <>

      {/* Basic Header */}
      <motion.div variants={textVariant()}>
        <p className = {`${styles.sectionSubText} text-center`}>What I Have Done So Far</p>
        <h2 className = {`${styles.sectionHeadText} text-center`}>Experiences</h2>
      </motion.div>

      {/* Vertical Timeline Component */}
      <div className = 'mt-10 flex flex-col'>
        <VerticalTimeline>
            {pointsToRender.map((experience, index) => (
              <ExperienceCard key = {`experience-${index}`}
                              experience = {experience}/>
            ))}
        </VerticalTimeline>
      </div>
      
    </>
  )
}

export default SectionWrapper(Experience, "experiences")