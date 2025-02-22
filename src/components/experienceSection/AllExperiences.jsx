import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developments",
    company: "React.js,Vue.js,Angular ",
    date: "UI/UX Designs",
    responsibilities: [
     "Building dynamic and responsive web applications",
"Crafting intuitive UI/UX designs for enhanced user experiences",
"Developing and implementing reusable components for efficiency",
"Optimizing web application performance for speed and scalability",
"Innovating and generating new ideas to improve user interaction",
    ],
  },
  {
    job: "Backend",
    company: "Python ,Java,Node.Js",
    date: "Mongo,PostgreSQL",
    responsibilities: [
     "Building and managing server-side applications",
"Developing scalable APIs using Node.js and Express.js",
"Implementing secure and efficient database management",
"Ensuring smooth communication between the front-end and back-end",
    ],
  },
  {
    job: "Web Hosting",
    company: "Sprints",
    date: "2024 - Present",
    responsibilities: [
     "Providing web development training with JavaScript, React, and TailwindCSS",
"Guiding learners through real-world projects and coding challenges",
"Creating and refining course materials to ensure effective learning",
"Supporting students in understanding complex development concepts",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
