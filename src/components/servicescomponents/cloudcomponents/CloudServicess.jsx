import { Link } from "react-router-dom";

const CloudServicess = () => {
  const services = [
    {
      title: "Cloud Architecture Design",
      desc: (
      <>
      We design<strong>cloud solutions</strong>using AWS, Azure, Google Cloud, Digital Ocean and Heroku that fit your business. We help you reduce costs but never compromising on scalability, performance, and reliability.
      </>),
    },
    {
      title: "Migration Services",
      desc:(<>
      Our<strong>cloud migration services</strong>enable seamless transition from on-premises or other clouds to your preferred platform. We follow proven migration strategies to minimize downtime and ensure your applications, data, and workloads remain secure and fully operational.
      </>) ,
    },
    {
      title: "DevOps Automation",
      desc:(<>
      We implement<strong>DevOps automation</strong>with CI/CD pipelines and Infrastructure-as-Code across AWS, Azure, and GCP. Why? Because it reduces human error, speeds up cycles, and improves operational tasks efficiently.
      </>),
    },
    {
      title: "Managed Cloud Services",
      desc: "Our managed cloud service includes 24/7 monitoring, patching, backups, and performance tuning. At the same time, we ensure your cloud infrastructure stays secure, updated, and running at peak performance.",
    },
    {
      title: "Cloud Security & Compliance",
      desc: "We know how to secure large-scale businesses, including IAM policies, data encryption, firewall configurations, and adherence to global frameworks like ISO 27001, GDPR, and HIPAA. This helps safeguard sensitive business data and ensures regulatory compliance.",
    },
    {
      title: "Cloud Cost Optimization",
      desc: (<>
      Our<strong>cloud cost optimization services</strong>use right-sizing strategies, reserved instances, and real-time cost monitoring to ensure you only pay for what you need, maximizing your ROI.
      </>),
    },
  ];

  return (
    <section className="px-4 md:px-10 py-20 max-w-7xl mx-auto">
      <div className="flex items-center mb-10">
        <span className="w-4 h-4 bg-orange-500 mr-2"></span>
        <h2 className="text-3xl font-bold text-gray-900">
          Our Cloud Computing Services
        </h2>
      </div>
      <div className="text-gray-600">
        <p> <span className="font-bold">HH Tech Hub</span> covers complete<span className="font-bold">cloud computing services</span> . We have an expert who can grow your business through cloud computing. Each service is designed to deliver scalability, cost efficiency, and security.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {services.map((service, idx) => (
          <div 
            key={idx} 
            className="p-6 rounded-lg border-l-4 border-orange-500 hover:shadow-md transition-all duration-300 group"
          >
            <div className="w-8 h-1 bg-orange-500 mb-3 transition-all duration-300 group-hover:w-12"></div>
            <h3 className="font-semibold text-xl mb-3 text-gray-800">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CloudServicess;