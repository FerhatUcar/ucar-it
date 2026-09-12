import { Facebook, Github, Instagram, Linkedin } from "@/components/ui/brand-icons";
import type { WorkDataType } from "@/app/types";
import {
  BarChart2,
  BetweenHorizonalEndIcon,
  BookOpenIcon,
  Briefcase,
  Building,
  CameraIcon,
  CircleUserRound,
  Coffee,
  Home,
  Laptop,
  Mail,
  MapPin,
  NotebookText,
  Pencil,
  Phone,
  Pizza,
  Plane,
  TrendingUpIcon,
  UserRound,
  Wrench,
  BriefcaseBusiness,
} from "lucide-react";

export const contactDetails = [
  {
    icon: Building,
    text: "Ucar IT",
  },
  {
    icon: MapPin,
    text: "Dordrecht, NL",
  },
  {
    icon: Phone,
    text: "+31628843263",
  },
  {
    icon: Mail,
    text: "info@ucar-it.nl",
  },
  {
    icon: NotebookText,
    text: "KVK: 93467699",
  },
];

export const links = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: CircleUserRound },
  { label: "Work", href: "/work", icon: Briefcase },
  { label: "Skills", href: "/skills", icon: BarChart2 },
  { label: "Projects", href: "/projects", icon: BriefcaseBusiness },
];

export const AboutParagraphs = [
  {
    title: "The person.",
    desc: "Who am I",
    icon: UserRound,
    text: "Meet Ferhat, a dynamic individual with a passion for technology, creativity, and a diverse set of skills that make them stand out in both the software development and design realms. As aseasoned software engineer and designer, Ferhat thrives on the ever-evolving landscape of technology",
    image: "/portrait.jpg",
  },
  {
    title: "Engineering.",
    desc: "What I do",
    icon: Wrench,
    text: "With over 10 years of experience as a Front-end Developer, I bring a wealth of expertise to SaaS, E-commerce, or similar product-oriented teams. My proficiency extends to a profound understanding of web and app development, coupled with a mastery of design systems. Collaboration is intrinsic to my work ethos; I derive satisfaction from guiding junior developers, actively participating in the hiring process, and welcoming like-minded future colleagues to the team.",
    text2:
      "My problem-solving abilities, grounded in strong analytical skills, allow me to swiftly identify and address complex issues. Additionally, I excel in time management, consistently meeting agreements and deadlines with precision.",
  },
  {
    title: "Trend.",
    desc: "Keeping up-to-date",
    icon: TrendingUpIcon,
    text: "My commitment to staying up-to-date with the latest trends and advancements ensures that my work is not only innovative but also at the forefront of industry standards. With a keen eye for detail and a knack for problem-solving, I craft software solutions that seamlessly blend functionality and aesthetics.",
  },
  {
    title: "Photographer.",
    desc: "Wanderlens",
    icon: CameraIcon,
    links: true,
    text: "In addition to my role as a software engineer, I wear multiple hats, including that of a skilled photographer and videographer. With proficiency in image editors such as Photoshop, Illustrator, and InDesign, I bring a creative touch to their projects, whether it’s designing user interfaces or capturing captivating moments through the lens.",
  },
  {
    title: "Traveller.",
    desc: "Stay and wander",
    icon: Plane,
    text: "Beyond the digital realm, I am a globetrotter who finds inspiration in diverse cultures and landscapes. My role as a photographer allows them to combine their love for technology with a passion for visual storytelling, while video editing further enhances their ability to convey compelling narratives.",
    image: "/ferry-sm.jpg",
  },
  {
    title: "Cooking.",
    desc: "Love for food",
    icon: Pizza,
    text: "Despite my busy professional life, I find joy in culinary pursuits. A cooking enthusiast, I love experimenting with flavors and creating delicious meals. At home, I play the role of a loving parent to their daughter, balancing the demands of work and family with grace. An avid movie buff, I enjoy the immersive experience of watching films in theaters.",
  },
  {
    title: "Coffee.",
    desc: "Good beans",
    icon: Coffee,
    text: "The combination of a compelling storyline and cinematic visuals is a source of relaxation and inspiration for me. And let’s not forget my love for coffee, which fuels my creative endeavors and adds an extra layer of enjoyment to each day.",
  },
  {
    title: "This is Ferhat.",
    desc: "In summary",
    icon: BookOpenIcon,
    text: "In summary, Ferhat is a multifaceted individual whose passion for technology, design, travel, and family enriches both my professional and personal life. My journey is a testament to the harmonious blend of creativity and technical expertise, makes me a truly unique and inspiring figure in the world of software engineering and design.",
  },
];

