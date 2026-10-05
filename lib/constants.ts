export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Web Dev", href: "#web-dev" },
  { label: "Services", href: "#services" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const PERSONAL_INFO = {
  name: "Premsai Gajula",
  title: "Aspiring Zoho CRM Developer | Web Developer | Computer Science Graduate",
  badge: "B.Sc Computer Science | Zoho CRM Developer",
  heroDescription:
    "I build smart CRM solutions, automate business processes, and develop modern web applications using Zoho CRM, Deluge, JavaScript, Python, and modern web technologies.",
  email: "premsaigajula77@gmail.com",
  phone: "+91 85559 86523",
  location: "Hyderabad, India",
  education: {
    degree: "B.Sc. in Computer Science",
    institution: "Computer Science Graduate",
    focus: "Software Development, Relational Databases, Web Technologies & Algorithms",
  },
  roles: [
    "Zoho CRM Developer",
    "CRM Automation Developer",
    "Web Developer",
    "Python Developer",
    "AI-Assisted Developer",
  ],
  socials: {
    github: "https://github.com/premsaigajula",
    linkedin: "https://www.linkedin.com/in/premsai-gajula",
    email: "mailto:premsaigajula77@gmail.com",
    portfolio: "https://premsaigajula.dev",
  },
  targetRoles: [
    "Zoho CRM Developer",
    "Zoho CRM Administrator",
    "Junior CRM Developer",
    "Web Developer",
    "Python Developer",
    "Entry-Level Software Developer",
  ],
};

export const REALISTIC_STATS = [
  {
    value: 13,
    suffix: "+",
    label: "CRM Modules Designed",
    subtext: "Relational data structures & layouts",
  },
  {
    value: 3,
    suffix: "",
    label: "CRM Business Solutions",
    subtext: "PropTech, Healthcare B2B, Automotive",
  },
  {
    value: 10,
    suffix: "+",
    label: "API Integrations Built",
    subtext: "REST endpoints, Webhooks & Data Pipelines",
  },
  {
    value: 4,
    suffix: "+",
    label: "Major Projects",
    subtext: "Production-grade functional architectures",
  },
];

export const SKILL_CATEGORIES = [
  {
    id: "crm",
    title: "CRM Development",
    iconName: "Layers",
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/30",
    accentColor: "text-blue-400",
    skills: [
      { name: "Zoho CRM", level: "Expertise", description: "Architecture, administration, module layouts, relational lookups" },
      { name: "CRM Administration", level: "Core", description: "User roles, permissions, security profiles, data sharing rules" },
      { name: "CRM Customization", level: "Core", description: "Custom fields, validation rules, page layouts, canvas views" },
      { name: "Deluge Scripting", level: "Specialist", description: "Custom functions, automated field updates, webhook triggers" },
      { name: "Client Script & ZDK", level: "Core", description: "Browser-side JavaScript validation, UI controls, dynamic changes" },
      { name: "Workflows", level: "Advanced", description: "Rule triggers, automated email alerts, tasks, field updates" },
      { name: "Blueprints", level: "Advanced", description: "Enforcing business process transitions, SLA stages, required fields" },
      { name: "Custom Modules", level: "Core", description: "Relational business entities with master-detail mapping" },
      { name: "CRM Automation", level: "Advanced", description: "Quotation generation, inventory states, lifecycle milestones" },
    ],
  },
  {
    id: "web",
    title: "Web Development",
    iconName: "Globe",
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30",
    accentColor: "text-cyan-400",
    skills: [
      { name: "HTML5", level: "Core", description: "Semantic markup, accessibility, modern DOM structure" },
      { name: "CSS3", level: "Core", description: "Flexbox, Grid, custom styling, responsive design, animations" },
      { name: "JavaScript (ES6+)", level: "Advanced", description: "Asynchronous programming, Promises, DOM manipulation, APIs" },
      { name: "Bootstrap 5", level: "Proficient", description: "Rapid responsive grid prototyping and UI components" },
      { name: "React", level: "Proficient", description: "Component state, hooks, lifecycle, interactive interfaces" },
      { name: "Next.js", level: "Proficient", description: "App router, SSR, static generation, API routes, performance" },
      { name: "TypeScript", level: "Proficient", description: "Static typing, interfaces, type-safe development" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Database",
    iconName: "Database",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    accentColor: "text-purple-400",
    skills: [
      { name: "Python", level: "Advanced", description: "Object-oriented scripting, data processing, backend automation" },
      { name: "Flask", level: "Proficient", description: "Lightweight REST API microservices, routing, request handling" },
      { name: "MySQL", level: "Advanced", description: "Relational database schema design, complex joins, indexing, ACID" },
      { name: "MongoDB", level: "Proficient", description: "NoSQL document collections, JSON queries, aggregation pipelines" },
      { name: "REST APIs", level: "Advanced", description: "HTTP methods, JSON payloads, authentication tokens, rate limits" },
    ],
  },
  {
    id: "data-cloud",
    title: "Data & Cloud",
    iconName: "Cloud",
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
    accentColor: "text-emerald-400",
    skills: [
      { name: "Data Analytics", level: "Proficient", description: "Exploratory analysis, business KPI tracking, trend detection" },
      { name: "Microsoft Excel", level: "Advanced", description: "VLOOKUP, INDEX/MATCH, Pivot tables, business data modeling" },
      { name: "Foundation of Data Science", level: "Certified", description: "Statistical foundations, data cleaning & preprocessing" },
      { name: "Azure Cloud", level: "Certified", description: "Cloud computing fundamentals, resource groups, storage & IAM" },
    ],
  },
  {
    id: "tools",
    title: "Development Tools & AI",
    iconName: "Cpu",
    color: "from-amber-500/20 to-orange-500/20",
    borderColor: "border-amber-500/30",
    accentColor: "text-amber-400",
    skills: [
      { name: "Git & GitHub", level: "Advanced", description: "Version control, branching, PRs, commit hygiene, collaborative repo" },
      { name: "VS Code", level: "Core", description: "Productivity workflows, linting, debugging, modern extensions" },
      { name: "Google Antigravity", level: "Practitioner", description: "Agentic coding workflows, system automation, accelerated delivery" },
      { name: "AI-Assisted Development", level: "Specialist", description: "LLM-assisted code architecture, debugging, unit testing" },
      { name: "Prompt Engineering", level: "Practitioner", description: "Context framing, structured JSON schemas, few-shot prompting" },
    ],
  },
];

export interface ProjectItem {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  domain: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  highlight: string;
  metrics: { label: string; value: string }[];
  projectLink?: string;
  githubLink?: string;
  delugeSnippet?: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proptech-suite",
    title: "Zoho CRM PropTech Suite",
    badge: "Enterprise Real Estate CRM",
    tagline: "Automated Quotation, Inventory & Milestone Billing System",
    domain: "Real Estate & Property Management",
    problem:
      "Real estate sales teams faced extreme inefficiencies manually tracking plot and flat inventory across towers, calculating dynamic compound pricing with Indian GST & installment payment plans, and preparing custom milestone-based quotation PDFs. This led to human calculation errors, slow turnaround times, and frequent deal leakage.",
    solution:
      "Architected a comprehensive 13-module CRM architecture leveraging custom Deluge functions, Client Script (ZDK/JS), dynamic Price Books, automated inventory lifecycle status (Available → Blocked → Sold), automated GST calculations, and one-click milestone billing quotation generation.",
    technologies: [
      "Zoho CRM",
      "Deluge",
      "Client Script",
      "ZDK",
      "Workflows",
      "Blueprints",
      "Price Books",
    ],
    features: [
      "13 custom & standard CRM modules architected with relational lookups",
      "Complete Lead → Contact → Deal → Quote → Invoice pipeline management",
      "Automated real-time inventory state machine: Available → Blocked → Sold",
      "Dynamic multi-tier pricing with Price Books & installment Payment Plans",
      "Automated Indian GST & tax breakdown calculation engine",
      "Automated one-click Quotation generation & milestone billing schedule",
    ],
    highlight: "Reduced manual quotation generation effort by approximately 80%.",
    metrics: [
      { label: "Effort Reduction", value: "80%" },
      { label: "CRM Modules", value: "13" },
      { label: "Pricing Accuracy", value: "100%" },
    ],
    projectLink:
      "https://drive.google.com/drive/project/1kpeaQEFXLsaGPxvz-4uUPfR8Ik4LPXDr?usp=sharing",
    delugeSnippet: `// PropTech Suite: Automated Inventory State Transition & Dynamic Quotation Calc
dealRecord = zoho.crm.getRecordById("Deals", dealId);
propertyId = dealRecord.get("Selected_Property").get("id");
paymentPlan = dealRecord.get("Payment_Plan"); // e.g. "Construction Linked"

// 1. Fetch live Property Inventory Record
propertyData = zoho.crm.getRecordById("Properties", propertyId);
basePrice = propertyData.get("Base_Price");
floorRise = propertyData.get("Floor_Rise_Amount");
carpetArea = propertyData.get("Carpet_Area_SqFt");

// 2. Compute dynamic subtotal and GST
subTotal = (basePrice * carpetArea) + floorRise;
gstRate = 0.05; // 5% GST for residential
gstAmount = subTotal * gstRate;
grandTotal = subTotal + gstAmount;

// 3. Update Quotation & Transition Inventory State to "Blocked"
updateMap = Map();
updateMap.put("Sub_Total", subTotal);
updateMap.put("GST_Amount", gstAmount);
updateMap.put("Grand_Total", grandTotal);
updateMap.put("Inventory_Status", "Blocked");
zoho.crm.updateRecord("Properties", propertyId, {"Status": "Blocked"});
zoho.crm.updateRecord("Deals", dealId, updateMap);
info "Quotation calculated & Property " + propertyId + " blocked successfully.";`,
  },
  {
    id: "medline-crm",
    title: "MedLine Diagnostics Supply CRM",
    badge: "B2B Healthcare Distribution",
    tagline: "B2B Medical Equipment Distribution CRM",
    domain: "Healthcare & B2B Medical Distribution",
    problem:
      "Diagnostic lab equipment distributors struggled with high-volume surgical & laboratory equipment inquiries, complex multi-vendor customer profiles, quote versioning, and disconnected post-inquiry sales follow-ups across regional sales reps.",
    solution:
      "Engineered a specialized B2B CRM solution on Zoho CRM with custom equipment inquiry modules, automated territory assignment rules, REST API connectors for catalog sync, and automated multi-channel follow-up notifications.",
    technologies: [
      "Zoho CRM",
      "Deluge",
      "Client Script",
      "Custom Modules",
      "REST APIs",
      "Workflows",
    ],
    features: [
      "Medical equipment inquiry capture & automated rep assignment",
      "B2B multi-tier customer account management & diagnostic clinic profiling",
      "Dynamic multi-item B2B Quotations with warranty & SLA terms",
      "Real-time Order tracking lifecycle with automated alerts",
      "Automated sales follow-up email sequences & task generation",
      "REST API integration for external inventory and catalog sync",
    ],
    highlight: "Streamlined order tracking & shortened lead response turnaround time.",
    metrics: [
      { label: "Inquiry Velocity", value: "3x Faster" },
      { label: "Follow-up Automation", value: "100%" },
      { label: "Integration", value: "REST API" },
    ],
    projectLink:
      "https://drive.google.com/drive/project/1ZqIEAzPgvVC4fFPLPM1p9LsUagKnubBb?usp=sharing",
    delugeSnippet: `// MedLine CRM: Automated B2B Lead Assignment & SLA Follow-up Notification
inquiry = zoho.crm.getRecordById("Inquiries", inquiryId);
category = inquiry.get("Equipment_Category"); // e.g. "Radiology", "Pathology"
clinicCity = inquiry.get("City");

// Route to specialized regional executive via Territory Map
repEmail = "north_medical@medline-crm.com";
if(category == "Radiology") {
    repEmail = "radiology_specialist@medline-crm.com";
}

// Send automated dispatch notification to rep & clinic acknowledgment
sendmail [
    from: zoho.adminuserid
    to: repEmail
    subject: "Urgent: New B2B Equipment Inquiry [" + category + "]"
    message: "A high-priority inquiry from " + clinicCity + " has arrived. SLA response window: 2 hours."
]
zoho.crm.updateRecord("Inquiries", inquiryId, {"Assigned_Status": "Dispatched"});`,
  },
  {
    id: "automobile-crm",
    title: "Automobile Dealership & Service CRM",
    badge: "Automotive Retail & Service",
    tagline: "Vehicle Sales, Booking & Service Automation",
    domain: "Automotive Retail & Post-Sale Service",
    problem:
      "Car dealerships suffered from fragmented workflows between showroom test-drive bookings, vehicle allocation in inventory, finance/insurance coordination, and post-delivery periodic service appointments, leading to lost customer retention.",
    solution:
      "Built a unified automotive CRM featuring guided Zoho Blueprints for the test-drive to vehicle delivery lifecycle, vehicle inventory VIN tracking, and automated service maintenance reminder engines via Deluge workflows.",
    technologies: [
      "Zoho CRM",
      "Deluge",
      "Client Script",
      "Blueprints",
      "Workflows",
    ],
    features: [
      "Real-time Vehicle inventory management with variant & trim specs",
      "Interactive Test Drive scheduling & driver license validation",
      "End-to-end Booking to Delivery guided Blueprint process flow",
      "Finance, insurance & documentation checklist enforcement",
      "Periodic maintenance service scheduling & automated mileage reminders",
      "Client Script front-end validation ensuring zero invalid booking entries",
    ],
    highlight: "Enforced 100% compliance on vehicle handover checklists through Zoho Blueprints.",
    metrics: [
      { label: "Handover Compliance", value: "100%" },
      { label: "Service Reminders", value: "Automated" },
      { label: "Process Stages", value: "7 Guided" },
    ],
    projectLink:
      "https://drive.google.com/drive/project/1WbDQPBzK0oUeaCt9Us3N0ZlF3xpXxaay?usp=sharing",
    delugeSnippet: `// Automobile CRM: Scheduled Deluge Function for 6-Month Service Reminders
todayDate = zoho.currentdate;
deliveries = zoho.crm.searchRecords("Vehicle_Deliveries", "(Delivery_Date:equals:todayDate.subMonth(6))");

for each delivery in deliveries {
    customerPhone = delivery.get("Customer_Phone");
    vinNumber = delivery.get("VIN_Number");
    vehicleModel = delivery.get("Vehicle_Model");
    
    // Create new Service Booking task & send SMS reminder
    taskMap = Map();
    taskMap.put("Subject", "1st Periodic Maintenance Service for " + vehicleModel);
    taskMap.put("Due_Date", todayDate.addDay(7));
    taskMap.put("VIN", vinNumber);
    zoho.crm.createRecord("Service_Appointments", taskMap);
    info "Service appointment reminder queued for VIN: " + vinNumber;
}`,
  },
  {
    id: "api-data-pipeline",
    title: "API Data Integration & Storage System",
    badge: "Python & Data Engineering",
    tagline: "Python API → Data Processing → MySQL",
    domain: "Data Engineering & System Integration",
    problem:
      "Business operations required periodic synchronization of live third-party transactional records into an on-premise analytical relational database without duplicate records, data inconsistencies, or network outage data loss.",
    solution:
      "Engineered a robust Python data pipeline utilizing RESTful API consumers, clean error-handling mechanisms, transactional data transformation, and batch loading into structured MySQL tables.",
    technologies: ["Python", "REST APIs", "MySQL", "Requests", "PyMySQL"],
    features: [
      "Automated REST API data retrieval with pagination & rate-limit handling",
      "Data cleaning, schema normalization, and validation rules in Python",
      "Optimized relational database storage in MySQL with indexed keys",
      "Python–MySQL integration with transaction rollback on failures",
      "Automated logging and error reporting pipeline",
    ],
    highlight: "Demonstrates full-stack data ingestion from external APIs to relational storage.",
    metrics: [
      { label: "Data Integrity", value: "99.9%" },
      { label: "Batch Pipeline", value: "Python + MySQL" },
      { label: "Architecture", value: "ETL Sync" },
    ],
    githubLink: "https://github.com/premsaigajula",
  },
];

export const WEB_DEV_CARDS = [
  { name: "HTML5", category: "Markup", desc: "Semantic tags, forms, SEO-friendly DOM" },
  { name: "CSS3", category: "Styling", desc: "Responsive layouts, Flexbox, Grid, transitions" },
  { name: "JavaScript", category: "Logic", desc: "ES6+, async/await, DOM events, REST fetch" },
  { name: "Bootstrap 5", category: "Framework", desc: "Rapid grid systems & component assemblies" },
  { name: "Python", category: "Backend", desc: "Data structures, OOP, automation scripts" },
  { name: "Flask", category: "Web Framework", desc: "Lightweight routing, APIs & templating" },
  { name: "REST APIs", category: "Integration", desc: "JSON payloads, endpoints & auth headers" },
  { name: "MySQL", category: "Relational DB", desc: "Schema design, queries, foreign keys, ACID" },
  { name: "MongoDB", category: "NoSQL DB", desc: "JSON document collections & aggregation" },
  { name: "WordPress", category: "CMS", desc: "Custom themes, plugins & college portal design" },
];

export const FEATURED_WEBSITE = {
  title: "College Website",
  tagline: "Responsive Institutional Web Portal",
  platform: "WordPress",
  url: "http://premsaigajula.rf.gd/?i=1",
  description:
    "Designed and deployed a comprehensive college web portal featuring academic department overviews, digital student noticeboard, faculty directory, responsive admissions inquiry forms, and cross-device optimization.",
  features: [
    "Clean academic layout with structured department pages",
    "Digital student notices and event announcement system",
    "Interactive contact inquiry and admissions form",
    "Fully mobile-responsive across phones, tablets, and desktops",
  ],
};

export const SERVICES_DATA = [
  {
    number: "01",
    title: "Zoho CRM Development",
    description:
      "End-to-end CRM customization, custom modules, field lookups, multi-stage workflows, Blueprints, and tailored business process architecture for enterprise workflows.",
    tags: ["Zoho CRM", "Custom Modules", "Layouts", "Relational Mapping"],
  },
  {
    number: "02",
    title: "CRM Automation",
    description:
      "Automate repetitive sales, quoting, and customer service processes using Zoho Deluge, scheduled functions, and event-based triggers to eliminate human bottlenecks.",
    tags: ["Process Automation", "Lead Routing", "Auto Quotations", "Event Triggers"],
  },
  {
    number: "03",
    title: "Deluge Development",
    description:
      "Develop custom CRM business logic, mathematical calculations, price book overrides, webhook listeners, and background routines using Zoho Deluge scripting.",
    tags: ["Zoho Deluge", "Custom Functions", "API Calls", "Business Logic"],
  },
  {
    number: "04",
    title: "API Integration",
    description:
      "Seamlessly bridge Zoho CRM with third-party web applications, payment gateways, database backends, and external services via secure RESTful APIs.",
    tags: ["REST APIs", "Webhooks", "JSON Payloads", "Data Synchronization"],
  },
  {
    number: "05",
    title: "Web Development",
    description:
      "Build fast, responsive, and aesthetically modern websites and web applications using HTML5, CSS3, JavaScript, Bootstrap, React, and Next.js.",
    tags: ["Modern Frontend", "Responsive UI", "Tailwind / CSS", "React / Next.js"],
  },
  {
    number: "06",
    title: "Python & Data Solutions",
    description:
      "Develop Python-based automation scripts, REST API data extractors, database integrations (MySQL/MongoDB), and data analytics workflows.",
    tags: ["Python 3", "ETL Pipelines", "MySQL / MongoDB", "Data Analytics"],
  },
];

export const CERTIFICATIONS_DATA = [
  {
    id: "data-science",
    title: "Foundation of Data Science",
    duration: "June 2025 – August 2025",
    issuer: "Sri Vensy Technologies Pvt. Ltd.",
    badge: "Verified Certification",
    description:
      "Rigorous program covering core principles of data analysis, exploratory data analysis (EDA), data cleaning, statistical modeling, and structured problem-solving.",
    link: "https://drive.google.com/file/d/1j_bcIeGjASsoeLbsv94EcIskz0Snl8lJ/view?usp=drive_link",
    skills: ["Data Analytics", "Statistical Foundations", "Data Cleaning", "Problem Solving"],
  },
  {
    id: "python-ai",
    title: "Advanced Python Programming with AI",
    duration: "Professional Credential",
    issuer: "SISGA Soft Technologies Pvt. Ltd.",
    badge: "Specialized Training",
    description:
      "Hands-on program in advanced Python programming paradigms, object-oriented software engineering, REST API integrations, and AI-assisted development workflows.",
    skills: ["Advanced Python", "OOP", "AI-Assisted Coding", "Backend Systems"],
  },
  {
    id: "azure-cloud",
    title: "Azure Cloud",
    duration: "Cloud Fundamentals Credential",
    issuer: "Microsoft Azure Fundamentals Training",
    badge: "Verified Credential",
    description:
      "Fundamental understanding of cloud architecture, compute resources, virtual networking, Azure Resource Manager (ARM), security controls, and IAM policies.",
    link: "https://drive.google.com/file/d/19Hck9BBRMHgynxfLmwxOxCkqt0MGosS5/view?usp=sharing",
    skills: ["Cloud Architecture", "Azure Services", "Security & IAM", "Resource Management"],
  },
  {
    id: "mongodb",
    title: "MongoDB Database Foundations",
    duration: "Database Credential",
    issuer: "MongoDB Professional Foundations",
    badge: "Learning Credential",
    description:
      "Foundational mastery of document-oriented databases, schema design for NoSQL, CRUD operations, indexing strategies, and aggregation queries.",
    skills: ["NoSQL", "Document Modeling", "CRUD Operations", "Aggregation"],
  },
];

export const PROJECT_BASED_EXPERIENCE = {
  title: "Zoho CRM Developer — Project-Based Experience",
  type: "Project-Based Experience",
  subtitle: "Practical Solutions for Real-World Commercial Architectures",
  period: "2024 – Present",
  overview:
    "Dedicated hands-on technical experience architecting end-to-end CRM solutions, custom Deluge business logic, Client Script (ZDK/JS) front-end automation, and REST API data pipelines for real-world enterprise use cases.",
  responsibilities: [
    "Configured custom CRM modules, fields, multi-layout forms, and relational lookup connections.",
    "Developed robust Deluge scripts for business automation, pricing computation, and webhook triggers.",
    "Implemented Client Script using ZDK/JavaScript for real-time form validation and dynamic UI control.",
    "Designed CRM Workflows and multi-stage guided Blueprints enforcing compliance across pipeline stages.",
    "Automated quotation creation, inventory states (Available → Blocked → Sold), sales, and service cycles.",
    "Configured Price Books, installment Payment Plans, dynamic discounts, and statutory GST calculations.",
    "Engineered comprehensive CRM business logic translating commercial rules into technical modules.",
    "Practiced REST API integrations connecting external data streams and database tables with CRM records.",
    "Developed robust architectures for PropTech, B2B medical equipment distribution, and automotive retail.",
  ],
};
