import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2017
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="8" text="Years" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="32" text="Websites" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="8" text="WebApplications" />
      </div>
      <p className="text-center">
        With 8 years of experience building dynamic and user-friendly web
        applications,
        <p className="font-bold text-5xl text-lightBrown">Includes</p>
        <ExperienceInfo number="POS and Mobile Apps" text="" />
         
      </p>
       {/* <ExperienceInfo number="$100k" text="Max Budget" /> */}
    </div>
  );
};

export default ExperienceTopLeft;
