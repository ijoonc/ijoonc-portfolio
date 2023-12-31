import { motion } from 'framer-motion';
import { styles } from '../styles';
import '../styles.css'
import Photo from '../profile-img.jpg';


/**
 * 
 * This Hero section is the first thing that the user sees -- contains basic description about myself,
 * a picture of myself, my social media, and a tab that allows users to take a look at my resume.
 * 
 **/
const Hero = () => {
  return (
    <section className = "relative w-full h-screen mx-auto">

      <div className = {`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl
                         mx-auto flex flex-row items-start gap-5`}>
        <div className = 'flex flex-col justify-center items-center mt-5'>
          <div className = 'w-5 h-5 rounded-full bg-[#00aae8]'/>
          <div className =  'w-1 sm:h-80 h-40 ocean-blue-gradient'/>
        </div>

        <div>
           {/* My Name */}
           <h1 className = {`${styles.heroHeadText} text-white`}>Hello, I'm 
           <span className = 'text-[#00aae8]'> Isaac</span>!</h1 >

           {/* My Pronouns */}
           <p className = {`mt-1 text-white-100`}>
           He/Him
           </p>
           
           {/* Who I Am */}
           <div className = 'typing-container'>
            <p className = {`${styles.heroSubText} mt-2 text-white-100`}>
              <b>Computer Science</b> & <b>Economics Student </b> 
                <br className = 'sm:block hidden'/> @ <b className = 'text-[#efcf00]'>
              <a href = 'https://www.hmc.edu/' target = '_blank'><u>HMC</u></a></b> |
              <b> Software Developer</b> | <b>Programmer</b>.
            </p>
           </div>
           
           {/* My Social Media Links */}
           <div>
           <a className="social-icon-linkedin social-icons-container home-text" href="https://www.linkedin.com/in/ijoonc/" target = "_blank">
            <ion-icon name="logo-linkedin"></ion-icon>
           </a>
           
            <a className="social-icon-github social-icons-container home-text" href="https://github.com/ijoonc" target = "_blank">
              <ion-icon name="logo-github"></ion-icon>
            </a>

            {/* My Resume */}
            <a className="resume-loader" href = 'https://docs.google.com/document/d/1a7bpFe9sS_i6esgvjNGyR59u6uSTb85XZG5wLiRv7_I/edit' target = '_blank'> 
              Download Resume
            </a>
           </div>
           
           {/* Sites I Used to Gather Social Media Images */}
           <script
            type="module"
            src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
           ></script>
           <script
            src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
           ></script>

        </div>
      </div>

      {/* My Profile Image */}
      <div className = 'home-img'>
        <img src = {Photo} alt = 'Photo'/>
      </div>

      {/* Small mouse icon at the bottom of the screen to help us move to the About section */}
      <div className = "absolute bottom-32 xs:bottom-1 w-full flex justify-center items-center">
        <a href = "#about">
          <div className = "w-[35px] h-[64px] rounded-3xl border-4 flex justify-center items-start p-2">         
            <motion.dev animate ={{ y: [0, 24, 0] }} 
                        transition ={{ duration: 1.5, repeat: Infinity, repeatType: 'loop'}} 
                        className = 'w-3 h-3 rounded-full bg-white mb-1' 
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero