

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Omar Zoaiter",
  title: "Hi all, I'm Omar",
  subTitle: emoji(
    "Skilled platform engineer proficient in AWS and backend development. Experienced in designing, deploying,and maintaining scalable cloud-based infrastructures. Expertise includes architecting secure and efficientbackend systems, leveraging AWS services, and ensuring high availability and performance. Strong problem-solving and collaboration skills for delivering reliable and innovative solutions."
  ),
  resumeLink:"https://drive.google.com/file/d/1wIW-9aqWNL9ua69Z48IMHqvgx_duA0HI/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/omar-zr",
  linkedin: "https://www.linkedin.com/in/omar-zoaiter/",
  gmail: "omar.zr98@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/omar.zoetir",
  medium: "https://medium.com/@omar.zr98",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "FULL STACK & PLATFORM ENGINEER EXPLORING EVERY TECH STACK",
  skills: [
    emoji("⚡ Build and maintain robust backend services and APIs"),
    emoji("⚡ Integrate third-party services and APIs such as Firebase, AWS, and DigitalOcean"),
    emoji("⚡ Develop Progressive Web Applications (PWAs) using modern frameworks"),
    emoji("⚡ Optimize application performance and maintain security best practices"),
    emoji("⚡ Design and implement cloud infrastructure on platforms like AWS, Azure, and Google Cloud"),
    emoji("⚡ Ensure seamless deployment and scalability of applications with CI/CD pipelines"),
    emoji("⚡ Develop highly interactive front-end user interfaces for web and mobile applications"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Arab International University",
      logo: require("./assets/images/aiu.png"),
      subHeader: "Bachelor of Engineering (B.E.) in Informatics Engineering in Artificial intelligence",
      duration: "2015 - 2020",
      desc: "This program blends core informatics engineering with advanced AI studies, equipping graduates with expertise in machine learning, neural networks, and intelligent system design..",
      descBullets: [
        "Graduated with a 3.1/4 GPA.",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Solution Architicture.", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Cloud",
      progressPercentage: "75%"
    },
    {
      Stack: "FrontEnd",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "PLATFORM TEAM LEADER",
      company: "KASO",
      companylogo: require("./assets/images/kaso.jpg"),
      date: "Feb 2022 – Present",
      desc: ` Led platform and backend teams, aligning technical objectives and driving advancements in mobile and frontend development.`,
      descBullets: [
        "Deployed and managed continuous integration and delivery pipelines, ensuring efficient product and order information management.",
        "Designed and optimized scalable backend architectures to support enhanced application performance and reliability."
      ]
    },
    {
      role: "Senior Backend Engineer",
      company: "AlphaApps",
      companylogo: require("./assets/images/alpha.png"),
      date: "Nov 2019 – Feb 2022",
      desc: "Led the design, development, and maintenance of scalable backend systems using NestJS, ensuring robust and secure API integration. \n Deployed scalable backend infrastructure utilizing AWS services such as Lambda, API Gateway, Redis, and RDS"
    },
    {
      role: "Backend Engineer",
      company: "Mediecus",
      companylogo: require("./assets/images/medicus.png"),
      date: "Jan 2019 – Nov 2019",
      desc: "Developed and maintained secure backend systems with a focus on data security, integrity, and confidentiality. \n Designed and optimized SQL queries to enhance application performance and data management."
    },
    {
      role: "Full Stack Developer",
      company: "Black Box",
      companylogo: require("./assets/images/blackbox.png"),
      date: "Feb 2017 – Jan 2019",
      desc: "Designed and implemented end-to-end web applications, focusing on enhancing user experience and functionality.\n Collaborated with cross-functional teams, including product managers and UI/UX designers, to develop innovative and effective solutions."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/homewell.png"),
      projectName: "HomeWell",
      projectDesc: `AI-based platform that delivers a seamless, at-home primary care experience and on-site flow management.`,
      footerLink: [
        {
          name: "Visit Website",
          url: "https://medicus.ai/homewell/"
        }
      ]
    },
    {
      image: require("./assets/images/kasoApp.png"),
      projectName: "KASO APP",
      projectDesc: "Middle East’s #1 platform making food supply ordering simpler",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://kaso.ai/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [

    {
      title: "AWS Certified Solutions Architect – Associate",
      subtitle:
        "AWS Certified Solutions Architect – Associate: Design and Deploy Scalable, Highly Available Systems on AWS",
      image: require("./assets/images/awssa.png"),
      imageAlt: "AWS",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/15nFQf_lIe7kqt94CTDGD9IQBIvQZiX6t/view?usp=sharing"
        },
        {
          name: "Credly",
          url: "https://www.credly.com/badges/61e629b2-9f12-4eb8-a874-09bcfe70ba95/public_url"
        },
      ]
    },
    {
      title: "AWS Certified Cloud Practitione",
      subtitle:
        "AWS Certified Cloud Practitioner: Fundamental Knowledge of AWS Cloud Concepts and Services",
      image: require("./assets/images/awscp.png"),
      imageAlt: "AWS",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/15nFQf_lIe7kqt94CTDGD9IQBIvQZiX6t/view?usp=sharing"
        },
      ]
    },
    {
      title: "CCNA R&S",
      subtitle: "Certificate in Networking fundamentals",
      image: require("./assets/images/ccna.png"),
      imageAlt: "CCNA",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/15nFQf_lIe7kqt94CTDQBIvQZiX6t/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
   
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:"Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+971-508965871",
  email_address: "omar.zr98@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
