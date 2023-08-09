import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";


/**
 * 
 * This SectionWrapper component helps format elements nicely and navigates each segment to its relative position.
 * i.e. clicking each component in the NavBar takes them to its respective positions on the website.
 * This is a function that outputs to another function HOC().
 * 
 **/
const SectionWrapper = (Component, idName) => function HOC() {
    return (
        <motion.section variants = {staggerContainer()}
                        initial = "hidden"
                        whileInView = "show"
                        viewport = {{ once: true, amount: 0.25 }}
                        className = {`${styles.padding} max-w-7xl mx-auto relative z-0`}>

            <span className = "hash-span" id = {idName}>
                &nbsp;
            </span>

            <Component />

        </motion.section>
    )
}

export default SectionWrapper