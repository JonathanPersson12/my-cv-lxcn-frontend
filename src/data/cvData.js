// ============================================
// TOGGLE BETWEEN VERSIONS HERE
// ============================================
const CV_VERSION = "IT_SUPPORT"; // Change to 'DEVELOPER' for developer version

// ============================================
// VERSION A: IT SUPPORT
// ============================================
const itSupportData = {
  about:
    "Passionate and reliable IT Support Specialist with 2+ years of experience resolving 40+ technical issues daily in fast-paced environments. Achieved 95% first-contact resolution rate through systematic troubleshooting and strong communication skills. Experienced with hardware, software, networking, and remote support tools including ServiceNow. Known for staying calm under pressure, learning quickly, and delivering exceptional user service in collaborative team settings. Currently expanding technical skills to better support modern web-based applications and cloud systems.",

  work: [
    {
      title: "System Developer Intern",
      company: "Kodexe, Remote",
      period: "September 2025 – November 2025",
      details: [
        "Collaborated with developers on fullstack web platform projects using C#, .NET, React, SQL and Umbraco CMS",
        "Assisted in debugging, testing, and deploying web applications to ensure quality and performance",
        "Participated in code reviews and team meetings following agile methodologies",
        "Worked with Azure DevOps for version control, project task management, and CI/CD pipelines",
        "Demonstrated strong technical problem-solving skills and ability to learn new technologies quickly",
      ],
    },
    {
      title: "Planning Support",
      company: "Uniflex AB, Malmö",
      period: "Jun 2024 – Jul 2024",
      details: [
        "Created weekly planning schedules for 15+ technician teams replacing electric meters across Skåne region",
        "Booked 30+ customer appointments per week and coordinated logistics, achieving 98% on-time completion rate",
        "Provided clear technical information to customers and ensured satisfaction with post-installation follow-ups",
        "Identified workflow bottlenecks and proposed improvements that reduced scheduling conflicts by 15%",
        "Collaborated closely with customer service and technical teams to resolve scheduling issues within 24 hours",
      ],
    },
    {
      title: "1st Line Support Agent",
      company: "Poolia AB, Malmö (Atea)",
      period: "Aug 2022 – Jun 2024",
      details: [
        "Resolved an average of 40+ IT support tickets daily across hardware, software, and networking issues, maintaining a 95% first-contact resolution rate",
        "Provided technical support for 500+ end users across multiple departments using remote desktop tools and ticketing systems.",
        "Diagnosed and resolved issues with Windows 10/11, Microsoft 365, printers, VPN connections, and network connectivity.",
        "Maintained detailed documentation in the ServiceNow ticketing system, ensuring consistent follow-up and knowledge sharing across the team.",
        "Collaborated with 2nd line support and vendors to resolve escalated cases, reducing average resolution time by 20%.",
        "Trained 3 new team members on troubleshooting procedures and support tools, contributing to team efficiency.",
        "Received consistently positive feedback for calm demeanor and clear communication during high-pressure situations, contributing to high user satisfaction.",
      ],
    },
  ],

  techSkills: [
    { name: "IT Support & Troubleshooting", level: "Intermediate", icon: null },
    {
      name: "ServiceNow",
      level: "Intermediate",
      icon: "/icons/servicenow.png",
    },
    {
      name: "Windows 10/11",
      level: "Intermediate",
      icon: "/icons/windows-10-11.png",
    },
    {
      name: "Microsoft 365",
      level: "Intermediate",
      icon: "/icons/microsoft-365.png",
    },
    {
      name: "Remote Desktop Tools",
      level: "Intermediate",
      icon: "/icons/remote-desktop.png",
    },
    {
      name: "Hardware Troubleshooting",
      level: "Intermediate",
      icon: "/icons/hardware-trbs.png",
    },
    {
      name: "Network Troubleshooting",
      level: "Beginner",
      icon: "/icons/network-trbs.png",
    },
    { name: "SQL", level: "Beginner", icon: "/icons/sql-icon.png" },
    // { name: "Git", level: "Intermediate", icon: "/icons/git-icon.png" },
    // { name: "GitHub", level: "Intermediate", icon: "/icons/github-icon.png" },
    { name: "PowerShell", level: "Beginner", icon: "/icons/powershell.png" },
    {
      name: "Active Directory",
      level: "Beginner",
      icon: "/icons/active-directory.png",
    },
    {
      name: "Cloud Fundamentals",
      level: "Beginner",
      icon: null,
    },
  ],
};

