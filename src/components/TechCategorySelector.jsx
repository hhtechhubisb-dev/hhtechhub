import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaNodeJs, FaPython, FaJava, FaReact, FaVuejs, FaAngular, FaAws, FaDocker,
  FaGitAlt, FaServer, FaLaptopCode, FaMobileAlt, FaCloud, FaCodeBranch
} from "react-icons/fa";
import {
  SiNumpy, SiTensorflow, SiOpenai, SiKubernetes, SiSvelte, SiNextdotjs,
  SiFlutter, SiIonic, SiFirebase, SiHeroku, SiJenkins, SiTerraform
} from "react-icons/si";
import { MdComputer, MdOutlineDataObject } from "react-icons/md";
import { TbChartHistogram } from "react-icons/tb";
import Title from "./Title";

const techDetails = {
  "Machine Learning": {
    description: (
      <div className="text-white mt-4 text-justify text-center">
        Machine Learning turns businesses to automate tasks. Building intelligent chatbots or training custom ML models. We offer machine learning development services in Pakistan and worldwide, including predictive analytics and ML model development. Additionally, we also provide machine learning internships in Rawalpindi.
      </div>
    ),
    icon: <SiNumpy />,
  },
  "Deep Learning": {
    description: (
      <div className="text-white mt-4 text-justify text-center">
        We proudly offer Advanced Deep Learning Services in Pakistan. Our team at HH Tech Hub specializes in tools like (Tenserflow & PyTorch), building intelligent systems that mimic human brain functionality, enable your business to automate decision-making, and gain deep insights into data. Whether you're in healthcare, finance, or tech, we cover all businesses.
      </div>
    ),
    icon: <SiTensorflow />,
  },
  "Computer Vision": {
    description: (
      <div className="text-white mt-4 text-justify text-center">
        Bring your business to life with Computer Vision Consulting.At HH Tech Hub,we help you integrate advanced visual recognition technologies like Tenserflow,CUDA,Clarifai,YOLO and more to automate processes and provide valuable insights from images and video data. 
      </div>
    ),
    icon: <MdComputer />,
  },
  "Natural Language Processing": {
    description: (
      <div className="text-white mt-4 text-justify text-center">
        Bring your business to life with Computer Vision Consulting. At HH Tech Hub, we help you integrate advanced visual recognition technologies like Tenserflow, CUDA, Clarifai, YOLO, and more to automate processes and provide valuable insights from images and video data.
      </div>
    ),
    icon: <SiOpenai />,
  },
  "Predictive Analytics": {
    description: (
      <div className="text-white mt-4 text-justify text-center">
        Predict the future with Predictive Analytics Services at HH Tech Hub. We have hands-on experience on H2O.ai, IBM SPASS, SAS, and more to analyze data trends and make accurate predictions & decisions, optimize resources, and enhance profitability. Whether it's forecasting sales or anticipating customer behavior, our predictive analytics solutions cover you all.
      </div>
    ),
    icon: <TbChartHistogram />,
  },
  "Node.js": {
    description: (
      <div className="text-white mt-4 text-justify text-center">
        Level up your applications with Node.js. At HH Tech Hub, our Node.js developers are experts in Express.js, npm, jest, and Prisma, delivering fast, scalable, and real-time web applications that meet your business needs. So, improve your backend with Node.js today.
      </div>
    ),
    icon: <FaNodeJs />,
  },
  "Python/Django": {
    description: (
      <div className="text-white mt-4 text-justify text-center">
        Open robust and secure web applications with Django Web App Development. Our expert team utilises tools such as Django, PostgreSQL, Pytest, and Gunicorn to develop Python-based solutions and secure backend systems. For CMS or an enterprise-level app, we ensure your project is built with precision and reliability.
      </div>
    ),
    icon: <FaPython />,
  },
  "Java/Spring": {
    description: (
      <div className="text-white mt-4 text-justify text-center">
        Build fast, secure, and maintainable applications with Spring Boot Development. As a trusted Spring Development Company, we help businesses develop robust applications. Our team is an expert in Spring Boot, Gradle, JUnit 5, and more, simplifying the development process to ensure a faster time-to-market.
      </div>
    ),
    icon: <FaJava />,
  },
  ".NET Core": {
    description: (
      <div className="text-white mt-4 text-justify text-center">
        Upgrade your business with our .NET Core Development Services. HH Tech Hub team specializes in (ASP.NET Core, Visual Studio, Entity Framework Core, xUnit), building high-performance, cross-platform applications that are scalable and secure — from web apps to enterprise solutions.
      </div>
    ),
    icon: <MdOutlineDataObject />,
  },
  "React": {
    description: (
      <div className="text-white mt-4 text-justify text-center">
        Finding a front-end React development company in Pakistan? Our React Native experts utilise tools like Vite and Webpack, as well as Redux, to ensure seamless integration, speed, and exceptional user experiences with every app we develop. We love to hear from you about your next project in React!
      </div>
    ),
    icon: <FaReact />,
  },
  "Vue": {
    description: (
      <div className="text-white mt-4 text-justify text-center">
        Vue.js development with HH Tech Hub. We deliver modern, intuitive front-end solutions built with Vue.js, Vite, Pinia, and Jest. Whether you're using Vue.js vs React, our expert covers all. We offer unmatched expertise in creating user-friendly applications. Collaborate with us for robust Vue.js development today.
      </div>
    ),
    icon: <FaVuejs />,
  },
  "Angular": {
    description: (
      <div className="text-white mt-4 text-justify text-center">
        HH Tech Hub also has an expert who provides the best Angular services in Pakistan and worldwide. Our Angular developers are experts in Angular CLI, RxJS, TypeScript, and more. We develop interactive and user-centric web applications that work seamlessly across devices. Choose HH Tech for reliable and scalable Angular development services to enhance your business.
      </div>
    ),
    icon: <FaAngular />,
  },
  "Svelte": {
    description: (
      <div className="text-white mt-4 text-justify text-center">
        Looking for an innovative Svelte developer? HH Tech Hub offers the best Svelte development services worldwide. Prioritising performance with SvelteKit, Vite, and Svelte Stores, we create lightweight, fast, and reactive web applications tailored to your needs.
      </div>
    ),
    icon: <SiSvelte />,
  },
  "Next.js": {
    description: (
      <div className="text-white mt-4 text-justify text-center">
        Everyone wants a front-end on Next.js, and HH Tech Hub provides the best Next.js development services in Pakistan. Our skilled Next.js team creates robust websites that run smoothly on both the front-end and server-side, utilising technologies like Next.js, React, Tailwind CSS, Testing Library, and more. Contact us for Next.js development today.
      </div>
    ),
    icon: <SiNextdotjs />,
  },
  "Flutter": {
    description: (
      <div className="text-white mt-4 text-justify text-center">
        HH Tech provides the best Flutter app development services in Pakistan. HH Tech Hub is the premier Flutter mobile app development company in Rawalpindi/Islamabad, delivering iOS and Android platforms. Our expert team is capable of building high-performance, visually appealing, and scalable mobile apps. Collaborate with us to discuss your Flutter mobile application project today. 
      </div>
    ),
    icon: <SiFlutter />,
  },
  "React Native": {
    description: (
      <div className="text-white mt-4 text-justify text-center">
        At HH Tech Hub, we take pride in being a trusted provider of React Native development software solutions. Our best React Native developers are experts in creating fast, native-like mobile applications for both iOS and Android. With React Native, we build apps that are not only highly functional but also efficient and cost-effective. Let us bring your mobile app ideas to life with React Native.
      </div>
    ),
    icon: <FaReact />,
  },
  "Firebase": {
    description: (
      <div className="text-white mt-4 text-justify text-center">
        As a leading Firebase company in Pakistan, HH Tech Hub specializes in building real-time, scalable mobile and web applications. With Firebase, we provide backend-as-a-service solutions that are fast, reliable, and highly efficient. Discuss your challenges, and we'll optimize your app's performance with the robust capabilities of Firebase.
      </div>
    ),
    icon: <SiFirebase />,
  },
  "Heroku": {
    description: (
      <div className="text-white mt-4 text-justify text-center">
        Deploy your apps effortlessly with Heroku deployment services at HH Tech Hub. We help you streamline app deployment, scaling, and management with Heroku's powerful platform-as-a-service tools. Trust our experts to handle your Heroku deployment. Let us get your app live today.
      </div>
    ),
    icon: <SiHeroku />,
  },
  "AWS": {
    description: (
      <div className="text-white mt-4 text-justify text-center">
        Looking for reliable AWS cloud services? HH Tech Hub offers complete AWS consulting in Pakistan or worldwide to help you harness the full potential of Amazon Web Services for your business. Whether you need scalable cloud storage, computing power, or advanced cloud solutions, we've got you covered.
      </div>
    ),
    icon: <FaAws />,
  },
  "Docker": {
    description: (
      <div className="text-white mt-4 text-justify text-center">
        Looking for DevOps services in Pakistan? At HH Tech Hub, we specialize in using Docker to create containerized applications that enhance scalability, performance, and security. Choose HH Tech for reliable and efficient Docker-based solutions today.
      </div>
    ),
    icon: <FaDocker />,
  },
  "Kubernetes": {
    description: (
      <div className="text-white mt-4 text-justify text-center">
        As a top Kubernetes consulting company, HH Tech Hub provides expert services to help you manage containerized applications with ease. Our Kubernetes solutions enable efficient scaling of applications, ensuring that your system operates smoothly even under high traffic volumes. Call us for Kubernetes consulting and optimize your infrastructure.
      </div>
    ),
    icon: <SiKubernetes />,
  },
  "Jenkins": {
    description: (
      <div className="text-white mt-4 text-justify text-center">
        Restore your software with our Jenkins CI/CD DevOps services at HH Tech Hub. We integrate Jenkins into your software for integration and delivery processes, ensuring faster and more reliable deployments. Our Jenkins experts will help you automate testing, builds, and deployments.
      </div>
    ),
    icon: <SiJenkins />,
  },
  "Terraform": {
    description: (
      <div className="text-white mt-4 text-justify text-center">
        Optimize your cloud infrastructure with Terraform cloud automation. At HH Tech Hub, we provide expert Terraform infrastructure services to help you automate, manage, and scale your cloud environments. Whether you're working with AWS, Azure, or Google Cloud, we use Terraform to simplify cloud provisioning and ensure a scalable, cost-effective infrastructure for your business.
      </div>
    ),
    icon: <SiTerraform />,
  },
  "GitHub Actions": {
    description: (
      <div className="text-white mt-4 text-justify text-center">
        Achieve optimal development efficiency with GitHub Actions CI/CD at HH Tech Hub. We help you automate workflows, from code integration to deployment, with faster delivery and fewer errors. Our experts implement GitHub Actions to integrate and deploy your applications. Call us to optimize your CI/CD pipeline today.
      </div>
    ),
    icon: <FaGitAlt />,
  },
};

