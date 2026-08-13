export interface ProjectLinkConfig {
  github?: string;
  live?: string;
}

export interface ProjectDetail {
  id: string;
  slug: string;
  projectNumber: string;
  title: string;
  shortTitle: string;
  label?: string;
  category: "Full-Stack Web App" | "Backend Security" | "Cloud Storage System";
  tagline: string;
  description: string;
  keyImplementation: string[];
  technologies: string[];
  links: ProjectLinkConfig;
  features: {
    title: string;
    description: string;
  }[];
  architecturePoints: {
    layer: string;
    detail: string;
  }[];
  overviewText: string[];
  problemStatement: string;
  solutionOverview: string;
}

export const projectsData: ProjectDetail[] = [
  {
    id: "dkb-polymers",
    slug: "dkb-polymers",
    projectNumber: "01",
    title: "Recycling Materials Sourcing & Trading Platform",
    shortTitle: "Recycling Materials Platform",
    label: "DKB POLYMERS",
    category: "Full-Stack Web App",
    tagline: "Deployed B2B web application for recyclable material sourcing, trading, and supply",
    description:
      "Developed and deployed a responsive B2B web application for recyclable material sourcing, recycling, processing, trading, and supply.",
    keyImplementation: [
      "Reusable Next.js / React component architecture",
      "Strict TypeScript typing across data models and form handlers",
      "Server-side business enquiry API route",
      "Resend email API integration for commercial lead dispatch",
      "Robust input validation and defensive HTML escaping",
      "Continuous deployment pipeline on Vercel"
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Resend",
      "Vercel"
    ],
    links: {
      github: "https://github.com/Khadar6786/dkb-polymers.git",
      live: "" // Configurable: left blank as specified until provided
    },
    features: [
      {
        title: "B2B Commercial Enquiry Engine",
        description:
          "Engineered a server-side API handler that processes industrial buyer enquiries, validates contact payloads, and triggers transactional notifications."
      },
      {
        title: "Defensive Input Sanitization",
        description:
          "Implemented comprehensive client and server-side validation with HTML escaping to prevent injection attacks and ensure reliable message delivery."
      },
      {
        title: "Modular Component Architecture",
        description:
          "Structured reusable React components with responsive Tailwind CSS layouts tailored for commercial partners and industrial buyers."
      },
      {
        title: "Production Cloud Deployment",
        description:
          "Configured continuous integration and deployment on Vercel with environment variable encapsulation for secure third-party credentials."
      }
    ],
    architecturePoints: [
      {
        layer: "Frontend Layer",
        detail: "Next.js App Router, React Functional Components, Tailwind CSS styling, responsive layout system"
      },
      {
        layer: "API & Server-Side",
        detail: "Next.js Route Handlers, payload validation, input sanitization, HTML escaping"
      },
      {
        layer: "Notification Service",
        detail: "Resend transactional email API integration with error handling"
      },
      {
        layer: "Hosting & Infrastructure",
        detail: "Vercel edge hosting, automated build pipeline, domain configuration"
      }
    ],
    overviewText: [
      "A production-grade B2B web application designed to connect material suppliers, industrial recyclers, and processors in the recyclable polymers sector.",
      "The application provides a structured digital presence for industrial sourcing, showcasing polymer grades, processing capabilities, and offering an automated business enquiry channel for corporate trade inquiries.",
      "Built with a focus on type safety, clean component separation, and dependable email delivery for prospective business clients."
    ],
    problemStatement:
      "B2B material trading and recycling requires clear product specification catalogs and a dependable, secure direct enquiry pipeline so commercial buyers can request bulk quotes without manual friction.",
    solutionOverview:
      "Engineered a high-performance Next.js web application with strict TypeScript typing, responsive UI components, a server-side enquiry handler with input validation and HTML escaping, integrated with Resend API for rapid lead delivery."
  },
  {
    id: "authentication-rbac",
    slug: "authentication-rbac",
    projectNumber: "02",
    title: "Secure Backend Authentication & Role-Based Access Control Platform",
    shortTitle: "Secure Auth & RBAC Platform",
    category: "Backend Security",
    tagline: "Enterprise REST APIs with BCrypt hashing and USER / ADMIN role-based access control",
    description:
      "Developed REST APIs for user registration and login with secure credential management, input validation, authentication, authorization, and role-based access control.",
    keyImplementation: [
      "BCrypt cryptographic password hashing with secure salting",
      "Hierarchical Role-Based Access Control (USER and ADMIN roles)",
      "Strict Controller-Service-Repository multi-tier architecture",
      "Centralized exception handling with structured error payloads",
      "Data persistence and relational mapping with Spring Data JPA and MySQL",
      "Strict request body validation annotations and boundary checks"
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "Spring Data JPA",
      "BCrypt",
      "REST APIs"
    ],
    links: {
      github: "https://github.com/Khadar6786/authsystem",
      live: ""
    },
    features: [
      {
        title: "Cryptographic Credential Security",
        description:
          "Enforces one-way cryptographic password hashing using BCrypt to ensure user credentials are never stored in plaintext within the MySQL database."
      },
      {
        title: "Hierarchical Role-Based Access Control",
        description:
          "Defines granular authorization policies distinguishing standard USER privileges from elevated ADMIN operations across protected API endpoints."
      },
      {
        title: "Multi-Tier Controller-Service-Repository Pattern",
        description:
          "Enforces complete separation of concerns: REST Controllers manage HTTP contracts, Services execute business rules, and JPA Repositories handle data persistence."
      },
      {
        title: "Centralized Error & Exception Handling",
        description:
          "Implements global exception interceptors that return standardized JSON error messages with proper HTTP status codes, preventing sensitive system stack traces from leaking."
      }
    ],
    architecturePoints: [
      {
        layer: "API / Controller Layer",
        detail: "Spring Boot REST Controllers, DTO request mapping, Bean Validation annotations"
      },
      {
        layer: "Service / Business Logic",
        detail: "Authentication services, BCrypt password matching, role validation, business logic enforcement"
      },
      {
        layer: "Persistence / Repository Layer",
        detail: "Spring Data JPA Repository interfaces, relational entity mappings, automated SQL queries"
      },
      {
        layer: "Database Layer",
        detail: "MySQL database with normalized user and role relational tables and unique constraints"
      }
    ],
    overviewText: [
      "A core backend security system built to provide dependable user registration, login authentication, and fine-grained authorization for enterprise software architectures.",
      "The system is designed following strict object-oriented design and Spring enterprise best practices, isolating concerns across modular controllers, business services, and database repositories.",
      "Ensures defensive security measures including salted password hashing, structured input validation, and role-based authorization barriers."
    ],
    problemStatement:
      "Modern web and enterprise applications require robust backend security mechanisms to safely authenticate users, protect sensitive administrative actions, and enforce least-privilege access without architectural coupling.",
    solutionOverview:
      "Engineered modular RESTful microservice APIs in Java and Spring Boot utilizing BCrypt password hashing, Spring Data JPA for persistence in MySQL, and role-based authorization logic separating USER and ADMIN privilege levels."
  },
  {
    id: "cloud-file-storage",
    slug: "cloud-file-storage",
    projectNumber: "03",
    title: "Secure Cloud File Storage System",
    shortTitle: "Secure Cloud File Storage",
    category: "Cloud Storage System",
    tagline: "Spring Boot backend integrated with AWS S3 for object storage, classification, and retrieval",
    description:
      "Built a Spring Boot backend integrated with AWS S3 for secure file storage, metadata management, classification, and retrieval.",
    keyImplementation: [
      "AWS S3 SDK integration for direct object upload and retrieval streams",
      "Relational metadata indexing in MySQL using Spring Data JPA",
      "Secure AWS IAM credential policies following least-privilege principles",
      "File classification, MIME type validation, and size constraint enforcement",
      "Clean REST endpoints for file upload, metadata search, and file retrieval"
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "AWS S3",
      "AWS IAM",
      "Spring Data JPA"
    ],
    links: {
      github: "https://github.com/Khadar6786/cloudstorage",
      live: ""
    },
    features: [
      {
        title: "AWS S3 Object Lifecycle Integration",
        description:
          "Integrates with Amazon Simple Storage Service (S3) for scalable, durable binary object storage with automated bucket path generation."
      },
      {
        title: "Relational Metadata Management",
        description:
          "Persists comprehensive file metadata (file name, S3 object key, MIME type, size, upload timestamp, classification tags) in MySQL via Spring Data JPA."
      },
      {
        title: "IAM Least-Privilege Access",
        description:
          "Utilizes scoped AWS IAM policies to guarantee the backend service only retains minimal required permissions for bucket read/write operations."
      },
      {
        title: "Stream-Based File Retrieval",
        description:
          "Provides efficient streaming REST endpoints allowing clients to download stored files directly while preserving content headers and security checks."
      }
    ],
    architecturePoints: [
      {
        layer: "REST API Endpoint",
        detail: "Multipart file upload endpoints, metadata query endpoints, streaming download controllers"
      },
      {
        layer: "Storage Service Layer",
        detail: "AWS S3 client wrapper, object key generation, MIME classification, file validation"
      },
      {
        layer: "Metadata Persistence",
        detail: "Spring Data JPA repository mapping file records to MySQL with relational indexing"
      },
      {
        layer: "Cloud Infrastructure",
        detail: "Amazon S3 Bucket object storage with AWS IAM access policy encapsulation"
      }
    ],
    overviewText: [
      "A cloud-integrated backend application designed to handle binary object storage reliably while maintaining structured metadata in a relational database.",
      "By decoupling heavy binary storage (delegated to AWS S3) from metadata queries (indexed in MySQL), the system ensures high scalability and fast query performance.",
      "Implements strict MIME validation, file classification rules, and secure cloud credentials management."
    ],
    problemStatement:
      "Storing binary files directly inside relational databases degrades database performance and scalability, while unorganized file storage lacks querying capabilities, audit trails, and metadata tagging.",
    solutionOverview:
      "Built a Spring Boot cloud storage backend that stores file binaries securely in AWS S3 buckets while maintaining normalized metadata, classification tags, and access paths in MySQL for rapid search and retrieval."
  }
];