// ============================================
// VERSION B: JUNIOR DEVELOPER
// ============================================
const developerData = {
  about:
    "Motivated Junior Developer with hands-on experience building modern, responsive web applications using React, JavaScript, Tailwind CSS, and HTML/CSS. Currently completing Web Development and System Development program at Lexicon (graduation August 2025) with focus on fullstack development using C#, .NET, and React. Bringing 2+ years of IT support experience that provides strong technical foundation, systematic problem-solving skills, and deep understanding of user needs. Experienced working in fast-paced environments, collaborating in teams, and learning new technologies quickly. Seeking junior frontend or fullstack developer role in agile team environment.",

  projects: [
    {
      title: "Interactive CV Website",
      technologies: "React, Next.js, Tailwind CSS, JavaScript",
      period: "2024",
      details: [
        "Designed and developed responsive CV as single-page React application with modern UI components",
        "Implemented mobile-first design approach with Tailwind CSS utility classes for clean, professional aesthetic",
        "Deployed live website showcasing frontend development skills and attention to design detail",
        "GitHub: github.com/JonathanPersson12",
      ],
    },
    {
      title: "Todo List Application",
      technologies: "React, Tailwind CSS, JavaScript",
      period: "2024",
      details: [
        "Built task management app with create, edit, delete, and mark complete functionality",
        "Implemented browser local storage for data persistence across sessions",
        "Features responsive design and clean user interface with modern styling",
        "Demonstrates CRUD operations and state management with React hooks",
      ],
    },
    {
      title: "Weather Dashboard",
      technologies: "React, Tailwind CSS, REST API",
      period: "2024",
      details: [
        "Developed weather application using OpenWeatherMap API for real-time data",
        "Implemented location search and dynamic weather data display with error handling",
        "Created responsive layout with conditional rendering based on weather conditions",
        "Demonstrates API integration and asynchronous JavaScript proficiency",
      ],
    },
  ],

  work: [
    {
      title: "System Developer Intern",
      company: "Kodexe, Remote",
      period: "September 2025 – November 2025",
      details: [
        "Collaborated with developers on fullstack web platform projects using C#, .NET, React, SQL and Umbraco CMS",
        "Assisted in debugging, testing, and deploying web applications following best practices",
        "Participated in code reviews and sprint planning, gaining experience with agile development workflows",
        "Worked with Azure DevOps for version control, CI/CD pipelines, and project management",
        "Demonstrated ability to quickly learn new frameworks and contribute to production codebases",
      ],
    },
    {
      title: "Planning Support",
      company: "Uniflex AB, Malmö",
      period: "Jun 2024 – Jul 2024",
      details: [
        "Managed scheduling workflows and logistics coordination, strengthening project management and organizational skills",
        "Analyzed planning data to identify inefficiencies and propose systematic improvements",
        "Communicated technical requirements clearly to non-technical stakeholders",
        "Demonstrated adaptability by quickly learning new systems and processes in fast-paced environment",
      ],
    },
    {
      title: "1st Line Support Agent",
      company: "Poolia AB, Malmö (Atea)",
      period: "Aug 2022 – Jun 2024",
      details: [
        "Resolved 40+ daily technical tickets, developing strong systematic problem-solving and debugging skills applicable to software development",
        "Used scripting and remote tools to automate software installations and system configurations for 500+ users",
        "Collaborated with development teams to troubleshoot application issues and provide detailed bug reports with reproduction steps",
        "Maintained SQL database queries for user account management and reporting, building database proficiency",
        "Documented technical procedures and created knowledge base articles, demonstrating technical writing skills",
        "Gained deep understanding of user experience and accessibility needs through direct customer interaction",
      ],
    },
  ],

  techSkills: [
    { name: "HTML", level: "Intermediate", icon: "/icons/html-icon.png" },
    { name: "CSS", level: "Beginner", icon: "/icons/css-icon.png" },
    {
      name: "JavaScript",
      level: "Beginner",
      icon: "/icons/javascript-icon.png",
    },
    { name: "React", level: "Beginner", icon: "/icons/react-icon.png" },
    { name: "Next.js", level: "Beginner", icon: "/icons/nextjs-icon.png" },
    {
      name: "Tailwind",
      level: "Beginner",
      icon: "/icons/tailwindcss-icon.png",
    },
    { name: "C#", level: "Beginner", icon: "/icons/c-sharp-icon.png" },
    { name: "SQL", level: "Beginner", icon: "/icons/sql-icon.png" },
    { name: "Git", level: "Intermediate", icon: "/icons/git-icon.png" },
    { name: "GitHub", level: "Intermediate", icon: "/icons/github-icon.png" },
    // { name: "Bootstrap", level: "Beginner", icon: "/icons/bootstrap-icon.png" },
  ],
};

// ============================================
// EXPORT BASED ON VERSION
// ============================================
const selectedData = CV_VERSION === "DEVELOPER" ? developerData : itSupportData;

const cvData = {
  name: "Jonathan Angantyr Persson",
  about: selectedData.about,
  contact: {
    email: "Jonathan03Persson@gmail.com",
    phone: "+46 73 728 58 16",
    github: "JonathanPersson12",
    linkedin: "jonathan-angantyr-persson",
  },
  projects: selectedData.projects || null, // Projects only for developer version
  work: selectedData.work,
  education: [
    {
      title: "Web Development / System Developement with AI",
      school: "Lexicon",
      period: "Ongoing – expected completion: August 2025",
      details: [
        "Backend: C#, .NET, Entity Framework, LINQ, SQL, Azure DevOps (CI/CD), Flask/Django",
        "Frontend: HTML, CSS, JavaScript, TypeScript, React, Tailwind, Bootstrap",
        "Moln & AI: Azure AI-tjänster, chattbots, datavisualisering med Python",
        "Metodik: Agile/Scrum, testmetodik, teknisk dokumentation",
      ],
    },
    {
      title: "Web Development 1, Distance Course",
      school: "Hermods",
      period: "2024-06 – 2024-11",
      details: [
        "Web Development 1, 100 points",
        "The course covers basic web development and programming.",
        "It provides an introduction to HTML, CSS, and JavaScript.",
        "Students learn to create and design websites in WordPress.",
      ],
    },
    {
      title: "Aesthetic Program, Game Graphics",
      school: "LBS Creative High School, Lund",
      period: "2019-08 – 2022-06",
      details: [
        "Game graphics specialization in image and form, 3-year program",
      ],
    },
  ],
  techSkills: selectedData.techSkills,
  softSkills: [
    "Communication",
    "Problem-solving",
    "Teamwork",
    "Time management",
    "Adaptability",
    "Curious",
    "Customer Service",
  ],
  language: [
    { name: "Swedish", level: "Native", icon: "/icons/swedish-icon.png" },
    { name: "English", level: "Fluent", icon: "/icons/english-icon.png" },
    { name: "Spanish", level: "Beginner", icon: "/icons/spanish-icon.png" },
  ],
};

export default cvData;
