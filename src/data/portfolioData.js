export const portfolioData = {
  personalInfo: {
    name: "Sonu Rajesh",
    tagline: "Engineering Intelligent Systems. Designing Human Experiences.",
    titles: [
      "AI & Data Science Engineer",
      "Human-Computer Interaction Enthusiast",
      "Business Analyst"
    ],
    email: "sonurajesh635@gmail.com",
    phone: "+91-7601892186",
    location: "Coimbatore, Tamil Nadu, India",
    github: "https://github.com/sonurajesh27",
    linkedin: "http://www.linkedin.com/in/sonu-rajesh-4a68b531a",
    resumeUrl: "/assets/SonuRajesh-Resume.pdf",
    paperUrl: "/assets/edusense-paper.pdf",
    profilePic: "/assets/sonu-profile.jpg",
    bio: "AI & Data Science Engineering student with hands-on experience in Generative AI, RAG pipelines, and human-centric software. I bridge the gap between machine intelligence, business analysis, and interactive user experience to construct accessible, secure, and data-driven systems.",
  },
  skills: [
    {
      category: "GenAI & Automation",
      items: [
        "RAG Pipelines",
        "LangChain",
        "Prompt Engineering",
        "Vector Databases (Chroma/FAISS)",
        "Agentic AI Systems"
      ]
    },
    {
      category: "Data Science & ML",
      items: [
        "Supervised & Unsupervised Learning",
        "Deep Learning (PyTorch/TensorFlow)",
        "Scikit-learn, Pandas & NumPy",
        "Model Evaluation & Optimization",
        "Data Structures & Algorithms"
      ]
    },
    {
      category: "Web & Fullstack",
      items: [
        "React.js & Vite",
        "Node.js & Express.js",
        "FastAPI",
        "Tailwind CSS & Vanilla CSS",
        "SQL, MySQL & MongoDB"
      ]
    },
    {
      category: "BA & HCI Systems",
      items: [
        "Human-Computer Interaction (HCI)",
        "UX Metrics & Usability Testing",
        "Agile, Scrum & Sprint Planning",
        "BRD & User Story Documentation",
        "Docker (Basics) & Git"
      ]
    }
  ],
  experience: [
    {
      role: "Business Analyst",
      company: "Akodefy InfoTech",
      location: "Coimbatore, India",
      period: "June 2026",
      type: "Internship",
      description: [
        "Gathered and analyzed complex business requirements by collaborating closely with clients and key stakeholders to deliver highly effective technical solutions.",
        "Prepared comprehensive Business Requirement Documents (BRDs), user stories, functional documentation, and process workflows to align development teams and support the software lifecycle.",
        "Facilitated daily stand-ups, sprint planning, backlog grooming, and requirement discussions within Agile/Scrum environments to ensure timely, high-quality deliverables."
      ]
    },
    {
      role: "Generative AI & Data Science Intern",
      company: "Zgrow Solutions",
      location: "Chennai, India",
      period: "June 2025",
      type: "Internship",
      description: [
        "Architected and deployed custom Generative AI applications utilizing Large Language Models (LLMs), RAG pipelines, and transformer-based frameworks.",
        "Orchestrated dataset preprocessing pipelines, developed custom ML/DL architectures, and trained models targeting commercial, real-world customer problems.",
        "Collaborated with cross-functional engineering teams to implement models and deploy robust FastAPI/Gradio microservices."
      ]
    }
  ],
  education: [
    {
      degree: "B.Tech in Artificial Intelligence and Data Science",
      institution: "Dr. N.G.P. Institute of Technology",
      location: "Coimbatore, India",
      period: "2023 – 2027",
      grade: "CGPA: 8.43 (Till Date)",
      highlights: [
        "Specialization in Human-Computer Interaction, Deep Learning, and Advanced ML systems.",
        "Co-author of an IEEE-format conference paper on assistive learning tools (submitted).",
        "Event coordinator for Prompt Forge & Paper Presentation."
      ]
    },
    {
      degree: "Higher Secondary School (HSC)",
      institution: "Thambu Higher Secondary School",
      location: "Coimbatore, India",
      period: "Passed in 2023",
      grade: "Score: 88.6%",
      highlights: ["Major in Physics, Chemistry, Mathematics, and Computer Science."]
    },
    {
      degree: "Secondary School Certificate (SSLC)",
      institution: "Thambu Higher Secondary School",
      location: "Coimbatore, India",
      period: "Passed in 2021",
      grade: "Score: 80%",
      highlights: ["Completed general academic board curriculum with distinction in Science."]
    }
  ],
  projects: [
    {
      id: "edusense",
      title: "EduSense: AI-Powered Multimodal Sign Language Platform",
      tagline: "Bridging the communication gap for specially-abled learners using computer vision.",
      problem: "Traditional classrooms present severe accessibility barriers for hearing, speech-impaired, and neurodivergent students, who struggle with spoken lectures, reading speed, and high-sensory distractions.",
      solution: "An all-in-one assistive platform combining real-time sign language-to-text translation (via computer vision), finger-guided reading with OCR, dyslexia-friendly formatting, and speech outputs.",
      features: [
        "Sign2Talk: Live gesture recognition webcam module tracking finger landmarks and hand orientation using computer vision.",
        "TouchRead: Interactive reading module using finger-tracking and OCR to highlight and read specific words aloud.",
        "Dyslexia & Autism Modules: Simplified layouts, text-to-sign visual animations, and structured low-sensory interactive games.",
        "Conference Paper Submission: Underpinned by a co-authored conference paper on multimodal assistive technology (submitted)."
      ],
      stack: ["React.js", "Vite", "TensorFlow.js", "HandPose", "FingerPose", "Tailwind CSS", "Tesseract.js", "SQLite"],
      challenges: "Running real-time hand-skeleton landmark detection directly in the browser was computationally intensive, causing frame drops on low-end school devices.",
      results: "Optimized model weight loading, reduced video feed resolution, and added web worker threads, cutting inference latency by 45% (down to sub-100ms response times) for smooth classroom execution.",
      github: "https://github.com/sonurajesh27/EduSense",
      liveDemo: "",
      paper: "/assets/edusense-paper.pdf",
      metrics: {
        labels: ["Baseline Latency", "Resolution Optimization", "Worker Offloading", "Model Quantization"],
        data: [280, 190, 120, 85],
        metricLabel: "Inference Latency (ms)"
      }
    },
    {
      id: "smartshield",
      title: "SmartShield URL: AI-Powered Secure URL Shortener",
      tagline: "Redefining link sharing with predictive real-time threat detection.",
      problem: "Standard URL shorteners obscure destination addresses, making users highly vulnerable to hidden phishing links, malware redirection, and malicious campaigns.",
      solution: "A secure MERN-stack URL management platform that uses an AI-powered analyzer to evaluate the safety, reputational risk, and threat profile of links before redirection.",
      features: [
        "Predictive Threat Scanning: Integrates Machine Learning models to score URL patterns and domain reputations.",
        "QR Code Generator: Renders secure dynamic QR codes with integrated security status indicators.",
        "Real-time Redirection Analytics: Dynamic visual dashboard rendering geolocation, device profile, and traffic volumes.",
        "Enterprise Security: Implements JSON Web Tokens (JWT), bcrypt.js hashing, and API rate-limiting layers."
      ],
      stack: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "Recharts", "Node.js", "Express.js", "MongoDB Atlas", "JWT"],
      challenges: "Asynchronous background threat intelligence checks delayed the URL creation flow, causing UI freeze frames during API handshakes.",
      results: "Implemented redis-backed background queuing and websocket status streams. Users get instant short link generation while security models process details in the background, showing real-time scanning checkpoints.",
      github: "https://github.com/sonurajesh27/SMARTSHIELD-URL",
      liveDemo: "",
      metrics: {
        labels: ["Malicious URLs Blocked", "Redirections Managed", "Active Users", "Security Scans"],
        data: [1200, 25000, 350, 4800],
        metricLabel: "Platform Volumetrics"
      }
    },
    {
      id: "campus-analyzer",
      title: "Smart Campus Analyzer",
      tagline: "Predictive student academic performance intervention platform.",
      problem: "Educational institutions struggle to identify at-risk students who need early support before midterm reviews, leading to higher dropout and failure rates.",
      solution: "A predictive analytics dashboard parsing student engagement metrics, quiz trends, and attendance data to flag at-risk profiles and suggest proactive teacher actions.",
      features: [
        "ML Intervention Engine: Supervised classifier scoring student risk boundaries based on historical academic datasets.",
        "Interactive Dashboards: Renders clear performance breakdowns and grade projections utilizing Streamlit.",
        "Early Intervention Triggers: Generates localized alerts indicating low-engagement areas (e.g., specific concepts or quizzes)."
      ],
      stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit", "Matplotlib", "Machine Learning"],
      challenges: "Handling class imbalance in student dataset (only 8% of students historically failed), which led standard ML models to overpredict passing grades.",
      results: "Utilized SMOTE (Synthetic Minority Over-sampling Technique) and optimized random forest classification, boosting prediction recall of at-risk students from 45% to 88%.",
      github: "https://github.com/sonurajesh27/smart-campus-analyzer",
      liveDemo: ""
    },
    {
      id: "agentic-advisor",
      title: "Agentic AI Data Usage Advisor",
      tagline: "LLM-powered code review and vector-based database queries optimizer.",
      problem: "Developers frequently write inefficient SQL/ORM database queries, introducing server latency and excessive compute bills.",
      solution: "An agentic assistant utilizing LLM-based static analysis and Retrieval-Augmented Generation (RAG) to inspect code and generate optimal SQL/indexing instructions.",
      features: [
        "RAG Index Optimization: Embeds database schemas using vector databases (Chroma/FAISS) to feed local query optimizers.",
        "Static Query Inspection: Automatically parses code repositories to detect unindexed queries or N+1 fetch bottlenecks.",
        "Interactive Gradio Console: Allows developers to copy-paste scripts and get side-by-side performance audits."
      ],
      stack: ["FastAPI", "Python", "Chroma/FAISS", "LangChain", "Gradio UI", "Vector Databases", "LLM Pipelines"],
      challenges: "Providing relevant query optimizations requires understanding the exact database database engine and indexing capabilities.",
      results: "Built a structured context injector that appends schema DDLs and engine versions directly to the LLM agent prompt, yielding 92% accurate optimization suggestions.",
      github: "https://github.com/sonurajesh27/agentic-ai-advisor",
      liveDemo: ""
    }
  ],
  certifications: [
    {
      title: "Introduction to HCI",
      provider: "NPTEL (Elite + Silver)",
      description: "Completed real-world HCI applications, interactive evaluations, and interface protocol designs."
    },
    {
      title: "Design and Implementation of Human Computer Interfaces",
      provider: "NPTEL (Elite)",
      description: "In-depth study of UX metrics, design thinking frameworks, accessibility guidelines (WCAG), and usability-driven UI design."
    },
    {
      title: "Business Analytics Course",
      provider: "MyCaptain",
      description: "Acquired core methodologies in business analytics, database schemas, and data-driven business decisions."
    },
    {
      title: "Data Analytics with Python",
      provider: "MyCaptain",
      description: "Practical modeling, exploratory data analysis (EDA), statistical testing, and predictive modeling using Python."
    },
    {
      title: "Data Visualisation: Empowering Business with Effective Insights",
      provider: "Forage (Bentley / MathWorks / MongoDB)",
      description: "Hands-on projects designing executive dashboards, translating raw datasets into actionable corporate insights."
    }
  ],
  achievements: [
    {
      title: "Conference Paper Submission",
      subtitle: "IEEE-format Conference Paper (Submitted)",
      description: "Co-authored and submitted research on 'EduSense: A Multimodal Learning Assistant for Specially-Abled Students' to the ICINVENTS-2025 Conference (Applied)."
    },
    {
      title: "Descience Club Hackathon Finalist",
      subtitle: "Hackathon Excellence",
      description: "Conceptualized and prototyped an interactive model, securing a finalist position among 100+ competing teams."
    },
    {
      title: "MSME 2024 Project Submission",
      subtitle: "Government Innovation Initiative",
      description: "Selected for submission at the national level for representing innovative student technology solutions."
    },
    {
      title: "Smart India Hackathon (SIH)",
      subtitle: "Submission Level",
      description: "Developed and submitted an IoT-based Blue Carbon conservation project workflow."
    }
  ]
};
