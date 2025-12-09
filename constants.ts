import { Project, Experience, Education, SkillCategory, Achievement } from './types';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Kaushlendra Kumar Dwivedi",
  title: "Android & React Native Developer",
  email: "kaushlendradwivedi21@gmail.com",
  phone: "9898529305",
  github: "https://github.com/KAUSHDWI",
  linkedin: "https://www.linkedin.com/in/kaushlendra-kumar-dwivedi-7050422b1",
  profilePic: "https://github.com/KAUSHDWI.png", // Using GitHub avatar as default, can be replaced with local path
  about: "Enthusiastic and detail-oriented B.Tech CSE student with a strong foundation in Android (Kotlin) and React Native development. I enjoy turning ideas into functional apps with clean UI and efficient code. Looking forward to gaining industry experience and contributing to innovative software solutions.",
};

export const SOCIAL_LINKS = [
  { name: 'GitHub', url: PERSONAL_INFO.github, icon: Github },
  { name: 'LinkedIn', url: PERSONAL_INFO.linkedin, icon: Linkedin },
  { name: 'Email', url: `mailto:${PERSONAL_INFO.email}`, icon: Mail },
];

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "Kotlin"]
  },
  {
    title: "Frameworks & Tools",
    skills: ["React Native", "Expo", "Jetpack Compose", "Android Studio", "VS Code", "Git", "GitHub"]
  },
  {
    title: "Backend & Cloud",
    skills: ["Firebase", "Appwrite", "Retrofit", "RESTful APIs"]
  },
  {
    title: "Core Concepts",
    skills: ["OOP", "Data Structures & Algorithms", "MVVM Architecture"]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: "ApexPlanet Software Pvt. Ltd.",
    role: "App Development Intern",
    duration: "Sept 2025 - Present", // Keeping resume date, though likely implies 2024 or future start
    points: [
      "Worked on developing Android applications using Kotlin and React Native.",
      "Built and tested core features such as user authentication, navigation, and data storage using Firebase and Appwrite.",
      "Improved app performance and implemented modern UI components with Jetpack Compose.",
      "Collaborated in debugging, UI design enhancement, and API integration tasks.",
      "Successfully completed the internship with certification (Certificate ID: APSPL2519618)."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "IILM University, Greater Noida",
    year: "Expected 2027",
    details: "CGPA: 9.1 / 10 (Till 2nd Year)"
  },
  {
    degree: "Senior Secondary (Class XII)",
    institution: "CBSE Board",
    year: "2023"
  },
  {
    degree: "Secondary (Class X)",
    institution: "CBSE Board",
    year: "2021"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Expense Tracker App",
    year: "2025",
    tech: ["React Native", "AsyncStorage"],
    description: "Tracked daily expenses with add, delete, and total summary features.",
    category: "Mobile"
  },
  {
    title: "Chat Application",
    year: "2025",
    tech: ["Kotlin", "Appwrite"],
    description: "Real-time chat app with authentication and read receipts.",
    category: "Mobile"
  },
  {
    title: "Real-Time Weather App",
    year: "2025",
    tech: ["Kotlin", "MVVM", "Retrofit"],
    description: "Live weather updates using API integration.",
    category: "Mobile"
  },
  {
    title: "Shopping App",
    year: "2024",
    tech: ["Kotlin", "Firebase"],
    description: "E-commerce app with login, cart, and order features.",
    category: "Mobile"
  },
  {
    title: "Quiz Game App",
    year: "2024",
    tech: ["Kotlin", "Android Studio"],
    description: "Interactive quiz with score tracking and timer.",
    category: "Mobile"
  },
  {
    title: "React Native Mini Projects",
    year: "2025",
    tech: ["React Native", "Expo"],
    description: "Developed a login page, calculator, and to-do list with responsive UI.",
    category: "Mobile"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { title: "Solved 200+ coding problems on LeetCode and HackerRank." },
  { title: "Earned Oracle Cloud Infrastructure AI Foundations Associate Certification (2025)." },
  { title: "Actively participated in university-level hackathons and coding competitions." },
  { title: "Developed and deployed multiple Android and React Native applications independently." }
];