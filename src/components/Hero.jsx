import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

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
           <h1 className = {`${styles.heroHeadText} text-white`}>Hello, I'm 
           <span className = 'text-[#00aae8]'> Isaac</span>!</h1 >

           <p className = {`mt-1 text-white-100`}>
           He/Him
           </p>

           <p className = {`${styles.heroSubText} mt-2 text-white-100`}>
            I am a <b className = 'text-[#007af4]'>Computer Science</b> & <b className = 'text-[#0cba00]'>Economics </b> 
            Student @ <b className = 'text-[#efcf00]'>Harvey Mudd College</b>, and I am also a 
            <b> Software Developer</b> and <b>Programmer</b>.
           </p>
        </div>

      </div>
    </section>
  )
}

export default Hero