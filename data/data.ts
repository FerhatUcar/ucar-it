import {
  BarChart2,
  BetweenHorizonalEndIcon,
  BookOpenIcon,
  Briefcase,
  Building,
  CameraIcon,
  CircleUserRound,
  Coffee,
  Facebook,
  Github,
  Home,
  Instagram,
  Laptop,
  Linkedin,
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
    text: "KVK 94029023",
  },
];

export const links = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: CircleUserRound },
  { label: "Work", href: "/work", icon: Briefcase },
  { label: "Skills", href: "/skills", icon: BarChart2 },
  { label: "Contact", href: "/contact", icon: Phone },
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
    image: "/travel.jpg",
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

export const workInformation = [
  {
    company: "Team Rockstars",
    date: "2021-Now",
    place: "Tilburg",
    title: "Software Engineer",
    text: "Discord Replica Project: Leveraging NextJS, React, and Tailwind CSS, I have successfully replicated the Discord platform. Registration is facilitated through OAuth providers, constructed with Clerk and NextAuth. Prisma structures and manages the data, which is securely stored on PlanetScale. As a member or administrator, you can establish servers and channels, enabling communication through chat and video calls with invited members. The real-time functionality is implemented using SocketIO. The project's dashboard is meticulously styled using Tailwind CSS and ShadCN. The deployment is executed seamlessly through Vercel.",
    text2:
      "Issue Tracker Web Application: I have developed an issue tracker web application reminiscent of Jira. Utilizing the OAuth Google Provider, users can seamlessly register and engage with the platform. The application enables users to create, edit, or delete tickets, with the flexibility to assign them to other users. The ticket data is meticulously organized using Prisma and securely stored on PlanetScale. Styling for the intuitive dashboard is achieved through the use of Tailwind CSS and RadixUI. The project is efficiently deployed and hosted on Vercel.",
    stack:
      "Stack: HTML5, NextJS, TypeScript, React, Tailwind CSS, Recoil/Zustand, React hook forms, Axios, SocketIO, Prisma, Vercel & PlanetScale.",
  },
  {
    company: "ASML",
    date: "2021-2023",
    place: "Veldhoven",
    title: "Software Engineer",
    text: "1 year: Contributed to web component development using Storybook, styled-components, and React within an agile team consisting of 7 developers. Demonstrated proficiency in test writing utilizing react-jest-library and Enzyme. Executed end-to-end testing with Cypress. Project planning was conducted through Jira, and version control was managed via BitBucket.",
    text2:
      "1.5 year: Transitioned to a more complex team after the first year, collaborating with team members to transform and visualize data through the construction of diverse graphs using React.",
    stack:
      "Stack: HTML5, Styled components, TypeScript, Immutable, Lodash, React, Redux & React hook forms, Cypress, Echarts, Enzyme, Jest & RTL, Docker, PostgreSQL, Express & Axios.",
  },
  {
    company: "Scanly BV",
    date: "2019-2022",
    place: "Rotterdam",
    title: "CO founder & Software Engineer",
    text:
      "Project management on the CMS and Front‑end. Head of marketing. Lead of infrastructure and Firebase functions\n" +
      "database. Developing a native app in Typescript, Angular and Cordova. Building the UI with Ionic. Designing\n" +
      "and building the app to the Apple App Store and Google PlayStore. Testing and support for back‑end development\n" +
      "in Python for object detection in TensorFlow. Deployed on Vercel.",
    text2:
      "With a rich background as a front-end developer, I've demonstrated proficiency in designing and implementing compelling user interfaces for a native app, showcasing a keen eye for both aesthetics and functionality. Collaborating closely with a single backend developer, I've successfully integrated frontend workflows into a streamlined DevOps process, ensuring the swift and dependable deployment of our native application.",
    text3:
      "My experience extends to managing the interface between frontend development and server infrastructure, implementing best practices in Infrastructure as Code (IaC) to optimize the efficiency of our development lifecycle. Working in tandem with a cross-functional team, I've effectively communicated and collaborated to foster a collaborative DevOps culture, leading to enhanced efficiency and a quicker turnaround in delivering our native app.",
    text4:
      "Beyond creating captivating user experiences, I've automated critical build processes, implemented robust testing strategies, and contributed to the overall reliability and performance of our native application through a DevOps-centric approach, even in a small team setting.",
    stack:
      "Stack: HTML5, SCSS, TypeScript, Angular, Ionic, Cordova, TensorFlow, Python, Xcode & Vercel.",
  },
  {
    company: "Eneco",
    date: "2021",
    months: "(3 months)",
    place: "Rotterdam",
    title: "Front-end Engineer",
    text: "Worked on the web components with Storybook, styled‑components andReact. In a team of 5 developers where we used the agile methodology to optimally improve the UI and user statistics.",
    stack:
      "Stack: HTML5, SCSS, TypeScript, Style Components, Storybook, React, Yalc, Enzyme & RTL.",
  },
  {
    company: "GZ Plein",
    date: "2021",
    months: "(3 months)",
    place: "Rotterdam",
    title: "Lead Front-end Engineer",
    text:
      "Set up a web application from scratch in React, Recoil and Web Components. The components are styled in\n" +
      "styled components, Material UI and SCSS. Made use of Axios and GraphQl for fetching data from/to back‑end.\n" +
      "The front‑end structure is set up in Barrel. Cooperated with the pipeline in Azure DevOps. Contributed to the\n" +
      "production of generated files in Swagger / OpenAPi 3. Experience with Piranha CMS. Concepts created\n" +
      "and designed in Adobe Xd. Agile methodology was used during the work.",
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
    text:
      "As an external I have temporarily replaced another developer. Here I have set up a documented, design system,\n" +
      "where I created global components with React. I have also been a good support in 2 platforms of KVK. The stack\n" +
      "mainly consists of React, Redux, Immutable.js, Node and .NET. REST API with GraphQl. The components within\n" +
      "the platforms are designed by styled components. The tests are written in Nightwatch. Worked with Gitlab (CI/\n" +
      "CD), Jira, Docker.",
    stack:
      "Stack: HTML5, Styled Components, React, Redux, Immutable.js, Node, GraphQl, Nightwatch, Enzyme, RTL, Gitlab\n" +
      "and Docker.",
  },
  {
    company: "Ministerie van Binnenlandse zaken",
    date: "2020-2021",
    place: "Zoetermeer",
    title: "Software Engineer & UX Designer",
    text:
      "Working on a large, scalable web application with TypeScript. Build with React and migrated state to Redux with\n" +
      "Redux toolkit. Using Material Design UI for its interface. Writing end‑to‑end tests with Cypress and\n" +
      "Cucumber. Love to use Lodash to work with data. Writing code with RxJS. Making designs with Adobe Xd and\n" +
      "Pencil. Having sessions with users for better user experience and accessibility. Using SCSS and styled\n" +
      "components. Writing Node/Express to connect front‑end with back‑end. Die hard Git user without tools. Experi-\n" +
      "enced with Jira, CI/CD, Confluence, BitBucket and Bamboo.",
    stack:
      "Stack: HTML5, SCSS, Styled Components, TypeScript, React, Redux (toolkit), Material UI, Cypress, Cu-\n" +
      "cumber, Lodash, RxJS, Git, Node, Express, Adobe Xd and Pencil.",
  },
  {
    company: "Calvi",
    date: "2018-2019",
    place: "Nederhemert Zuid",
    title: "Front-end Engineer & UX Designer",
    text:
      "Build own web component library. Using JSON to compile SCSS variable structure.\n" +
      "Frontend architecture with SMACSS, BEM or DoCSSa. CSS: Flex and Grid. Writing TypeScript to build OOP\n" +
      "applications in Angular 2+. Migrated AngularJS to Angular 2. Functional programming with RxJS. Used state ma-\n" +
      "nager with NGRX. Using Webpack as a task runner. Used GIT and Jira. Cross browser testing. Used NX workspace\n" +
      "to manage multiple apps in a single monorepo. Cypress/Cucumber for e2e‑testing. Jest for unit‑testing. Experi-\n" +
      "ence with Docker and CI/CD in Azure DevOps and Jenkins Making semantic written applications for better per-\n" +
      "formance and credible app, and accessibility. Designed icons in SVG in Illustrator for usability. Performed User\n" +
      "Research and information architecture. ‘Pre’ front‑ending with Adobe Xd, made clickable wireframes and visual\n" +
      "designs.",
    stack:
      "Stack: HTML5, SCSS, TS, Angular 2+, Bourbon, JSON, RxJS, NGRX, Webpack, Git, NX, Cypress, Cucumber, Doc-\n" +
      "ker, Azure DevOps, Jenkins and Adobe Xd.",
  },
  {
    company: "QI Press Controls",
    date: "2016-2018",
    place: "Oosterhout",
    title: "Lead Front-end Engineer",
    text:
      "HTML5, SCSS (Bourbon and Bootstrap 4). React en Context API. Front‑end architecture – SMACSS, BEM, DoCS-\n" +
      "Sa. Parsing JSON with HighchartsJS to build charts. Using Grunt as a task runner and NPM and Bower as a\n" +
      "package manager. Using Django to build front‑end web applications. Used Docker for its development environ-\n" +
      "ments. Version control with Git and Bitbucket. Used Jira to manage sprint board. Responsive design and\n" +
      "mobile first. Usability, accessibility and robot testing. Used 5 browsers to test web applications. Worked in Azure\n" +
      "DevOps for its CI/CD. Agile: Retro, daily standups and demo on every 2 weeks.",
    stack:
      "Stack: HTML5, SCSS, Django, React, HighCharts.js, Docker, Grunt, NPM, Bower and Git.",
  },
  {
    company: "eHealth Ventures Group",
    date: "2015-2016",
    place: "Oud Gastel",
    title: "Front-end Engineer",
    text:
      "HTML5, CSS3, SCSS (Bourbon and Neat), JS (jQuery & AngularJS) and PHP. Used Twig for template engine. SQL.\n" +
      "Frontend architecture – SMACSS, BEM, DoCSSa. Used Grunt first and migrated to Gulp after. Version control:\n" +
      "Git with Bitbucket. Used bower and NPM to manage packages. Worked with Vagrant. Mobile first and Responsive\n" +
      "design. Used Jira to manage sprint board. Cross browser and usability testing. Agile: Retro, daily standups and\n" +
      "demo on every 2 weeks.",
    stack:
      "Stack: HTML5, CSS3, JS, SCSS, jQuery, AngularJS, Bourbon, Neat, PHP, Twig, SQL, Gulp, Git, NPM and Vagrant.",
  },
  {
    company: "Bond for web solutions",
    date: "2014-2015",
    place: "Rotterdam",
    title: "Front-end Engineer",
    text:
      "HTML, SCSS, DNN & ASP.NET, JS (jQuery, AngularJS and GSAP Tweenlite). Bootstrap SASS with compass and\n" +
      "bourbon. Mobile first. Cross browser testing. SEO, Google Analytics and Google for business. Adobe Photoshop\n" +
      "& Adobe Illustrator. Mail‑chimp expert and testing newsletters with Litmus.",
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
    title: "React",
    src: "/react.png",
    percents: 99,
  },
  {
    title: "Angular",
    src: "/angular.png",
    percents: 70,
  },
  {
    title: "Node.js",
    src: "/node.png",
    percents: 77,
  },
  {
    title: "Python",
    src: "/python.png",
    percents: 35,
  },
  {
    title: "TypeScript",
    src: "/ts.png",
    percents: 95,
  },
  {
    title: "Next.js",
    src: "/next.png",
    percents: 90,
  },
  {
    title: "Tailwind",
    src: "/tailwind.png",
    percents: 98,
  },
  {
    title: "ShadCN",
    src: "/shadcn.png",
    percents: 99,
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
    percents: 83,
  },
  {
    title: "Azure Devops",
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
    logoWidth: 25
  },
];
