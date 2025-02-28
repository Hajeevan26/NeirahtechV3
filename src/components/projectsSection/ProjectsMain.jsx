import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";



const projects = [
  {
    name: "Aqual Experts",
    year: "Mar2022",
    align: "right",
    image:"/images/Projects/aqua-experts.PNG",
    link: "https://aqua-experts.com",
  },
  {
    name: "Homacswiss",
    year: "Sept2022",
    align: "left",
    image: "/images/Projects/homacswiss.PNG",
    link: "https://Homacswiss.ch",
  },
  {
    name: "VARS Web Application",
    year: "Jan2023",
    align: "right",
    image: "/images/Projects/vars.PNG",
    link: "https://vars.neirahtech.com",
  },
  {
    name: "Ajimi Institute of Electronics",
    year: "May2023",
    align: "left",
    image: "/images/Projects/ajimi.PNG",
    link: "www.Ajimi.org",
  },
  {
    name: "Eazhilisai Institute of Music",
    year: "Jan2024",
    align: "right",
    image: "/images/website-img-3.jpg",
    link: "https://eazhisai.com",
  },
  {
    name: "D plus Landscaping",
    year: "Jan2025",
    align: "left",
    image: "/images/Projects/dplus.PNG",
    link: "https://dpluslandscaping.com",
  },
  {
    name: "KK99 Proline",
    year: "Jan2025",
    align: "right",
    image: "/images/Projects/kk99.PNG",
    link: "https://kk99proline.com",
  },
  {
    name: "Trinco Tools",
    year: "Feb2025",
    align: "left",
    image: "/images/Projects/trincotools.PNG",
    link: "https://trincotools.lk",
  },
  {
    name: "Thillaiyan Organics",
    year: "Feb2025",
    align: "right",
    image: "/images/Projects/thillaiyan.PNG",
    link: "https://thillaiyan.com",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