export const workInformation: WorkDataType[] = [
  {
    company: "NS",
    date: "Sep 2026-Now",
    current: true,
    status: "pending",
    place: "",
    title: "Upcoming assignment",
    text: "I’m starting a new assignment at NS. Project details will follow once the assignment begins.",
    stack: "",
  },
  {
    company: "Kadaster",
    date: "Sep 2025-Sep 2026",
    status: "completed",
    place: "",
    title: "Frontend Developer",
    text: "During a one-year assignment at Kadaster, I worked with Angular, Azure, Liferay CMS and the OneWelcome API, with a focus on accessibility in line with WCAG.",
    text2:
      "I also set up backend documentation for the payments service.",
    stack: "Stack: Angular, Azure, Liferay CMS, OneWelcome API, WCAG",
  },
  {
    company: "DHL eCommerce",
    date: "Sep 2024-Sep 2025",
    status: "completed",
    place: "Utrecht",
    title: "Frontend Developer",
    text: "At DHL eCommerce, I worked as a frontend developer on a native courier app built with React and Kotlin. The app was designed to work fully offline using local storage, allowing seamless CRUD operations in the field.",
    text2:
      "Data fetching and submission were handled using Tanstack Query, with validation through Zod and form management via React Hook Form. The app interfaced with native hardware like GPS, scanners, and cameras via the Honeywell scanner device.",
    text3:
      "On the backend, I’ve contributed to building and maintaining Spring Boot APIs, implemented REST endpoints, integrated Keycloak for authentication, and built Kafka producers/consumers for async data flows. I also wrote SQL for Oracle and PostgreSQL databases.",
    text4:
      "The entire platform ran in Docker containers, deployed to Kubernetes via Helm. We used JFrog for image management and monitored everything through Datadog and Sentry. I also implemented thorough E2E testing with Cypress and unit testing with Jest.",
    stack:
      "Stack: Figma, HTML5, TypeScript, React (Native), Tanstack Query, Zod, React Hook Form, Material UI, Storybook, Cypress, Jest, Keycloak, Java, Kotlin, Spring Boot, Docker, Kubernetes, Kafka, Oracle, PostgreSQL, JFrog, Helm, Azure DevOps, Datadog, Sentry",
  },
  {
    company: "Team Rockstars",
    date: "2021-2024",
    place: "Tilburg",
    title: "Software Engineer / UX Developer",
    text: "At Team Rockstars, I contributed to two major projects: a Discord-inspired communication platform and a Jira-like ticketing system. Both apps were built using Next.js with real-time functionality via Socket.IO.",
    text2:
      "Data management was handled with Prisma and stored in PlanetScale. Vercel was used for deployment. The UI was crafted using the ShadCN component library and Tailwind CSS, focusing on performance, usability, and scalability.",
    text3:
      "These projects strengthened my technical skills and deepened my understanding of building impactful, user-centered web applications.",
    stack:
      "Stack: HTML5, NextJS, ShadCN, TypeScript, React, Zod, Tailwind CSS, Recoil/Zustand, React Hook Form, Axios, Socket.IO, Prisma, Vercel & PlanetScale.",
  },
  {
    company: "ASML",
    date: "2021-2023",
    place: "Veldhoven",
    title: "Software Engineer",
    text: "At ASML, a global leader in photolithography machines for chip production, I contributed to frontend component development using React, Styled Components, and Storybook, within an agile team of seven developers.",
    text2:
      "Our workflow relied on test-driven development with React Testing Library, Enzyme, and Cypress. I later joined a core team focused on data transformation and visualization, building interactive charts and visual insights using Echarts and web components.",
    text3:
      "Tools like Jira and Bitbucket were used for project management, version control, and CI/CD. The experience sharpened both my technical depth and collaborative skills in a high-tech environment.",
    stack:
      "Stack: HTML5, Styled Components, TypeScript, Immutable, Lodash, React, Redux & React Hook Form, Cypress, Echarts, Enzyme, Jest & RTL, Docker, PostgreSQL, Express & Axios.",
  },
  {
    company: "Scanly BV",
    date: "2018-2022",
    place: "Rotterdam",
    title: "Co-founder & Lead Angular Software Engineer",
    text: "As co-founder and tech lead of a company developing machine learning camera solutions, I defined the product roadmap, led the engineering team, and oversaw all software delivery efforts.",
    text2:
      "I built and trained object detection models, created internal tools with Python/Flask, and managed the development of a hybrid mobile app using Angular and Cordova. UX was shaped using Adobe XD, Hotjar, and Google Analytics.",
    text3:
      "I applied Infrastructure as Code (Terraform), CI/CD, and scalable architecture to ensure performance and reliability. My role merged leadership, innovation, and hands-on frontend development.",
    stack:
      "Stack: HTML5, Tailwind, TypeScript, Angular, Ionic, NgRx, RxJs, Material UI, Cordova, Swift, TensorFlow, Python (Flask), Xcode, Terraform, Firebase, Adobe XD.",
  },
  {
    company: "Eneco",
    date: "2021",
    months: "(3 months)",
    place: "Rotterdam",
    title: "Front-end Engineer",
    text: "Eneco is a leading sustainable energy company, dedicated to driving the transition towards a more sustainable world. With a focus on renewable energy solutions, Eneco aims to empower individuals and businesses to make environmentally conscious choices.",
    text2:
      "Collaborated within a team of five developers to enhance web components using Storybook, styled-components, and React. Employed agile methodologies to iteratively refine the UI and analyze user statistics for optimal improvements.",
    stack:
      "Stack: HTML5, SCSS, TypeScript, Style Components, Storybook, React, Yalc, Enzyme & RTL.",
  },
  {
    company: "GZ Plein",
    date: "2021",
    months: "(3 months)",
    place: "Rotterdam",
    title: "Lead Front-end Engineer",
    text: "At GZ. Plein, I spearheaded a small but dynamic team focused on providing online assistance for mental health concerns. Taking the lead role, I led the development of a comprehensive platform from inception to deployment.",
    text2:
      "Our platform was designed to offer accessible support, training, and courses for individuals grappling with mental health or related issues. We meticulously crafted a user-friendly experience, allowing users to sign up for assistance seamlessly. Central to this effort was the integration of a headless CMS, which I adeptly connected to the front-end interface.",
    text3:
      "In addition to my technical responsibilities, I served as a crucial liaison between designers and our clients, ensuring that our platform's design aligned closely with user needs and expectations.",
    text4:
      "Our front-end architecture was built upon React, leveraging the efficiency and state management capabilities of Recoil. Styled Components were employed to maintain a consistent and visually appealing user interface throughout the platform.",
    text5:
      "My leadership and technical expertise were instrumental in the successful development and launch of the GZ. Plein platform, empowering individuals to access the support and resources they need for mental well-being.",
    stack:
      "Stack: HTML5, Styled Component, Material UI, React, Enzyme, RTL, Recoil, Axios, GraphQl, Barrel, Azure DevOps,\n" +
      "Swagger, OpenApi3, Piranha CMS and Adobe Xd",
  },
  {
    company: "Kamer van Koophandel",
    date: "2021",
    months: "(3 months)",
    place: "Rotterdam",
    title: "Front-end Engineer",
    text: "During my tenure as a temporary replacement at the Chamber of Commerce, I made significant contributions by efficiently delivering a multitude of projects within tight deadlines. One notable initiative I spearheaded was the proposal and implementation of a web component library.",
    text2:
      "Recognizing the need for streamlined development and consistent design across projects, I took the initiative to establish a comprehensive documentation and design system using React. This involved meticulous planning and execution to ensure the library met the organization's specific requirements and standards.",
    text3:
      "By setting up this web component library, I not only facilitated faster and more cohesive development but also fostered a culture of efficiency and consistency within the organization. My proactive approach and commitment to enhancing the Chamber of Commerce's digital infrastructure were instrumental in driving productivity and innovation during my tenure.",
    stack:
      "Stack: HTML5, Styled Components, React, Redux, Immutable.js, Node, GraphQl, Nightwatch, Enzyme, RTL, Gitlab\n" +
      "and Docker.",
  },
  {
    company: "Ministerie van Binnenlandse zaken",
    date: "2020-2021",
    place: "Zoetermeer",
    title: "Software Engineer & UX Designer",
    text: "This is a large public authority, located in Zoetermeer. I worked here on an audio platform where we utilized the Web Audio API. My role involved designing mocks and prototypes in Adobe XD, which I then translated into the frontend implementation, giving me complete control over the interface and user experience (UX).",
    text2:
      "In addition to this, I integrated Hotjar into our workflow, leveraging its capabilities to gain insights into user behavior and optimize the platform further. By analyzing heatmaps, recordings, and user feedback, I could refine our designs and features effectively.",
    text3:
      "Moreover, I authored end-to-end (e2e) tests in Cypress to ensure the interface's optimal performance with every new feature iteration. Additionally, I meticulously adhered to the standards of WCAG 2.1 A + AA to guarantee maximum accessibility for all users.",
    stack:
      "Stack: HTML5, SCSS, Styled Components, TypeScript, React, Redux (toolkit), Material UI, Cypress, Cu-\n" +
      "cumber, Lodash, RxJS, Git, Node, Express, Adobe Xd and Pencil.",
  },
  {
    company: "Calvi",
    date: "2018-2019",
    place: "Nederhemert Zuid",
    title: "Front-end Engineer & UX Designer",
    text: "Calvi is a leading provider of invoicing solutions tailored for large telecom corporations such as T-Mobile, KPN, and Vodafone. Within Calvi, I played a pivotal role in a transformative project, orchestrating the migration from AngularJS to Angular while concurrently spearheading the development of a comprehensive design system.",
    text2:
      "During this migration, I seamlessly transitioned designs into fully functional interfaces, ensuring a smooth user experience and optimal performance. This involved meticulous attention to detail and a deep understanding of both the legacy and modern frameworks.",
    text3:
      "Moreover, I took charge of managing and expanding the web components library, ensuring continuity and consistency across all interfaces. I diligently optimized the interface based on user feedback, leveraging insights from tools like Hotjar to refine the user experience continually.",
    text4:
      "My commitment to creating intuitive and user-friendly interfaces was evident throughout the project, as I prioritized usability and accessibility at every stage of development. Additionally, I actively promoted best practices within the UX/UI domain, fostering a culture of excellence and innovation within the team.",
    text5:
      "Overall, my contributions to the migration project, coupled with my dedication to UX/UI excellence at Calvi, have been instrumental in enhancing the platform's capabilities and user experience for our esteemed telecom clientele.",
    stack:
      "Stack: HTML5, SCSS, TS, Angular 2+, Bourbon, JSON, RxJS, NGRX, Webpack, Git, NX, Cypress, Cucumber, Doc-\n" +
      "ker, Azure DevOps, Jenkins and Adobe Xd.",
  },
  {
    company: "QI Press Controls",
    date: "2016-2018",
    place: "Oosterhout",
    title: "Lead Front-end Engineer",
    text: "At QI Press Controls, a leading provider of products and services for printing companies like de Telegraaf and DPG Media, I undertook the development of a comprehensive dashboard solution. Leveraging HighchartsJS, I engineered a dynamic dashboard interface that empowered users to visualize and analyze statistics derived from diverse printing devices.",
    text2:
      "My role encompassed not only the technical implementation but also liaising with stakeholders to understand their requirements and objectives. This collaborative approach ensured that the dashboard met the specific needs of the printing industry, facilitating informed decision-making and performance optimization.",
    text3:
      "By harnessing the capabilities of HighchartsJS, I enabled users to gain valuable insights into collected data, enhancing efficiency and productivity across print operations. My contribution to this project played a pivotal role in QI Press Controls' mission to provide cutting-edge solutions tailored to the unique challenges of the printing world.",
    stack:
      "Stack: HTML5, SCSS, Django, React, HighCharts.js, Docker, Grunt, NPM, Bower and Git.",
  },
  {
    company: "eHealth Ventures Group",
    date: "2015-2016",
    place: "Oud Gastel",
    title: "Front-end Engineer",
    text: "At the online drugstore, I spearheaded the implementation of a new, responsive payment interface aimed at enhancing user experience and streamlining the purchasing process. Collaborating closely with a designer, I meticulously analyzed the existing page layout to identify areas for improvement, particularly in mobile optimization.",
    text2:
      "Recognizing the outdated nature of the current page and its suboptimal performance on mobile devices, I initiated a comprehensive overhaul. This involved deconstructing the legacy HTML structure, which was predominantly PHP-based, and transitioning it to Twig. By modernizing the frontend templating language, I strengthened the connection between frontend and backend systems, facilitating smoother data exchange and improved functionality.",
    text3:
      "Throughout this process, I ensured alignment with the designer's vision, prioritizing user-centric design principles and seamless integration with backend processes. The result was a responsive payment interface that not only met the company's current needs but also positioned it for future scalability and growth in the competitive online marketplace.",
    stack:
      "Stack: HTML5, CSS3, JS, SCSS, jQuery, AngularJS, Bourbon, Neat, PHP, Twig, SQL, Gulp, Git, NPM and Vagrant.",
  },
  {
    company: "Bond for web solutions",
    date: "2014-2015",
    place: "Rotterdam",
    title: "Front-end Engineer",
    text: "My initial foray into the professional world began with my first employer, a small but dynamic company nestled within the vibrant network of Rotterdam. Here, I embarked on my journey of gaining invaluable work experience, engaging in diverse projects that encompassed website and application maintenance for a range of clientele.",
    text2:
      "Working closely with clients such as Alexadrium, Delifrance, and Electrolux, I cultivated strong one-on-one relationships, serving as a direct point of contact for their varied needs and requirements. This direct interaction not only honed my communication and interpersonal skills but also deepened my understanding of client expectations and preferences.",
    text3:
      "Within this dynamic environment, I navigated the intricacies of maintaining multiple websites and applications, each with its unique set of challenges and opportunities. Whether it was troubleshooting technical issues, implementing updates, or optimizing performance, I embraced each task with enthusiasm and dedication, contributing to the success and satisfaction of our clients.",
    text4:
      "My tenure at this first employer provided me with a solid foundation upon which to build my career, instilling in me a strong work ethic, adaptability, and a passion for delivering exceptional service and solutions to clients.",
    stack:
      "Stack: HTML, SCSS, DNN, ASP.NET, JS, jQuery, AngularJS, GSAP Tweenlite, Bootstraps SASS, Compass, Bourbon, Adobe Photoshop, Adobe Illustrator & MailChimp",
  },
];

