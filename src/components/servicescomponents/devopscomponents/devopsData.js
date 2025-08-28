export const dockerData = {
  name: "Docker",
  description: "Containerization platform that packages applications with all their dependencies into standardized units for software development and deployment.",
  strengths: [
    "Lightweight and portable containers",
    "Consistent environments across development and production",
    "Fast deployment and scaling",
    "Large ecosystem of pre-built images"
  ],
  useCases: [
    "Microservices architecture",
    "CI/CD pipeline integration",
    "Development environment standardization",
    "Application isolation and security"
  ],
  faqs: [
    {
      question: "How does Docker improve our development workflow?",
      answer: "Docker eliminates 'it works on my machine' problems by creating consistent environments from development through production, reducing setup time and configuration drift."
    },
    {
      question: "What's the difference between Docker and virtual machines?",
      answer: "Docker containers share the host OS kernel, making them much lighter and faster than VMs which require full OS instances for each workload."
    },
    {
      question: "How do you manage Docker in production?",
      answer: "We implement container orchestration (like Kubernetes), monitoring, logging, and security best practices to ensure reliable production deployments."
    },
    {
      question: "Can Docker work with our existing infrastructure?",
      answer: "Yes, Docker runs on any modern Linux, Windows, or cloud environment and can integrate with your current systems and workflows."
    },
    {
      question: "How do you handle Docker security?",
      answer: "We implement image scanning, least-privilege principles, network segmentation, and regular updates to keep your containers secure."
    }
  ]
};

export const kubernetesData = {
  name: "Kubernetes",
  description: "Open-source container orchestration system for automating deployment, scaling, and management of containerized applications.",
  strengths: [
    "Automatic scaling and self-healing",
    "Declarative configuration",
    "Multi-cloud and hybrid cloud support",
    "Rich ecosystem of extensions"
  ],
  useCases: [
    "Managing microservices at scale",
    "Continuous deployment pipelines",
    "Hybrid and multi-cloud deployments",
    "High-availability applications"
  ],
  faqs: [
    {
      question: "When should we consider Kubernetes?",
      answer: "Kubernetes becomes valuable when you need to manage multiple containers across multiple servers, especially for microservices architectures or scalable applications."
    },
    {
      question: "How does Kubernetes improve reliability?",
      answer: "Kubernetes automatically restarts failed containers, replaces instances, scales to meet demand, and manages traffic routing to maintain service availability."
    },
    {
      question: "What's the learning curve for Kubernetes?",
      answer: "While Kubernetes has a steep learning curve, we handle the complexity for you and provide training and documentation tailored to your team's needs."
    },
    {
      question: "Can Kubernetes work with our existing monitoring tools?",
      answer: "Yes, Kubernetes integrates with most popular monitoring solutions, and we'll configure the right tooling for your specific needs."
    },
    {
      question: "How do you secure Kubernetes clusters?",
      answer: "We implement RBAC, network policies, pod security policies, and regular updates to ensure your Kubernetes deployment is secure by default."
    }
  ]
};

export const jenkinsData = {
  name: "Jenkins",
  description: "Open source automation server that provides hundreds of plugins to support building, deploying and automating any project.",
  strengths: [
    "Extensive plugin ecosystem",
    "Distributed builds across multiple nodes",
    "Pipeline-as-code configuration",
    "Integration with virtually any DevOps tool"
  ],
  useCases: [
    "Automated testing and deployment",
    "Complex build pipelines",
    "Legacy system modernization",
    "Multi-environment deployments"
  ],
  faqs: [
    {
      question: "Why choose Jenkins over newer CI/CD tools?",
      answer: "Jenkins offers unmatched flexibility, a vast plugin ecosystem, and proven reliability for complex enterprise workflows."
    },
    {
      question: "How do you secure Jenkins pipelines?",
      answer: "We implement role-based access control, credential management, and pipeline security best practices."
    },
    // Add more FAQs as needed
  ]
};

export const terraformData = {
  name: "Terraform",
  description: "Infrastructure as Code tool that enables you to safely and predictably create, change, and improve infrastructure.",
  strengths: [
    "Multi-cloud infrastructure management",
    "Declarative configuration files",
    "State management and versioning",
    "Dependency graph for resource provisioning"
  ],
  useCases: [
    "Cloud infrastructure provisioning",
    "Disaster recovery setups",
    "Environment replication",
    "Compliance and security automation"
  ],
  faqs: [
    {
      question: "How does Terraform compare to CloudFormation?",
      answer: "Terraform is cloud-agnostic with a cleaner syntax, while CloudFormation is AWS-specific but tightly integrated with AWS services."
    },
    // Add more FAQs as needed
  ]
};

export const githubData = {
  name: "GitHub Actions",
  description: "Native CI/CD automation directly in your GitHub repository to build, test, and deploy your code right from GitHub.",
  strengths: [
    "Tight GitHub integration",
    "YAML-based workflow configuration",
    "Extensive marketplace of actions",
    "Matrix builds for multiple environments"
  ],
  useCases: [
    "GitHub-based projects",
    "Open source workflows",
    "Automated testing and releases",
    "Serverless deployments"
  ],
  faqs: [
    {
      question: "When should we use GitHub Actions vs Jenkins?",
      answer: "GitHub Actions is ideal for GitHub-centric workflows with simpler needs, while Jenkins offers more flexibility for complex enterprise pipelines."
    },
    // Add more FAQs as needed
  ]
};