import {
    research,
    developer,
    mentor,
    business,
    java,
    vs,
    python,
    cpp,
    gc,
    git,
    jupyter,
    pytorch,
    tensorflow,
    numpy,
    opencv,
    scikit,
    latex,
    rstudio,
    krauss,
    etsy,
    muddsub,
    grutor,
    makespp,
    gems,
    lace,
    carrent,
    jobit,
    tripguide,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Research Intern",
      icon: research,
    },
    {
      title: "Software Developer",
      icon: developer,
    },
    {
      title: "Grader, Tutor, Mentor",
      icon: mentor,
    },
    {
      title: "Business Manager",
      icon: business,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "RStudio",
      icon: rstudio,
    }, 
    {
      name: "Visual Studio",
      icon: vs,
    },
    {
      name: "Google Colab",
      icon: gc,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Jupyter",
      icon: jupyter,
    },
    {
      name: "LaTeX",
      icon: latex,
    },
    {
      name: "PyTorch",
      icon: pytorch,
    },
    {
      name: "Tensorflow",
      icon: tensorflow,
    },
    {
      name: "NumPy",
      icon: numpy,
    },
    {
      name: "OpenCV",
      icon: opencv,
    },
    {
      name: "Scikit",
      icon: scikit,
    },
  ];
  
  const experiences = [
    {
      title: "Business Manager",
      company_name: "Etsy",
      icon: etsy,
      iconBg: "#eb6d20",
      date: "June 2020 - August 2020",
      points: [
        "Set up the online shop and managed it during the summer.",
        "Sold affordable, high-quality face masks and clothing for children and adults during the peak of the pandemic.",
        "Managed shipping, listings, branding, advertisements, and customers' requests for personal modifications on products.",
      ],
    },
    {
      title: "Lead Software Developer",
      company_name: "MakeSPP 2020 Hackathon",
      icon: makespp,
      iconBg: "#fff",
      date: "October 2020",
      points: [
        "Collaborated with three team members to create a College Preference Calculator in C++.",
        "Obtained user's financial background description, location preferences, and academic performance as input and our program generated a college recommendation as output.",
        "Spent 48 hours to create a fully operative system and presented our work at a regional conference."
      ]
    },
    {
      title: "Mentor",
      company_name: "Gateway for Exploring Mathematical Sciences (GEMS)",
      icon: gems,
      iconBg: "#ffffff",
      date: "October 2022 - May 2023",
      points: [
        "Guided fifty secondary students through workshops and activities to help them understand complex math concepts.",
        "Helped spark the interests and curiosity of young students by applying riveting math theories to scientific areas.",
        "Prompted students to ignite their curiosity for mathematical sciences so that one day, they can become proud, inspiring leaders in the STEM industry."
      ],
    },
    {
      title: "Research Intern",
      company_name: "Krauss Lab Tribology",
      icon: krauss,
      iconBg: "#BFE2FB",
      date: "October 2022 - May 2023",
      points: [
        "Worked with a research mentor and five team members to test the effectiveness of gas-phase synthesized graphene (GSG) as a lubricant.",
        "Developed Python ML models that quantify the separation and agglomeration of GSG particles in different oils and dispersant additives.",
        "Experimented with GSG and collected data to measure its friction, wear, and tear reducing properties and potential recyclability.",
        "Utilized OpenCV, Scikit-Image, and NumPy algorithms to process particles and analyze GSG's impact on prolonging the longevity of various machinery and metals.",
        "Developed an Image Processing slidedeck to present results at the STLE exhibition in Long Beach, CA."
      ],
    },
    {
      title: "Software Developer",
      company_name: "MuddSub - HMC RoboSub Team",
      icon: muddsub,
      iconBg: "#D3D7D9",
      date: "October 2022 - May 2023",
      points: [
        "Member of the MuddSub team: a group of ~120 STEM-focused individuals who collaboratively work together to create autonomous underwater vehicles.",
        "Worked with 3 team members to design an object navigation system through Python ML models, Kalman Filters, and Recurrent YOLO/DeepSORT algorithms using a custom COCO dataset.",
        "Combined computer vision, AI, and particle filter localization fundamentals to create a fully perceptual mechanism that can traverse through bodies of water and avoid obstacles in its path."
      ]
    },
    {
      title: "Research Intern",
      company_name: "Learning Agents in Complex Environments (LACE) Lab",
      icon: lace,
      iconBg: "#000000",
      date: "May 2023 - July 2023",
      points: [
        "Utilized Model-Based Reinforcement Learning (MBRL) principles to develop artificial agents that make optimal decisions in MinAtar and Atari2600 video game environments.",
        "Implemented and tested a Python NN framework that predicts appearing object (i.e. bullets appearing when the user or in-game agents click the shoot button) states in different display frames.",
        "Enhanced C++ Decision Tree predictions of appearing object states by designing simulated, predictive models.",
        "Provided a measure of the means and variances of appearing objects' positions to sample object states and indicate uncertainties in model predictions.",
        "Trained both methods to minimize loss and optimize AI performance in real-game scenarios."
      ]
    },
    {
      title: "Computer Science and Mathematics Grader and Tutor",
      company_name: "Harvey Mudd College",
      icon: grutor,
      iconBg: "#000000",
      date: "September 2022 - Present",
      points: [
        "Teach undergraduates Python, Java, and C++ fundamentals including data structures, OOP, Turing Machines, time and space complexities, and a plethora of efficient algorithms for real-world applications.",
        "Guide students to explore CS topics that will potentially prompt them to become future computer scientists.",
        "Grade CS development projects and technical assignments for students.",
        "Grade Linear Algebra assignments and projects involving matrix analysis, linear combinations, and regression."
      ]
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };