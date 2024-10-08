import frontend from '../assets/skills/front-end.png';
import backtend from '../assets/skills/back-end.png';
import tools from '../assets/skills/tools.png';
import softskills from '../assets/skills/soft-skills.png';

export const SKILLS = [
    {
        tittle: "Frontend",
        icon: frontend,
        skills: [
            { skill: "HTML5", percentage: "80%" },
            { skill: "CSS3 (Sass/SCSS)", percentage: "90%" },
            { skill: "JavaScript", percentage: "75%" },
            { skill: "React.Js", percentage: "80%" },
        ],
    },
    {
        tittle: "Backend",
        icon: backtend,
        skills: [
            { skill: "Node.js", percentage: "60%" },
            { skill: "Express.js", percentage: "60%" },
        ],
    },
    {
        tittle: "Tools",
        icon: tools,
        skills: [
            { skill: "Git and Github", percentage: "85%" },
            { skill: "Visual Studio Code", percentage: "75%" },
            { skill: "Webpack", percentage: "60%" },
            { skill: "Responsive Design", percentage: "70%" },
        ],
    },
    {
        tittle: "Soft Skills",
        icon: softskills,
        skills: [
            { skill: "Problem-Solving", percentage: "80%" },
            { skill: "Collaboration", percentage: "85%" },
            { skill: "Attention To Detail", percentage: "75%" },
            { skill: "Self-Learning", percentage: "80%" },
        ],
    },
]

export const    WORK_EXPERIENCE = [
    {
        tittle: "Software Developer Intern, Careerli, Remote",
        date: "September, 2023 - Present",
        responsibilities: [
            "Authored documentation for the application.",
            "Created additional resume templates with customizable background colors.",
            "Made front-end modifications and bug fixes to improve user experience.",
            // "Utilizing NestJs for backend and ReactJs with TypeScript for frontend development.",
            "Working with a team to develop and maintain the application.",
        ],
    },
    {
        tittle: "Volunteer Mentor, TOP Software Developers Nigeria, Remote",
        date: "April 2022 - Present",
        responsibilities: [
            "Providing mentorship in front-end and back-end technologies.",
            "Conducting comprehensive code reviews.",
            "Developed RESTful APIs with Express, connecting to MongoDB databases for dynamic web applications."
        ],
    },
    {
        tittle: "Agric Team Lead, Letshego MFB, Abuja",
        date: "July 2019 - April 2022t",
        responsibilities: [
            "Led multi-state agricultural projects impacting over 2000 farmers.",
            "Developed and maintained relationships with a diverse clientele, consistently meeting and exceeding targets for lending and portfolio quality.",
            "Contribute to evidence-based decision-making on product design and implementation, notably through making monitoring, review and evaluation findings.",
        ],
    },
]