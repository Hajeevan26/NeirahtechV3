import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="Neirah.tech@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+94 76 004 1594" Image={FiPhone} />
      <SingleInfo text="4/1 245/12, M M Ideal Court, Hill House Garden Road, Dehiwala-Mount Lavinia 10350" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
