import { supportSkills } from "../sharedWork";

// Version-specific text for practical service roles. This version narrows the
// skill list and rewrites work details for less technical job applications.
export const servicePractical = {
  slug: "service-practical",
  fileName: "Jonathan-Service-Practical-CV.pdf",
  headline: "Service & Practical Support\n(Planning | Customer Contact | Structured Work | High Tempo)",
  about:
    "Reliable and service-oriented worker with experience from planning support, customer contact and structured support work in high-tempo environments. Used to coordinating appointments, following up details, solving practical problems and communicating clearly with customers and colleagues. Brings a calm, responsible and organized way of working.",
  work: [
    {
      title: "Planning Support",
      company: "Uniflex AB, Malmö",
      period: "Jun 2024 – Jul 2024",
      details: [
        "Created weekly planning schedules for 15+ technician teams replacing electric meters across Skåne region",
        "Booked 30+ customer appointments per week and coordinated logistics, achieving 98% on-time completion rate",
        "Provided clear information to customers and followed up after completed work",
        "Collaborated with customer service and technical teams to resolve scheduling issues within 24 hours",
      ],
    },
    {
      title: "1st Line Support Agent",
      company: "Poolia AB, Malmö (Atea)",
      period: "Aug 2022 – Jun 2024",
      details: [
        "Handled a high daily flow of support cases with clear communication by phone, email and remote tools",
        "Helped users with practical technical issues involving computers, printers, accounts and connectivity",
        "Documented cases carefully in ServiceNow and followed up until issues were solved or escalated",
        "Worked calmly and methodically during stressful periods with many incoming requests",
      ],
    },
    {
      title: "System Developer Intern",
      company: "Kodexe, Remote",
      period: "September 2025 – November 2025",
      details: [
        "Worked in a team environment with testing, documentation and problem-solving tasks",
        "Followed structured workflows using Azure DevOps and contributed carefully to shared work",
      ],
    },
  ],
  // Reuse the shared support skills, but show only the tools most relevant for
  // service/practical support applications.
  techSkills: supportSkills.filter((skill) =>
    ["ServiceNow", "Windows 10/11", "Microsoft 365", "Remote Desktop Tools", "Hardware Troubleshooting"].includes(skill.name)
  ),
  softSkills: [
    "Customer Service",
    "Communication",
    "Coordination",
    "Time management",
    "Problem-solving",
    "Reliability",
    "Teamwork",
  ],
};
