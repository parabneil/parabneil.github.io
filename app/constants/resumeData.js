import { AppWindow, CodeXml, Image, PanelsTopLeft } from "lucide-react";
import {
    skillLogos,
    projectPreviews,
    SKILL_LEVELS,
    testimonialAvatars,
} from "./constants";

export const resumeData = {
    name: {
        firstName: "Narayan",
        lastName: "Parab",
    },

    jobTitle: [
        "Full Stack Developer",
        "Software Developer",
        "Frontend Developer",
        "ReactJS Developer",
        "Backend Developer",
        "Python Developer",
        "Graphic Designer",
    ],
    headline:
        "A Software Developer with experience specializing in user interface design, web application development, and continuous improvement. Proficient with HTML, CSS, Javascript, and React JS.",

    emailId: "parab.neil25@gmail.com",
    mobileNo: "+91 8898613030",
    location: "Maharashtra, India - 421 501",
    socialMediaLinks: [
        {
            name: "LinkedIn",
            icon: "",
            link: "https://www.linkedin.com/in/narayan-parab/",
        },
        { name: "Github", icon: "", link: "https://github.com/parabneil" },
        {
            name: "Instagram",
            icon: "",
            link: "https://www.instagram.com/parabneil/",
        },
        { name: "Portfolio", icon: "", link: "https://parabneil.github.io/" },
    ],

    professionalSummary:
        "Experienced Software Developer with 3+ years in full-stack web development, specializing in building scalable, high-performance applications with a strong focus on intuitive user interfaces and reusable component architecture. Proficient in JavaScript, React.js, Python, and Django, with a proven track record of delivering end-to-end solutions in fast-paced, collaborative environments. Adept at translating complex requirements into clean, maintainable code while prioritizing performance, usability, and scalability. Driven by a passion for clean architecture, continuous learning, and enhancing user experiences.",

    skills: [
        {
            skillName: "HTML5",
            skillLogo: skillLogos.htmlLogo,
            skillCategory: "Frontend",
            skillLevel: SKILL_LEVELS["ADV"],
        },
        {
            skillName: "CSS3",
            skillLogo: skillLogos.cssLogo,
            skillCategory: "Frontend",
            skillLevel: SKILL_LEVELS["ADV"],
        },
        {
            skillName: "JavaScript",
            skillLogo: skillLogos.jsLogo,
            skillCategory: "Frontend",
            skillLevel: SKILL_LEVELS["ADV"],
        },
        {
            skillName: "ReactJS",
            skillLogo: skillLogos.reactLogo,
            skillCategory: "Frontend",
            skillLevel: SKILL_LEVELS["INT"],
        },
        {
            skillName: "Redux",
            skillLogo: skillLogos.reduxLogo,
            skillCategory: "Frontend",
            skillLevel: SKILL_LEVELS["BEG"],
        },
        {
            skillName: "TailwindCSS",
            skillLogo: skillLogos.tailwindLogo,
            skillCategory: "Frontend",
            skillLevel: SKILL_LEVELS["BEG"],
        },
        {
            skillName: "Material UI",
            skillLogo: skillLogos.muiLogo,
            skillCategory: "Frontend",
            skillLevel: SKILL_LEVELS["ADV"],
        },
        {
            skillName: "NextJS",
            skillLogo: skillLogos.nextjsLogo,
            skillCategory: "Frontend",
            skillLevel: SKILL_LEVELS["BEG"],
        },

        {
            skillName: "Python",
            skillLogo: skillLogos.pyLogo,
            skillCategory: "Backend",
            skillLevel: SKILL_LEVELS["INT"],
        },
        {
            skillName: "Django",
            skillLogo: skillLogos.djangoLogo,
            skillCategory: "Backend",
            skillLevel: SKILL_LEVELS["INT"],
        },
        {
            skillName: "Express.js",
            skillLogo: skillLogos.expressLogo,
            skillCategory: "Backend",
            skillLevel: SKILL_LEVELS["BEG"],
        },
        {
            skillName: "Celery",
            skillLogo: skillLogos.celeryLogo,
            skillCategory: "Backend",
            skillLevel: SKILL_LEVELS["INT"],
        },
        {
            skillName: "Redis",
            skillLogo: skillLogos.redisLogo,
            skillCategory: "Backend",
            skillLevel: SKILL_LEVELS["INT"],
        },
        {
            skillName: "PostgreSQL",
            skillLogo: skillLogos.postgresLogo,
            skillCategory: "Databases",
            skillLevel: SKILL_LEVELS["INT"],
        },
        {
            skillName: "MySQL",
            skillLogo: skillLogos.mysqlLogo,
            skillCategory: "Databases",
            skillLevel: SKILL_LEVELS["INT"],
        },
        {
            skillName: "MongoDB",
            skillLogo: skillLogos.mongodbLogo,
            skillCategory: "Databases",
            skillLevel: SKILL_LEVELS["BEG"],
        },

        {
            skillName: "Docker",
            skillLogo: skillLogos.dockerLogo,
            skillCategory: "Cloud & DevOps",
            skillLevel: SKILL_LEVELS["INT"],
        },
        {
            skillName: "AWS",
            skillLogo: skillLogos.awsLogo,
            skillCategory: "Cloud & DevOps",
            skillLevel: SKILL_LEVELS["INT"],
        },
        {
            skillName: "GitHub Actions",
            skillLogo: skillLogos.ghactionsLogo,
            skillCategory: "Cloud & DevOps",
            skillLevel: SKILL_LEVELS["INT"],
        },
        {
            skillName: "Jenkins",
            skillLogo: skillLogos.jenkinsLogo,
            skillCategory: "Cloud & DevOps",
            skillLevel: SKILL_LEVELS["BEG"],
        },
        {
            skillName: "Vercel",
            skillLogo: skillLogos.vercelLogo,
            skillCategory: "Cloud & DevOps",
            skillLevel: SKILL_LEVELS["BEG"],
        },

        {
            skillName: "Git",
            skillLogo: skillLogos.gitLogo,
            skillCategory: "Development Tools",
            skillLevel: SKILL_LEVELS["INT"],
        },
        {
            skillName: "Postman",
            skillLogo: skillLogos.postmanLogo,
            skillCategory: "Development Tools",
            skillLevel: SKILL_LEVELS["INT"],
        },
        {
            skillName: "VS Code",
            skillLogo: skillLogos.vscodeLogo,
            skillCategory: "Development Tools",
            skillLevel: SKILL_LEVELS["ADV"],
        },
        {
            skillName: "Figma",
            skillLogo: skillLogos.figmaLogo,
            skillCategory: "Development Tools",
            skillLevel: SKILL_LEVELS["BEG"],
        },
        {
            skillName: "FileZilla",
            skillLogo: skillLogos.filezillaLogo,
            skillCategory: "Development Tools",
            skillLevel: SKILL_LEVELS["INT"],
        },
        {
            skillName: "Swagger",
            skillLogo: skillLogos.swaggerLogo,
            skillCategory: "Development Tools",
            skillLevel: SKILL_LEVELS["BEG"],
        },
        {
            skillName: "Webpack",
            skillLogo: skillLogos.webpackLogo,
            skillCategory: "Development Tools",
            skillLevel: SKILL_LEVELS["BEG"],
        },
        {
            skillName: "Vite",
            skillLogo: skillLogos.viteLogo,
            skillCategory: "Development Tools",
            skillLevel: SKILL_LEVELS["BEG"],
        },

        {
            skillName: "Collaboration",
            skillLogo: skillLogos.collaboration,
            skillCategory: "Soft Skills",
            skillLevel: SKILL_LEVELS["ADV"],
        },
        {
            skillName: "Communication",
            skillLogo: skillLogos.communication,
            skillCategory: "Soft Skills",
            skillLevel: SKILL_LEVELS["ADV"],
        },
        {
            skillName: "Problem Solving",
            skillLogo: skillLogos.problemSolving,
            skillCategory: "Soft Skills",
            skillLevel: SKILL_LEVELS["ADV"],
        },
        {
            skillName: "Adaptability",
            skillLogo: skillLogos.adaptability,
            skillCategory: "Soft Skills",
            skillLevel: SKILL_LEVELS["ADV"],
        },
        {
            skillName: "Critical Thinking",
            skillLogo: skillLogos.criticalThinking,
            skillCategory: "Soft Skills",
            skillLevel: SKILL_LEVELS["ADV"],
        },
        {
            skillName: "Proactive Mindset",
            skillLogo: skillLogos.proactiveMindset,
            skillCategory: "Soft Skills",
            skillLevel: SKILL_LEVELS["ADV"],
        },
    ],

    workExperience: [
        {
            jobTitle: "Software Developer",
            companyName: "Teknobuilt",
            companyLogo: "",
            companyLocation: "Vashi, Navi Mumbai",
            employmentType: "Full-Time",
            startDate: "2024-04-01",
            endDate: "2025-09-30",
            isCurrent: false,
            responsibilities: [
                "Designed, developed, and deployed full-stack features with a strong emphasis on user experience, performance, and maintainability.",
                "Led the creation and maintenance of a reusable React component library, standardizing UI patterns across multiple projects and improving development efficiency.",
                "Collaborated closely with product managers, UI/UX designers, and QA teams to deliver high-quality, production-ready features on schedule.",
                "Managed branching strategies, pull requests, and codebase health using Git/GitHub, ensuring clean and traceable version histories.",
            ],
            techStack: [],
        },
        {
            jobTitle: "Associate Software Developer",
            companyName: "Teknobuilt",
            companyLogo: "",
            companyLocation: "Vashi, Navi Mumbai",
            employmentType: "Full-Time",
            startDate: "2022-06-27",
            endDate: "2024-03-31",
            isCurrent: false,
            responsibilities: [
                "Contributed to the development of full-stack features for enterprise-grade web applications using React.js, Python, and Django.",
                "Supported the engineering team in building scalable modules and enhancing system performance.",
                "Assisted in version control and collaborative development using Git and GitHub.",
                "Participated in code reviews and sprint planning, ensuring alignment with project requirements and timelines.",
            ],
            techStack: [],
        },
        {
            jobTitle: "Graphic Designer",
            companyName: "Ornamax Web Solutions",
            companyLogo: "",
            companyLocation: "Ambernath, Thane",
            employmentType: "Full-Time",
            startDate: "2019-04-01",
            endDate: "2022-06-26",
            isCurrent: false,
            responsibilities: [],
            techStack: [],
        },
        {
            jobTitle: "Content Writer",
            companyName: "Ornamax Web Solutions",
            companyLogo: "",
            companyLocation: "Ambernath, Thane",
            employmentType: "Full-Time",
            startDate: "2017-04-01",
            endDate: "2019-03-31",
            isCurrent: false,
            responsibilities: [],
            techStack: [],
        },
    ],

    projects: [
        {
            title: "URL Shortener",
            logo: "", // Add path to logo if available
            previewUrls: [projectPreviews.urlShortnerPreview],
            role: "Full Stack Developer",
            description:
                "A high-performance utility to transform long URLs into manageable links, featuring click analytics and custom slugs.",
            features: [
                "Custom short-link generation",
                "Real-time click tracking and analytics",
                "QR code generation for shortened links",
            ],
            techStack: ["React JS", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
            demoLink: "https://url-shortner-eight-pi.vercel.app/",
        },
        {
            title: "AI Powered Resume Builder",
            logo: "",
            previewUrls: [projectPreviews.aiResumeBuilderPreview],
            role: "Full Stack Developer",
            description:
                "An intelligent platform that leverages AI to help users draft professional resumes with real-time content suggestions.",
            features: [
                "AI-driven bullet point suggestions",
                "Live PDF preview and export",
                "Multiple professional template selection",
            ],
            techStack: ["React JS", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Google Gemini API"],
            demoLink: "https://ai-resume-builder-gray-iota.vercel.app/",
        },
        {
            title: "Vastra - Ecommerce Apparel Store",
            logo: "",
            previewUrls: [projectPreviews.eCommerceStorePreview],
            role: "Full Stack Developer",
            description:
                "A premium fashion e-commerce experience featuring seamless product discovery, cart management, and secure checkout.",
            features: [
                "Advanced product filtering and search",
                "Persistent shopping cart functionality",
                "Secure payment gateway integration",
            ],
            techStack: ["React JS", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Stripe API", "Razorpay API"],
            demoLink: "https://vastra-ecommerce-store.vercel.app/",
        },
        {
            title: "Cricket Scoreboard",
            logo: "",
            previewUrls: [projectPreviews.cricketScorerAppPreview],
            role: "Frontend Developer",
            description:
                "A live scoreboard web app for cricket matches where users can input team/players and track the score live.",
            features: [
                "Create teams and players",
                "Update live scores and overs",
                "Display scoreboard summary",
            ],
            techStack: ["React JS", "JavaScript", "HTML", "CSS", "Vercel"],
            demoLink: "https://cricket-scoreboard-virid.vercel.app/",
        },
        {
            title: "Pokedex App",
            logo: "",
            previewUrls: [projectPreviews.pokedexPreview],
            role: "Frontend Developer",
            description:
                "A Pokédex style app for browsing Pokémon data (search by name/id) via a Pokémon API, built as a modern UI frontend.",
            features: [
                "Search Pokémon by name or ID",
                "Display Pokémon details (image, stats, types)",
                "Responsive interface",
            ],
            techStack: ["React JS", "JavaScript", "HTML", "CSS", "Vercel"],
            demoLink: "https://pokedex-app-mu-eight.vercel.app/",
        },
        {
            title: "Weather App",
            logo: "",
            previewUrls: [projectPreviews.weatherAppPreview],
            role: "Frontend Developer",
            description:
                "A weather information web app that fetches current weather and possibly forecast for searched locations via a weather API.",
            features: [
                "Search for weather by city",
                "Display current temperature, humidity, wind, etc",
                "Responsive design",
            ],
            techStack: ["React JS", "JavaScript", "HTML", "CSS", "Vercel"],
            demoLink: "https://weather-app-eight-delta-38.vercel.app/",
        },
        {
            title: "Meal Finder",
            logo: "",
            previewUrls: [projectPreviews.mealFinderPreview],
            role: "Frontend Developer",
            description:
                "A recipe search web app allowing users to find meals (by name, random etc) using an external meals API.",
            features: [
                "Search for meals by name",
                "Get a random meal suggestion",
                "Display meal details including image and instructions",
            ],
            techStack: ["React JS", "JavaScript", "HTML", "CSS", "Github Actions"],
            demoLink: "https://meal-finder-ten-tau.vercel.app/",
        },
        {
            title: "Todo List Manager",
            logo: "",
            previewUrls: [projectPreviews.todoListAppPreview],
            role: "Frontend Developer",
            description:
                "A simple clone of the Todoist-style task manager built with React.",
            features: [
                "Add, edit and delete tasks",
                "Create and manage projects (folders) for tasks",
                "Responsive UI built with React",
                "Deployed live via GitHub Pages (see demo link)",
            ],
            techStack: ["React JS", "JavaScript", "HTML", "CSS", "Github Actions"],
            demoLink: "https://todo-list-app-zeta-inky.vercel.app/",
        },
        {
            title: "Smart Calculator App",
            logo: "",
            previewUrls: [projectPreviews.smartCalculatorPreview],
            role: "Frontend Developer",
            description:
                "A web-based calculator application built to perform basic arithmetic operations with a clean UI.",
            features: [
                "Basic arithmetic operations (add, subtract, multiply, divide)",
                "Responsive UI",
                "Clear / reset functionality",
            ],
            techStack: ["React JS", "JavaScript", "HTML", "CSS", "Vercel"],
            demoLink: "https://calculator-app-one-weld.vercel.app/",
        },
    ],

    education: [
        {
            degree: "Bachelor of Science (B.Sc.) in Computer Science",
            institution: "University of Mumbai",
            location:
                "The East Kalyan Welfare Society's Model College of Science & Commerce, Kalyan (East), Thane, Maharashtra, India",
            startDate: "2014-06-01",
            endDate: "2017-04-30",
            score: "6.46",
        },
        {
            degree: "Higher Secondary Certificate (HSC) - Computer Science",
            institution:
                "Maharashtra State Board of Secondary & Higher Secondary Education",
            location:
                "The East Kalyan Welfare Society's Model College of Science & Commerce, Kalyan (East), Thane, Maharashtra, India",
            startDate: "2012-06-01",
            endDate: "2014-04-30",
            score: "59.23 %",
        },
        {
            degree: "Secondary School Certificate (SSC)",
            institution:
                "Maharashtra State Board of Secondary & Higher Secondary Education",
            location:
                "Sudhagad Education Society High School, Kalamboli, Navi Mumbai, Raigad, Maharashtra, India",
            startDate: "",
            endDate: "2012-04-01",
            score: "84.73 %",
        },
    ],

    certifications: [
        {
            name: "Full Stack Web Development",
            organization: "Newton School",
            issueDate: "2022-12-31",
            expiryDate: "",
            credentialId: "",
            credentialURL: "",
        },
        {
            name: "React (Basic)",
            organization: "HackerRank",
            issueDate: "2025-01-01",
            expiryDate: "",
            credentialId: "",
            credentialURL: "",
        },
        {
            name: "Fundamentals of HTML",
            organization: "Code360 by Coding Ninjas",
            issueDate: "2025-01-01",
            expiryDate: "",
            credentialId: "",
            credentialURL: "",
        },
        {
            name: "Fundamentals of CSS",
            organization: "Code360 by Coding Ninjas",
            issueDate: "2025-01-01",
            expiryDate: "",
            credentialId: "",
            credentialURL: "",
        },
        {
            name: "Basics of Javascript",
            organization: "Code360 by Coding Ninjas",
            issueDate: "2025-01-01",
            expiryDate: "",
            credentialId: "",
            credentialURL: "",
        },
        {
            name: "Basics of ReactJS",
            organization: "Code360 by Coding Ninjas",
            issueDate: "2025-01-01",
            expiryDate: "",
            credentialId: "",
            credentialURL: "",
        },
        {
            name: "Basics of Machine Learning",
            organization: "Code360 by Coding Ninjas",
            issueDate: "2025-01-01",
            expiryDate: "",
            credentialId: "",
            credentialURL: "",
        },
        {
            name: "ChatGPT",
            organization: "Code360 by Coding Ninjas",
            issueDate: "2025-01-01",
            expiryDate: "",
            credentialId: "",
            credentialURL: "",
        },
    ],

    achievements: [
        {
            title: "Employee of the Year",
            description: "Awarded for excellence in project execution",
            year: "2024",
        },
        {
            title: "Hackathon Winner",
            description: "Won 1st place among 200+ participants",
            year: "2023",
        },
    ],

    languages: [
        { language: "English", proficiency: "Professional" },
        { language: "Hindi", proficiency: "Professional" },
        { language: "Marathi", proficiency: "Native" },
        { language: "Konkani", proficiency: "Native" },
    ],

    interests: ["Football", "Open-source", "Travel", "Reading"],

    services: [
        {
            id: 1,
            icon: <PanelsTopLeft/>,
            title: "Frontend Developer",
            description:
                "I design and build responsive, high-performance user interfaces that deliver seamless digital experiences.",
            services: [
                "Developing modern, responsive UI with clean and scalable code.",
                "Creating intuitive UX interactions and animations.",
                "Enhancing brand presence through consistent visual design.",
                "Building design systems and interactive prototypes.",
            ],
        },
        {
            id: 2,
            icon: <CodeXml/>,
            title: "Backend Developer",
            description:
                "I build secure, reliable, and scalable backend systems that power digital products and business operations.",
            services: [
                "Developing RESTful and GraphQL APIs.",
                "Designing robust database architectures.",
                "Implementing authentication and security best practices.",
                "Optimizing server performance and system reliability.",
            ],
        },
        {
            id: 3,
            icon: <AppWindow/>,
            title: "Full-Stack Developer",
            description:
                "I create end-to-end digital solutions by combining modern frontend interfaces with powerful backend systems.",
            services: [
                "Building full-stack applications from concept to deployment.",
                "Integrating third-party services and APIs.",
                "Designing and developing scalable system architectures.",
                "Delivering continuous improvements and maintenance.",
            ],
        },
        {
            id: 4,
            icon: <Image/>,
            title: "Graphic Designer",
            description:
                "I create end-to-end digital solutions by combining modern frontend interfaces with powerful backend systems.",
            services: [
                "Building full-stack applications from concept to deployment.",
                "Integrating third-party services and APIs.",
                "Designing and developing scalable system architectures.",
                "Delivering continuous improvements and maintenance.",
            ],
        },
    ],

    testimonials: [
        {
            id: 1,
            name: "Rahul Naik",
            role: 'Technical Lead',
            description:
                "He is a powerhouse in the frontend ecosystem. His leadership in building our reusable React component library didn't just clean up our codebase—it cut our UI development time by nearly 30%. He writes code that lasts.",
        },
        {
            id: 2,
            name: "Pradeep Singh",
            role: 'Product Manager',
            description:
                "He is the definition of a 'reliable' developer. He has a keen ability to translate complex business requirements into high-performance features, consistently hitting production deadlines without compromising on quality.",
        },
        {
            id: 3,
            name: "Nilesh Galande",
            role: 'UI/UX Designer',
            description:
                "It’s rare to find a developer with his design intuition. Because of his Graphic Design background, he implements pixel-perfect layouts and smooth interactions that stay 100% true to the original vision.",
        },
              {
            id: 4,
            name: "Pradeep Maurya",
            role: 'Senior Full-Stack Developer',
            description:
"I’ve seen him grow from an Associate to a core contributor. His proficiency across the Django and React stack is impressive; he handles everything from complex API logic to state management with a proactive, 'can-do' attitude.",
        },
        {
            id: 5,
            name: "Akshay Bamane",
            role: 'QA Engineer',
            description:
                "His features are consistently the most stable in our sprints. He thinks through edge cases during the development phase, which led to a significant reduction in regression bugs for the modules he owned.",
        },
        {
            id: 6,
            name: "Ashik Kumar",
            role: 'AI Engineer',
            description:
                "He was instrumental in bridging the gap between our AI models and the end-user. His work on integrating AI-Powered APIs into seamless web interfaces showed a deep understanding of how to make AI accessible and responsive.",
        },
        {
            id: 7,
            name: "Aasif Dange",
            role: 'Peer Developer',
            description:
                "He is the teammate everyone wants. Whether it’s a difficult Git merge or a complex debugging session, his collaborative spirit and problem-solving mindset make the entire engineering team more effective.",
        },
        
    ],
};