// Shared work history used by multiple CV versions. Keeping it in one place
// avoids copying the same job entries into every version file.
export const standardWork = [
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
];

// Technical skills reused by the IT support and customer support CVs.
// Each skill can include an icon path from /public/icons.
export const supportSkills = [
  { name: "ServiceNow", level: "Intermediate", icon: "/icons/servicenow.png" },
  { name: "Windows 10/11", level: "Intermediate", icon: "/icons/windows-10-11.png" },
  { name: "Microsoft 365", level: "Intermediate", icon: "/icons/microsoft-365.png" },
  { name: "Active Directory", level: "Beginner", icon: "/icons/active-directory.png" },
  { name: "Remote Desktop Tools", level: "Intermediate", icon: "/icons/remote-desktop.png" },
  { name: "Network Troubleshooting", level: "Beginner", icon: "/icons/network-trbs.png" },
  { name: "Hardware Troubleshooting", level: "Intermediate", icon: "/icons/hardware-trbs.png" },
  { name: "SQL", level: "Beginner", icon: "/icons/sql-icon.png" },
  { name: "PowerShell", level: "Beginner", icon: "/icons/powershell.png" },
  { name: "Microsoft Azure", level: "Beginner", icon: "/icons/azure-icon.png" },
];
