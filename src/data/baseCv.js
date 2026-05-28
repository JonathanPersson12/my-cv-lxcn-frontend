// Data in this file is shared by every CV version. Put information here when
// it should stay the same across job targets, such as contact details,
// education, languages, and default soft skills.
export const baseCv = {
  name: "Jonathan Angantyr Persson",
  contact: {
    email: "Jonathan03Persson@gmail.com",
    phone: "+46 73 728 58 16",
    github: "JonathanPersson12",
    linkedin: "jonathan-angantyr-persson",
  },
  education: [
    {
      title: "Web Development / System Development with AI",
      school: "Lexicon",
      period: "Februari 2025 – August 2025",
      details: [
        "Backend and frontend: C#, .NET, SQL, JavaScript, React, Tailwind and Bootstrap",
        "Moln & AI: Azure AI-tjänster, chattbots, datavisualisering med Python",
        "Metodik: Agile/Scrum, testmetodik, teknisk dokumentation",
      ],
    },
    {
      title: "Web Development 1, Distance Course",
      school: "Hermods",
      period: "June 2024 – November 2024",
      details: [
        "Web Development 1, 100 points",
        "Basic web development with HTML, CSS, JavaScript and WordPress",
      ],
    },
    {
      title: "Aesthetic Program, Game Graphics",
      school: "LBS Creative High School, Lund",
      period: "August 2019 – June 2022",
      details: ["Game graphics specialization in image and form, 3-year program"],
    },
  ],
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