export const socialMedia = [
  {
    link: "https://www.linkedin.com/in/ferhat-ucar-bb435283/",
    icon: Linkedin,
  },
  {
    link: "https://github.com/FerhatUcar",
    icon: Github,
  },
  {
    link: "https://www.instagram.com/ferrygraphy/",
    icon: Instagram,
  },
  {
    link: "https://www.facebook.com/ferhat.ucar.710/",
    icon: Facebook,
  },
];

export const services = [
  {
    title: "UI/UX",
    icon: Pencil,
    text:
      "As a seasoned web/software engineer, I specialize in creating\n" +
      "seamless and intuitive user experiences through my expertise in\n" +
      "UX/UI design. With a keen understanding of user behavior and a\n" +
      "meticulous eye for design, I ensure that every interface I craft not\n" +
      "only meets functional requirements but also delights users with an\n" +
      "aesthetically pleasing and user-friendly design.",
  },
  {
    title: "Front-end Engineering",
    icon: Laptop,
    text:
      "In the realm of front-end engineering, I excel in developing dynamic and responsive user interfaces that bring designs to life. " +
      "Proficient in modern front-end technologies such as HTML, CSS, and JavaScript frameworks, " +
      "I leverage my coding skills to optimize performance, enhance interactivity, and deliver engaging web applications that meet both client and user expectations.",
  },
  {
    title: "Back-end Engineering",
    icon: BetweenHorizonalEndIcon,
    text:
      "As a back-end engineer, I specialize in architecting robust and scalable server-side solutions to power web and software applications. " +
      "With expertise in backend languages like Node.js, Nest.js, or Python, " +
      "I design and implement efficient databases, APIs, and server logic to ensure the seamless functioning of applications, " +
      "emphasizing reliability, security, and optimal performance.",
  },
];

