import frontend from '../assets/skills/front-end.png';
import backtend from '../assets/skills/back-end.png';
import tools from '../assets/skills/tools.png';
import softskills from '../assets/skills/soft-skills.png';

export const SKILLS = [
    {
        tittle: "Frondend",
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