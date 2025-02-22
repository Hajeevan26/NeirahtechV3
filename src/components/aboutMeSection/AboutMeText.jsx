import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Us</h2>
      <p class="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">
      "Neirah Tech Solution is a full-service technology partner specializing in delivering innovative and customized software solutions. Our expertise covers a wide range of services including software development, web design, UI/UX development, search engine optimization (SEO), digital marketing, and AI-powered solutions. We are dedicated to helping businesses thrive in the digital world by creating responsive, user-friendly websites that offer seamless user experiences. Our web design and UI/UX development teams focus on building intuitive, aesthetically pleasing designs that engage customers and drive conversions."
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          Our Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
