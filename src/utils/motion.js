/**
 * 
 * Text Variant that gives a certain motion to texts such as the headers or introduction.
 * This version has a different y-position both when it is hidden and shown.
 * 
 **/
export const textVariant = (delay) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          delay,
        },
      },
    };
  };


/**
 * 
 * Text Variant that gives a certain motion to texts such as the headers or introduction.
 * This version also has a different y-position both when it is hidden and shown.
 * 
 **/
  export const textVariant2 = (delay) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: -30,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay,
        },
      },
    };
  };
  

/**
 * 
 * We want a body of text or object to gradually appear on the screen instead of appearing
 * instantly or during pre-loading.
 * 
 **/
  export const fadeIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
      },
      show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  

/**
 * 
 * We want to easily zoom in on a body of text or object -- although it is not generally used
 * in my website.
 * 
 **/
  export const zoomIn = (delay, duration) => {
    return {
      hidden: {
        scale: 0,
        opacity: 0,
      },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          type: "tween",
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
/**
 * 
 * We want a body of text or object to slide into the frame from a certain direction. The direction,
 * type of slide, a delay, and duration of the slide are chosen by the user.
 * 
 **/
  export const slideIn = (direction, type, delay, duration) => {
    return {
      hidden: {
        x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
        y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      },
      show: {
        x: 0,
        y: 0,
        transition: {
          type: type,
          delay: delay,
          duration: duration,
          ease: "easeOut",
        },
      },
    };
  };
  
  
/**
 * 
 * This staggerContainer componenet helps the SectionWrapper wrap each of its respective components easily.
 * 
 **/
  export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
      hidden: {},
      show: {
        transition: {
          staggerChildren: staggerChildren,
          delayChildren: delayChildren || 0,
        },
      },
    };
  };