export const skills = [
  {
    title: "HTML",
    src: "/html.png",
    percents: 95,
    logoWidth: 28,
  },
  {
    title: "CSS",
    src: "/css.png",
    percents: 93,
    logoWidth: 28,
  },
  {
    title: "React",
    src: "/react.png",
    percents: 87,
  },
  {
    title: "Angular",
    src: "/angular.png",
    percents: 75,
  },
  {
    title: "Node.js",
    src: "/node.png",
    percents: 63,
  },
  {
    title: "Python",
    src: "/python.png",
    percents: 38,
  },
  {
    title: "TypeScript",
    src: "/ts.png",
    percents: 86,
  },
  {
    title: "Next.js",
    src: "/next.png",
    percents: 90,
  },
  {
    title: "Tailwind",
    src: "/tailwind.png",
    percents: 92,
  },
  {
    title: "ShadCN",
    src: "/shadcn.png",
    percents: 98,
    logoWidth: 30,
  },
  {
    title: "Ionic",
    src: "/ionic.png",
    percents: 91,
  },
  {
    title: "Prisma",
    src: "/prisma.png",
    percents: 78,
  },
  {
    title: "Docker",
    src: "/docker.png",
    logoWidth: 50,
    percents: 60,
  },
  {
    title: "MySQL",
    src: "/sql.png",
    logoWidth: 50,
    percents: 66,
  },
  {
    title: "Echarts",
    src: "/echarts.png",
    percents: 95,
  },
  {
    title: "Cypress",
    src: "/cypress.png",
    percents: 88,
  },
  {
    title: "Azure",
    subtitle: "Devops",
    src: "/azure.png",
    percents: 43,
    logoWidth: 40,
  },
  {
    title: "AWS",
    src: "/aws.png",
    percents: 30,
    logoWidth: 40,
  },
  {
    title: "Cordova",
    src: "/cordova.png",
    percents: 88,
  },
  {
    title: "Sentry",
    src: "/sentry.png",
    percents: 67,
  },
  {
    title: "Rabbit MQ",
    src: "/rabbitmq.png",
    percents: 44,
    logoWidth: 25,
  },
  {
    title: "Socket IO",
    src: "/socket.png",
    percents: 38,
  },
  {
    title: "Zod",
    src: "/zod.svg",
    percents: 90,
  },
  {
    title: "Swift",
    src: "/swift.png",
    percents: 22,
  },
];
