import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo  text={<a href="mailto:info@neirahtech.com">info@neirahtech.com</a>}  Image={HiOutlineMail} />
      <SingleInfo  text={<a href="tel:+94760041594">+94 76 004 1594</a>}  Image={FiPhone} />
      <SingleInfo text="4/1 245/12, M M Ideal Court, Hill House Garden Road, Dehiwala-Mount Lavinia 10350" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;

