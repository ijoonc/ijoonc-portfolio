import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";


/**
 * 
 * This is the last section of my website (Contacts feature so that recruiters or viewers can contact me
 * through a web form.)
 * 
 **/
const Contact = () => { 
  const formRef = useRef();

  // Initialize each segment to an empty string
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false);

  // Hold the string to whatever the user typed in
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Using emailjs to handle email requests -- personal acc info is utilized here
    emailjs.send("service_vug3hyu", "template_6dz68aq", 
                 {from_name: form.name, to_name: "Isaac",
                  from_email: form.email, to_email: "chungisaac1010@gmail.com",
                  message: form.message},
                  "tFsuWXRR5v2WQ_NAy")
    
    // This is the response the user receives after sending an email to me!
    .then(() => {
      setLoading(false),
      alert("Thank you for your message! I will get back to you as soon as possible."),
      setForm({ name: '', email: '', message: '' }, 
              (error) => { setLoading(false) 
                           console.log(error);
                           alert("Oops! Something went wrong...") })
    })
  }

  return (
    
    // I want the contact form to slide in from the left
    <div className = "xl:mt-12 flex xl:flex-row flex-col-reverse gap-8 overflow-hidden">
      <motion.div variants = {slideIn('left', 'tween', 0.2, 1)}
                  className = 'flex-[0.75] blue-bg p-8 rounded-2xl extend-width'>

        <p className = {styles.sectionSubText}>Get In Touch</p>
        <h3 className = {styles.sectionHeadText}>Contact</h3>

        {/* Your Name Section */}
        <form ref={formRef}
              onSubmit = {handleSubmit}
              className = 'mt-12 flex flex-col gap-8'>
          <label className = 'flex flex-col'>
            <span className = 'text-white font-medium mb-4'>Your Name</span>
            <input type = "text" name = "name" value = {form.name} 
                   onChange = {handleChange} placeholder = "What's your name?"
                   className = 'blue-subtext py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'>
            </input>
          </label>

          {/* Your Email Section */}
          <label className = 'flex flex-col'>
            <span className = 'text-white font-medium mb-4'>Your Email</span>
            <input type = "email" name = "email" value = {form.email} 
                   onChange = {handleChange} placeholder = "What's your email?"
                   className = 'blue-subtext py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'>
            </input>
          </label>

          {/* Your Message Section */}
          <label className = 'flex flex-col'>
            <span className = 'text-white font-medium mb-4'>Your Message</span>
            <textarea rows = "7" name = "message" value = {form.message} 
                      onChange = {handleChange} placeholder = "What would you like to say?"
                      className = 'blue-subtext py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'>
            </textarea> 
          </label>

          {/* The Send Button Section */}
          <button type = "submit" className = "blue-subtext py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
            {loading ? "Sending..." : "Send"}
          </button>

        </form>

      </motion.div>

      {/* I want to display the Earth model on the right side -- and also slide in from the right */}
      <motion.div variants = {slideIn('right', 'tween', 0.2, 1)}
                  className = 'xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, "contact")