const data = {
  AI: ["Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing", "Predictive Analytics"],
  "Back-end": ["Node.js", "Python/Django", "Java/Spring", ".NET Core"],
  "Front-end": ["React", "Vue", "Angular", "Svelte", "Next.js"],
  Mobile: ["Flutter", "React Native"],
  Cloud: ["AWS", "Firebase", "Heroku"],
  DevOps: ["Docker", "Kubernetes", "Jenkins", "Terraform", "GitHub Actions"],
};

const categoryIcons = {
  AI: <SiOpenai />,
  "Back-end": <FaServer />,
  "Front-end": <FaLaptopCode />,
  Mobile: <FaMobileAlt />,
  Cloud: <FaCloud />,
  DevOps: <FaCodeBranch />,
};

const TechCategorySelector = () => {
  const [activeCategory, setActiveCategory] = useState("AI");

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 mt-4 sm:mt-6">
        {Object.keys(data).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 sm:px-5 py-2 rounded-full text-sm sm:text-md font-medium flex items-center gap-2 transition-all duration-300 ${
              activeCategory === category
                ? "bg-orange-500 text-white shadow-lg"
                : "bg-white text-black border border-orange-300 hover:bg-orange-100"
            }`}
          >
            {categoryIcons[category]} {category}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full">
        {data[activeCategory].map((tech, index) => (
          <motion.div
            key={tech}
            className="w-full xs:w-[90%] sm:w-[47%] lg:w-[30%] max-w-[350px] bg-[#1c1c1c] border border-gray-800 text-white rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-orange-400/30 hover:-translate-y-2 transition-all duration-300 group relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center text-3xl sm:text-4xl text-orange-500 mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300">
              {techDetails[tech]?.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-center group-hover:text-orange-400 transition-colors duration-300">
              {tech}
            </h3>
            <div className="text-xs sm:text-sm text-gray-400 mt-2 mb-4 text-center group-hover:text-gray-300 transition-colors duration-300">
              {techDetails[tech]?.description}
            </div>
            <div className="absolute inset-0 rounded-2xl border border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechCategorySelector;
