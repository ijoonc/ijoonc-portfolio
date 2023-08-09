import { Html } from "@react-three/drei";
import {
    research,
    developer,
    mentor,
    business,
    java,
    vs,
    python,
    cpp,
    js,
    git,
    react,
    pytorch,
    tensorflow,
    html,
    opencv,
    css,
    latex,
    rstudio,
    krauss,
    etsy,
    muddsub,
    grutor,
    makespp,
    gems,
    lace,
    particle_simulator,
    weather,
    snake,
    bets,
    project
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
      name: "JavaScript",
      icon: js,
    }, 
    {
      name: "React",
      icon: react,
    }, 
    {
      name: "HTML",
      icon: html,
    }, 
    {
      name: "CSS",
      icon: css,
    }, 
    {
      name: "Visual Studio",
      icon: vs,
    },
    {
      name: "Git",
      icon: git,
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
      name: "OpenCV",
      icon: opencv,
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
  
  const projects = [
    {
      name: "Particle Image Analyzer",
      description: 
        "ML Simulator that provides an efficient method to threshold images. This image processing simulator applies shading correction to particle images prior to threshold analysis and helps the model learn displacement patterns in different oils and mediums.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "green-text-gradient",
        },
        {
          name: "Computer Vision",
          color: "pink-text-gradient",
        },
        {
          name: "Image Processing",
          color: "blue-text-gradient",
        },
        {
          name: "Google Colab",
          color: "green-text-gradient",
        },
        {
          name: "Data Visualization",
          color: "pink-text-gradient",
        },
      ],
      image: particle_simulator,
      source_code_link: "https://github.com/ijoonc/Krauss-Lab-Tribology-Image-Processing-Simulator",
    },
    {
      name: "Weather App",
      description:
        "Web application that displays any particular city's temperature and weather forcasts of the user's choosing. This application uses extracted and processed weather information through the OpenWeatherMap API using JavaScript, React, Axios, and Tailwind.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Raect",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "Axios",
          color: "pink-text-gradient",
        },
        {
          name: "Visual Studio",
          color: "blue-text-gradient",
        },
        {
          name: "Web Scraping",
          color: "green-text-gradient",
        },
        {
          name: "API Utilization",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/ijoonc/Weather-App-Project",
    },
    {
      name: "Spampede Game",
      description:
        "A custom Snake Game with a unique user interface and backend functionality in Java, implemented using the Model-View-Controller software design pattern. This game also has an automated game mode that prompts the AI to find optimal paths using Breadth-First Search algorithms.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Eclipse",
          color: "green-text-gradient",
        },
        {
          name: "Algorithms",
          color: "pink-text-gradient",
        },
        {
          name: "AI",
          color: "blue-text-gradient",
        },
        {
          name: "Object-Oriented Programming",
          color: "green-text-gradient",
        },
        {
          name: "Data Structures",
          color: "pink-text-gradient",
        },
        {
          name: "Software Development",
          color: "blue-text-gradient",
        },
      ],
      image: snake,
      source_code_link: "https://github.com/ijoonc/Spampede-Custom-Snake-Game",
    },
    {
      name: "Sports Betting Model",
      description:
        "A Python linear regression model that optimizes users' profits from NBA bettings. It manipulates NBA API variables to test custom ML models that obtain and process statistics online through web scraping. Statistics are available through the Basketball-Reference website.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "green-text-gradient",
        },
        {
          name: "Visual Studio",
          color: "pink-text-gradient",
        },
        {
          name: "Web Scraping",
          color: "blue-text-gradient",
        },
        {
          name: "Data Visualization",
          color: "green-text-gradient",
        },
        {
          name: "API Utilization",
          color: "pink-text-gradient",
        },
        {
          name: "Linear Regression",
          color: "blue-text-gradient",
        },
      ],
      image: bets,
      source_code_link: "https://github.com/ijoonc/Python-Projects-July-to-August-2022/tree/main/NBA%20Betting%20Model%20Simulator",
    },
    {
      name: "Other Side Projects",
      description: 
        "Other side projects I have finished since 2022. Some of these projects include a Face Detection Simulator, Digit Identifier, and Word Analogy Simulator. All of these projects involve Machine Learning and some even utilize unique data structures such as Decision Trees and Random Forests.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "green-text-gradient",
        },
        {
          name: "Neural Nets",
          color: "pink-text-gradient",
        },
        {
          name: "Visual Studio",
          color: "blue-text-gradient",
        },
        {
          name: "Decision Trees",
          color: "green-text-gradient",
        },
        {
          name: "AI",
          color: "pink-text-gradient",
        },
        {
          name: "Computer Vision",
          color: "blue-text-gradient",
        },
        {
          name: "Data Visualization",
          color: "green-text-gradient",
        },
        {
          name: "NLP",
          color: "pink-text-gradient",
        },
      ],
      image: project,
      source_code_link: "https://github.com/ijoonc/Python-Projects-July-to-August-2022/tree/main",
    }
  ];
  
  export { services, technologies, experiences, projects };