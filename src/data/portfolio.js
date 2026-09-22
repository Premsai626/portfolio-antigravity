export const portfolio = {
  name: "Prem Sai",
  role: "Full-Stack Developer & CS Undergrad",
  location: "Hyderabad, India",
  status: "Available for projects & internships",
  
  hero: {
    headline: "PREM SAI",
    role: "Full-Stack Developer & CS Undergrad",
    tagline: "I build responsive web apps, machine learning tools, and interactive software.",
    primaryAction: { label: "Explore Projects", href: "#projects" },
    secondaryAction: { label: "Get in Touch", href: "#contact" }
  },

  about: {
    bio: "Hey, I'm Prem — a Computer Science & Machine Learning undergrad at MLRIT. I love turning ideas into clean, functional code, whether that's building full-stack web platforms, experimenting with computer vision, or hacking on microcontroller hardware.",
    institution: "MLR Institute of Technology",
    degree: "B.Tech in Computer Science & Machine Learning (CSM)",
    focusAreas: [
      "Full-Stack Web Development",
      "Machine Learning & Computer Vision",
      "Embedded Hardware & IoT"
    ]
  },

  skills: {
    languages: ["C", "Python", "Java", "JavaScript"],
    web: ["HTML", "CSS", "React"],
    backend: ["Node.js", "Spring Boot"],
    database: ["MySQL", "MongoDB"],
    tools: ["Git", "GitHub", "AWS"]
  },

  projects: [
    {
      id: "orbit",
      featured: true,
      title: "ORBIT",
      category: "Automated Interview & Proctoring Platform",
      summary: "A full-stack platform designed to conduct automated interviews, evaluate candidate performance, and provide secure real-time webcam proctoring with automated anomaly detection.",
      tags: ["React", "FastAPI", "Python", "OpenCV", "Tailwind CSS"],
      links: {
        demo: "https://orbit-project-lake.vercel.app",
        github: "https://github.com/Premsai626"
      },
      highlights: [
        "Dynamic interview questioning adapting to candidate responses",
        "Automated webcam proctoring with real-time anomaly detection",
        "Structured scoring analytics and detailed candidate reports"
      ]
    },
    {
      id: "vibe-tune",
      featured: false,
      title: "VibeTune",
      category: "Emotion-Aware Music Studio",
      summary: "An interactive web audio experience featuring real-time facial expression tracking, 432Hz harmonic procedural drones, and Spotify mood playlist integration.",
      tags: ["React", "Web Audio API", "Face-API", "Spotify API", "Canvas"],
      links: {
        demo: "https://vibe-tune-lilac.vercel.app/",
        github: "https://github.com/Premsai626/VIBE_TUNE"
      },
      highlights: [
        "Webcam facial expression recognition adapting audio ambience dynamically",
        "Generative procedural soundscapes with 432Hz solfeggio harmonic frequencies",
        "Interactive 60FPS audio visualizers paired with curated mood playlists"
      ]
    },
    {
      id: "faq-chatbot",
      featured: false,
      title: "FAQ Chatbot",
      category: "Conversational NLP Assistant",
      summary: "A lightweight conversational assistant with contextual query answering, quick keyword matching, and fast response times.",
      tags: ["Python", "NLP", "FastAPI", "React"],
      links: {
        github: "https://github.com/Premsai626"
      }
    },
    {
      id: "smart-car",
      featured: false,
      title: "Smart Wi-Fi / Obstacle Avoiding Car",
      category: "Robotics & Embedded Systems",
      summary: "An Arduino/ESP-based obstacle avoidance robotic car with ultrasonic distance telemetry and Wi-Fi remote control.",
      tags: ["Embedded C", "Arduino", "Ultrasonic", "IoT"],
      links: {
        github: "https://github.com/Premsai626"
      }
    }
  ],

  achievements: [
    {
      id: "ach-1",
      title: "MLR Institute of Technology",
      category: "Education",
      description: "B.Tech in Computer Science & Machine Learning (CSM). Core focus on algorithms, data structures, and full-stack software development."
    },
    {
      id: "ach-2",
      title: "1st Place Winner — Web Dev Hackathon",
      category: "Hackathon",
      description: "Won 1st place in the Web Development Domain at Workshop Carnival 2.0 (CIE MLRIT) for best project build and UI execution."
    },
    {
      id: "ach-3",
      title: "AWS Cloud Trek Graduate",
      category: "Cloud",
      description: "Completed intensive 2-day hands-on cloud engineering bootcamp covering EC2, load balancing, and deployment pipelines."
    }
  ],

  certificates: [
    {
      id: "cert-aws-cloud-trek",
      title: "AWS Cloud Trek: Agentic Engineering",
      subtitle: "Move Beyond AI Coding to Agentic Engineering Bootcamp & Contest",
      category: "Cloud & AI",
      issuer: "AWS Student Builder Group & SCOPE Club (MLRIT)",
      issueDate: "Sep 11-12, 2026",
      type: "Certificate of Participation",
      credentialId: "AWS-SBG-MLRIT-2026",
      verificationUrl: null,
      image: "/certificates/images/aws-cloud-trek.png",
      pdf: "/certificates/aws-cloud-trek.pdf",
      description: "Participated in an intensive 2-day technical bootcamp and contest focusing on cloud architectures, EC2 instances, Application Load Balancers, and agentic workflows.",
      tags: ["AWS", "Cloud Computing", "Architecture", "DevOps"]
    },
    {
      id: "cert-python-essentials",
      title: "Python Essentials 1",
      subtitle: "Statement of Achievement — Student Level Credential",
      category: "Software & Languages",
      issuer: "Cisco Networking Academy & OpenEDG Python Institute",
      issueDate: "Apr 26, 2026",
      type: "Statement of Achievement",
      credentialId: "Cisco Verified Credential",
      verificationUrl: null,
      image: "/certificates/images/python-essentials-1.png",
      pdf: "/certificates/python-essentials-1.pdf",
      description: "Achieved student-level credential demonstrating core proficiency in Python 3, algorithmic problem solving, Python Standard Library, data structures, and foundational readiness for the PCEP qualification.",
      tags: ["Python 3", "Algorithms", "Software Engineering", "PCEP Prep"]
    },
    {
      id: "cert-c-essentials",
      title: "C Essentials 1",
      subtitle: "Offered through Cisco Networking Academy Program",
      category: "Software & Languages",
      issuer: "Cisco Networking Academy & C++ Institute / OpenEDG",
      issueDate: "Nov 22, 2025",
      type: "Certificate of Completion",
      credentialId: "Cisco / OpenEDG C-Prog",
      verificationUrl: null,
      image: "/certificates/images/c-essentials-1.png",
      pdf: "/certificates/c-essentials-1.pdf",
      description: "Mastered fundamental computer science concepts in C programming: structured control flow, memory pointers, modular functions, data types, and algorithmic problem formulation.",
      tags: ["C Programming", "Computer Science", "Memory & Pointers", "Algorithms"]
    },
    {
      id: "cert-autodesk-fusion",
      title: "Innovation Practices Using Autodesk - Fusion",
      subtitle: "Authorized Academic Partner Course (Design Labs)",
      category: "Design & CAD",
      issuer: "Autodesk Authorized Academic Partner",
      issueDate: "May 09, 2026",
      type: "Certificate of Completion",
      credentialId: "AP701986098757345814045",
      verificationUrl: null,
      image: "/certificates/images/autodesk-fusion.png",
      pdf: "/certificates/autodesk-fusion.pdf",
      description: "Completed 41-100 hours of specialized hands-on training in Autodesk Fusion Cloud product, exploring parametric 3D CAD modeling and rapid prototyping workflows.",
      tags: ["Autodesk Fusion", "Cloud CAD", "Parametric Modeling", "3D Design"]
    },
    {
      id: "cert-innovation-challenge",
      title: "Innovation Challenge 2026",
      subtitle: "MLR Centre for Innovation & Entrepreneurship (CIE)",
      category: "Competitions & Hackathons",
      issuer: "MLR Centre for Innovation & Entrepreneurship & IIC (Ministry of HRD)",
      issueDate: "Aug 01, 2026",
      type: "Certificate of Participation",
      credentialId: "CIE-MLRIT-IC-2026",
      verificationUrl: null,
      image: "/certificates/images/innovation-challenge.png",
      pdf: "/certificates/innovation-challenge.pdf",
      description: "Participated in the annual Innovation Challenge at MLRIT, pitching technological prototypes addressing real-world problem statements.",
      tags: ["Innovation", "Ideation", "Prototyping", "Hackathon"]
    },
    {
      id: "cert-web-dev-winner",
      title: "Winner — Web Development Domain",
      subtitle: "Workshop Carnival 2.0 Hackathon",
      category: "Competitions & Hackathons",
      issuer: "Centre for Innovation and Entrepreneurship (CIE MLRIT)",
      issueDate: "Apr 10-11, 2026",
      type: "1st Place Award",
      credentialId: "CIE-CARNIVAL2.0-WINNER",
      verificationUrl: null,
      image: "/certificates/images/web-dev-winner.png",
      pdf: "/certificates/web-dev-winner.pdf",
      description: "Awarded 1st place winner in the Web Development Domain at Workshop Carnival 2.0 for outstanding frontend architecture, responsiveness, and project execution.",
      tags: ["Web Development", "Hackathon Winner", "1st Place", "Full-Stack"]
    },
    {
      id: "cert-mongodb-basics",
      title: "MongoDB Basics for Students",
      subtitle: "Credly Verified Skill Credential",
      category: "Databases & Cloud",
      issuer: "MongoDB Inc & Credly",
      issueDate: "Aug 10, 2026",
      type: "Verified Skill Badge",
      credentialId: "83ea1088-ca55-45c4-983a-d5f87998e97c",
      verificationUrl: "https://www.credly.com/badges/83ea1088-ca55-45c4-983a-d5f87998e97c",
      image: "/certificates/images/mongodb-basics.png",
      pdf: "/certificates/mongodb-basics.pdf",
      description: "Demonstrated fundamental understanding of document database architectures, CRUD operations, indexing, and aggregation pipelines on MongoDB Atlas, verified through Credly.",
      tags: ["MongoDB", "NoSQL", "Credly Verified", "Database Architecture"]
    }
  ],

  github: {
    title: "Explore My Code on GitHub",
    description: "Open-source repositories, side projects, and algorithmic problem solving.",
    cta: "GitHub",
    url: "https://github.com/Premsai626"
  },

  contact: {
    heading: "LET'S BUILD\nSOMETHING REAL.",
    subtext: "Have an opportunity, idea, or just want to chat code?",
    cta: "Get in touch",
    email: "ippilipremsai12356@gmail.com"
  },

  links: {
    github: "https://github.com/Premsai626",
    linkedin: "https://www.linkedin.com/in/premsai02",
    instagram: "https://www.instagram.com/__premsai05_",
    email: "mailto:ippilipremsai12356@gmail.com",
    resume: "#"
  }
};
