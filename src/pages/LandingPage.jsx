import React from "react";
import HeroSlider from "../components/HeroSlider.jsx"; 
import AboutUs from "./AboutUs.jsx";
// import InfoCard from "../components/InfoCard";
// import Services from "./Services";
import Technologies from "./Technologies.jsx";
import FAQs from "./faq";
// import Contact from "./contact";
// import DoneProjects from "../components/doneProjects";
import InfoCard from "../components/InfoCard.jsx";
import {
  FaUsers,
  FaCalendarAlt,
  FaProjectDiagram,
  FaBuilding,
} from "react-icons/fa";

const LandingPage = () => {
  const cardData = [
    {
      icon: <FaUsers />,
      value: "26+",
      label: "Software Developers",
    },
    {
      icon: <FaCalendarAlt />,
      value: "2+",
      label: "Years in Business",
    },
    {
      icon: <FaProjectDiagram />,
      value: "100+",
      label: "Projects Delivered",
    },
    {
      icon: <FaBuilding />,
      value: "2",
      label: "Dev Centers",
    },
  ];

  return (
    <>
       <div id="home" className="relative w-full h-screen bg-cover bg-center bg-no-repeat">
        <HeroSlider />
      </div>
      <AboutUs id="about" />
      <InfoCard data={cardData} />
      {/* <Services id="services" /> */}
      <Technologies id="technologies" />
      {/* <DoneProjects id="projects" /> */}
      <FAQs id="faqs" />
      {/* <Contact id="contact" /> */}
      {/* ❌ Removed <Footer /> here */}
    </>
  );
};

export default LandingPage;
