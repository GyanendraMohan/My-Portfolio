export const products = [
  {
    id: 1,
    img: require("./img/Project1.png"),
    link: "https://your-finance-tracker-link.com",
    title: "Fault tolerance classroom allocation system",
    desc: "Published research paper focusing on optimizing classroom allocation with fault tolerance mechanisms.",
  },
  {
    id: 2,
    img: require("./img/Project2.png"),
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3833703",
    title: "A comparative study on shortest path visualisation using AI",
    desc: "Comparative analysis of AI algorithms for visualizing shortest paths in complex networks.",
  },
];

export const researchInterests = [
  {
    id: 1,
    title: "Wi-Fi CSI–based Human Activity Recognition (HAR)",
    icon: "📡",
  },
  {
    id: 2,
    title: "Device-Free Wireless Sensing",
    icon: "📶",
  },
  {
    id: 3,
    title: "Signal Processing for Wireless Channels",
    icon: "📊",
  },
  {
    id: 4,
    title: "Machine Learning & Deep Learning",
    icon: "🧠",
  },
];

export const featuredProject = {
  title: "Wi-Fi Based Human Activity Recognition (HAR)",
  subtitle: "Applied Research Project | Ongoing",
  techStack: [
    "Python",
    "Intel 5300 NIC",
    "Signal Processing",
    "Machine Learning",
    "NumPy",
    "Pandas",
  ],
  problem:
    "Traditional vision-based HAR systems raise privacy concerns and require cameras. This research explores device-free human activity recognition using Wi-Fi Channel State Information (CSI) as a privacy-preserving alternative.",
  objective:
    "To analyze how human motion affects Wi-Fi signal propagation and to classify indoor activities by studying CSI amplitude and phase variations.",
  methodology: [
    "Collected CSI data using Intel 5300 Network Interface Card",
    "Extracted and analyzed amplitude and phase information",
    "Signal preprocessing techniques: Noise filtering, Phase sanitization, Dimensionality reduction",
  ],
  progress: [
    "Successfully captured CSI data for multiple indoor activities",
    "Observed distinct signal patterns corresponding to human motion",
  ],
  alignment:
    "This work aligns with Intel’s research in wireless sensing, smart environments, and edge intelligence.",
};

export const experience = [
  {
    id: 1,
    role: "Software Development Engineer",
    company: "HashedIn by Deloitte",
    period: "July 2022 – Feb 2024",
    desc: [
      "Built scalable REST APIs and dashboards handling real-time industrial data",
      "Led development of AI-based document classification system, reducing manual effort by 70%",
      "Developed Smart Factory analytics dashboards, monitoring 100+ manufacturing units",
      "Applied data engineering and analytics concepts used in research pipelines",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "M.Tech – Data Analytics",
    institution: "Dr. B. R. Ambedkar NIT Jalandhar",
    focus: "Focus: Data Analytics, ML, Research Methodology",
  },
  {
    id: 2,
    degree: "B.Tech – CSE (Big Data)",
    institution: "UPES Dehradun",
    focus: "Strong foundation in data engineering and analytics",
  },
];

export const certifications = [
  "Supervised Machine Learning – DeepLearning.AI",
  "AWS Certified Cloud Practitioner",
  "Top Performer – Data Engineering Track (HashedIn)",
];

export const skills = {
  programming: [
    "Python",
    "Java",
    "JavaScript",
    "SQL",
    "NumPy",
    "Pandas",
    "ML libraries",
  ],
  research: [
    "Signal Processing",
    "Time-Series Analysis",
    "Machine Learning",
    "Data Analysis & Visualization",
  ],
  systems: [
    "Node.js",
    "Spring Boot",
    "MongoDB",
    "PostgreSQL",
    "Apache Spark",
    "Hadoop",
    "AWS",
    "Git",
  ],
};
