import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, 
  Tablet, 
  Code, 
  Palette, 
  TestTube, 
  Rocket, 
  MessageCircle, 
  Settings,
  CheckCircle,
  ArrowRight,
  Zap,
  Shield,
  Users,
  Globe,
  
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const ViewAllServices = () => {
  const [activeStep, setActiveStep] = useState(null);
  const [hoveredTech, setHoveredTech] = useState(null);
  const navigate = useNavigate();
  const technologies = [
    {
      name: 'Flutter',
      icon: Code,
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-600',
      description: 'Cross-platform native performance'
    },
    {
      name: 'React Native',
      icon: Smartphone,
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-600',
      description: 'JavaScript-powered mobile apps'
    },
    {
      name: 'iOS',
      icon: Tablet,
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-600',
      description: 'Native iOS development'
    },
    {
      name: 'Android',
      icon: Smartphone,
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-600',
      description: 'Native Android development'
    }
  ];

  const workflowSteps = [
    {
      id: 1,
      title: 'Initial Consultation',
      description: 'Understanding your vision, requirements, and target audience',
      icon: MessageCircle,
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-600',
      details: [
        'Requirements gathering',
        'Market analysis',
        'Technical feasibility',
        'Project timeline'
      ]
    },
    {
      id: 2,
      title: 'Technology Selection',
      description: 'Choosing the optimal tech stack for your project',
      icon: Settings,
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-600',
      details: [
        'Platform evaluation',
        'Performance analysis',
        'Scalability planning',
        'Integration requirements'
      ]
    },
    {
      id: 3,
      title: 'Design Phase',
      description: 'Creating intuitive and engaging user experiences',
      icon: Palette,
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-600',
      details: [
        'UI/UX wireframes',
        'Interactive prototypes',
        'Design system',
        'User flow mapping'
      ]
    },
    {
      id: 4,
      title: 'Development Process',
      description: 'Building robust, scalable mobile applications',
      icon: Code,
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-600',
      details: [
        'Agile development',
        'Code reviews',
        'Version control',
        'Progress tracking'
      ]
    },
    {
      id: 5,
      title: 'Testing',
      description: 'Comprehensive quality assurance and testing',
      icon: TestTube,
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-600',
      details: [
        'Automated testing',
        'Manual QA',
        'Device compatibility',
        'Performance optimization'
      ]
    },
    {
      id: 6,
      title: 'Final Deployment',
      description: 'Launching your app to app stores and beyond',
      icon: Rocket,
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-600',
      details: [
        'App store submission',
        'Release management',
        'Monitoring setup',
        'Post-launch support'
      ]
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance for mobile devices'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security implementations'
    },
    {
      icon: Users,
      title: 'User-Centric',
      description: 'Intuitive interfaces that users love'
    },
    {
      icon: Globe,
      title: 'Cross-Platform',
      description: 'Deploy once, run everywhere'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-900 to-amber-900 py-20 px-6">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiLz48cGF0aCBkPSJNMjAgMTBjNS41MjMgMCAxMCA0LjQ3NyAxMCAxMHMtNC40NzcgMTAtMTAgMTAtMTAtNC40NzctMTAtMTAgNC40NzctMTAgMTAtMTB6bTAgM2MzLjg2NiAwIDcgMy4xMzQgNyA3cy0zLjEzNCA3LTcgNy03LTMuMTM0LTctNyAzLjEzNC03IDctN3oiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4yIi8+PC9nPjwvc3ZnPg==')]"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Build Apps That
              <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Transform Lives
              </span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              From concept to deployment, we craft exceptional mobile experiences 
              that engage users and drive business growth across iOS and Android platforms.
            </p>
            <button className="bg-white text-orange-600 hover:bg-white/90 shadow-lg px-8 py-3 rounded-lg font-medium flex items-center justify-center mx-auto transition-all duration-300 hover:shadow-orange-400/30" onClick={() => navigate("/get-quote")}>
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-6 bg-gray-100/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Cutting-Edge Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We leverage the latest mobile development frameworks to deliver 
              high-performance, scalable applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredTech(index)}
                onHoverEnd={() => setHoveredTech(null)}
              >
                <div className="h-full bg-white/80 backdrop-blur-sm border-0 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:shadow-orange-400/20">
                  <div className="p-6 text-center">
                    <motion.div
                      animate={{ 
                        scale: hoveredTech === index ? 1.1 : 1,
                        rotate: hoveredTech === index ? 5 : 0
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={`w-16 h-16 mx-auto mb-4 rounded-xl ${tech.bgColor} flex items-center justify-center`}
                    >
                      <tech.icon className={`h-8 w-8 ${tech.textColor}`} />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                    <p className="text-gray-600 text-sm">{tech.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A systematic approach ensuring quality, transparency, and timely delivery 
              throughout your mobile app development journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div 
                  className="h-full cursor-pointer transition-all duration-300 hover:shadow-lg rounded-xl bg-white/80 backdrop-blur-sm border-0 shadow-md"
                  onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-lg ${step.bgColor} flex items-center justify-center mr-4`}>
                        <step.icon className={`h-6 w-6 ${step.textColor}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className={`text-sm font-medium ${step.textColor}`}>
                            Step {step.id}
                          </span>
                          <motion.div
                            animate={{ rotate: activeStep === step.id ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowRight className="h-4 w-4 text-gray-500" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                    
                    <AnimatePresence>
                      {activeStep === step.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="border-t border-gray-200 pt-4 mt-4">
                            <ul className="space-y-2">
                              {step.details.map((detail, idx) => (
                                <motion.li
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="flex items-center text-sm text-gray-600"
                                >
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                  {detail}
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-100/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Our Mobile Development
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our unique approach combines technical expertise with user-centered design 
              to deliver mobile apps that stand out in the marketplace.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-full text-center bg-white/80 backdrop-blur-sm border-0 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-orange-100 flex items-center justify-center">
                      <feature.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-orange-900 to-amber-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Your Dream App?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your mobile app idea and transform it into a reality 
              that exceeds your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <button
      className="bg-white text-orange-600 hover:bg-white/90 shadow-lg px-8 py-3 rounded-lg font-medium flex items-center justify-center mx-auto transition-all duration-300 hover:shadow-orange-400/30"
      onClick={() => navigate("/get-quote")}
    >
      Start Your Project
      <ArrowRight className="ml-2 h-5 w-5" />
    </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ViewAllServices;