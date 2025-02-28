import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://lk.linkedin.com/company/neirah-tech-solution" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/neirahtech" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/neirah_tech/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
