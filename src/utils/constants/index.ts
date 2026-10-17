import HTML from "../../assests/images/html.png";
import CSS from "../../assests/images/css.png";
import JS from "../../assests/images/jslogo.png";
import REACT from "../../assests/images/react.png";
import MUI from "../../assests/images/mui.png";
import SASS from "../../assests/images/sass.png";
import TYPESCRIPT from "../../assests/images/tslogo.png";
import NEXTJS from "../../assests/images/nextlogo.png";
import NODEJS from "../../assests/images/node.png";
import MYSQL from "../../assests/images/sql.png";
import MONGODB from "../../assests/images/mongodb.png";
import STYLEDCOMPONENTS from "../../assests/images/styled-components.png";
import RVS from "../../assests/images/rvs.jpg";
import SCHOOL from "../../assests/images/school.jpg";
import AEQUALIS from "../../assests/images/aequalisys.png";
import AMAZON from "../../assests/images/amazon.jpg";
import APPINESS from "../../assests/images/appiness.jpg";
import SHOPPING_SITE from "../../assests/images/shopping-site.png";
import COLLEGE_SITE from "../../assests/images/college-site.png";
import STREAMING_SITE from "../../assests/images/streaming-site.png";
import HOTEL_SITE from "../../assests/images/hotel-site.png";
import WEATHER_APP from "../../assests/images/ts-weather-app.png";
import GRAPHQL from "../../assests/images/graphql.png";
import REST_API from "../../assests/images/rest-api.png";
import AVATAR from "../../assests/images/avatar.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material/styles";

export const profileID = "6424756d6531409d24093d10";

export const DEFAULT_PROFILE = {
  name: "Thamarai Selvan",
  role: "Full-Stack & Frontend Developer",
  image: AVATAR,
  description:
    "Passionate Frontend & Full-Stack Software Developer specializing in React.js, Next.js, TypeScript, and Node.js. Experienced in architecting scalable e-commerce platforms, high-performance web applications, and intuitive user interfaces.",
};

export const EducationDetails = [
  {
    id: "edu-1",
    education: "B.E. — Civil Engineering",
    place: "RVS Technical Campus, Coimbatore",
    percentage: "6.47 CGPA",
    description:
      "Completed Bachelor of Engineering with a strong foundation in analytical problem-solving, structural modeling, and quantitative engineering principles (2014 – 2018).",
    icon: RVS,
  },
  {
    id: "edu-2",
    education: "Higher Secondary (12th Grade)",
    place: "GBHSS — Pattukkottai, Thanjavur",
    percentage: "83%",
    description:
      "Specialized in Mathematics and Computer Science with distinction in programming fundamentals (2014).",
    icon: SCHOOL,
  },
  {
    id: "edu-3",
    education: "Secondary School (10th Grade)",
    place: "GBHSS — Pattukkottai, Thanjavur",
    percentage: "77.2%",
    description:
      "Completed State Board Secondary Education with a focus on Mathematics and Science (2012).",
    icon: SCHOOL,
  },
];

export const Experience = [
  {
    id: "exp-1",
    companyName: "Appiness Interactive",
    role: "Software Developer — Web",
    location: "Bengaluru",
    duration: "July 2023 – Present",
    startDate: "2023-07-01",
    endDate: "present",
    description:
      "Architecting and scaling high-performance e-commerce and web platforms using Next.js, React.js, and TypeScript with integrated Razorpay payment workflows, SSR SEO optimization, and dynamic routing.",
    summary:
      "Architecting and scaling high-performance e-commerce and web platforms using Next.js, React.js, and TypeScript with integrated Razorpay payment workflows, SSR SEO optimization, and dynamic routing.",
    icon: APPINESS,
    image: APPINESS,
  },
  {
    id: "exp-2",
    companyName: "Aequalis Software Solutions",
    role: "Junior Software Developer",
    location: "Chennai",
    duration: "May 2022 – May 2023",
    startDate: "2022-05-01",
    endDate: "2023-05-01",
    description:
      "Built responsive React and TypeScript web modules, decentralized exchange (DEX) interfaces, and REST/GraphQL data integrations with strict code quality standards.",
    summary:
      "Built responsive React and TypeScript web modules, decentralized exchange (DEX) interfaces, and REST/GraphQL data integrations with strict code quality standards.",
    icon: AEQUALIS,
    image: AEQUALIS,
  },
  {
    id: "exp-3",
    companyName: "Amazon Development Centre",
    role: "Quality Assurance Associate",
    location: "Chennai",
    duration: "Jul 2019 – Dec 2020",
    startDate: "2019-07-01",
    endDate: "2020-12-01",
    description:
      "Led end-to-end content and UI quality validation, regression checks, and process compliance across high-volume production pipelines.",
    summary:
      "Led end-to-end content and UI quality validation, regression checks, and process compliance across high-volume production pipelines.",
    icon: AMAZON,
    image: AMAZON,
  },
];

export const FrontEndSkills = [
  { id: "fe-1", name: "Next.js", skill: "Next.js", image: NEXTJS, logo: NEXTJS, experience: "Advanced", backend: false },
  { id: "fe-2", name: "TypeScript", skill: "TypeScript", image: TYPESCRIPT, logo: TYPESCRIPT, experience: "Advanced", backend: false },
  { id: "fe-3", name: "React.js", skill: "React.js", image: REACT, logo: REACT, experience: "Advanced", backend: false },
  { id: "fe-4", name: "JavaScript (ES6+)", skill: "JavaScript", image: JS, logo: JS, experience: "Advanced", backend: false },
  { id: "fe-5", name: "Material UI", skill: "Material UI", image: MUI, logo: MUI, experience: "Advanced", backend: false },
  { id: "fe-6", name: "REST APIs", skill: "REST APIs", image: REST_API, logo: REST_API, experience: "Advanced", backend: false },
  { id: "fe-7", name: "Styled Components", skill: "Styled Components", image: STYLEDCOMPONENTS, logo: STYLEDCOMPONENTS, experience: "Intermediate", backend: false },
  { id: "fe-8", name: "Sass / SCSS", skill: "SASS", image: SASS, logo: SASS, experience: "Advanced", backend: false },
  { id: "fe-9", name: "CSS3", skill: "CSS3", image: CSS, logo: CSS, experience: "Advanced", backend: false },
  { id: "fe-10", name: "HTML5", skill: "HTML5", image: HTML, logo: HTML, experience: "Advanced", backend: false },
];

export const BackEndSkills = [
  { id: "be-1", name: "Node.js", skill: "Node.js", image: NODEJS, logo: NODEJS, experience: "Intermediate", backend: true },
  { id: "be-2", name: "MongoDB", skill: "MongoDB", image: MONGODB, logo: MONGODB, experience: "Intermediate", backend: true },
  { id: "be-3", name: "GraphQL", skill: "GraphQL", image: GRAPHQL, logo: GRAPHQL, experience: "Intermediate", backend: true },
  { id: "be-4", name: "MySQL / SQL", skill: "MySQL", image: MYSQL, logo: MYSQL, experience: "Intermediate", backend: true },
];

export const ProjectsData = [
  {
    id: "proj-1",
    name: "Real-Time Weather Forecast App",
    title: "Weather App",
    image: WEATHER_APP,
    description:
      "Interactive weather intelligence web app providing live conditions, 12-hour hourly breakdowns, and 7-day forecasts with location search.",
    projectLink: "https://ts-test-weather-app.netlify.app",
    repositoryLink: "https://github.com/gtcelvam",
    link: "https://ts-test-weather-app.netlify.app",
    techStack: ["Next.js", "TypeScript", "React", "CSS3"],
    tech: ["Next.js", "TypeScript", "React", "CSS3"],
  },
  {
    id: "proj-2",
    name: "Full-Stack E-Commerce Storefront",
    title: "Shopping Website",
    image: SHOPPING_SITE,
    description:
      "Authenticated e-commerce platform featuring categorized product discovery, dynamic color/quantity selection, and persistent user wishlists & carts.",
    projectLink: "https://ts-project-f3354.web.app",
    repositoryLink: "https://github.com/gtcelvam",
    link: "https://ts-project-f3354.web.app",
    techStack: ["React", "Node.js", "MongoDB", "JavaScript"],
    tech: ["React", "Node.js", "MongoDB", "JavaScript"],
  },
  {
    id: "proj-3",
    name: "Cinema & Trailer Streaming Hub",
    title: "Streaming Website",
    image: STREAMING_SITE,
    description:
      "On-demand movie discovery and trailer streaming application powered by TMDB API with genre filtering and real-time search.",
    projectLink: "https://photosearchapp.web.app/",
    repositoryLink: "https://github.com/gtcelvam",
    link: "https://photosearchapp.web.app/",
    techStack: ["React", "Styled Components", "TMDB API", "JavaScript"],
    tech: ["React", "Styled Components", "TMDB API", "JavaScript"],
  },
  {
    id: "proj-4",
    name: "Hospitality & Dining Showcase",
    title: "Hotel Site",
    image: HOTEL_SITE,
    description:
      "Modern hospitality portal highlighting curated signature dishes, room amenities, and interactive guest review sections.",
    projectLink: "https://restaurantwebsite-ts.web.app/",
    repositoryLink: "https://github.com/gtcelvam",
    link: "https://restaurantwebsite-ts.web.app/",
    techStack: ["HTML5", "CSS3", "JavaScript"],
    tech: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: "proj-5",
    name: "University & Campus Portal",
    title: "College Website",
    image: COLLEGE_SITE,
    description:
      "Comprehensive academic web portal featuring course catalogs, campus event galleries, and direct student inquiry workflows.",
    projectLink: "https://collegewebsite-ts.web.app/",
    repositoryLink: "https://github.com/gtcelvam",
    link: "https://collegewebsite-ts.web.app/",
    techStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
  },
];

export const useCustomView = () =>
  useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

export const LINKEDIN_URL = "https://www.linkedin.com/in/thamarai-selvan-851068164/";
export const INSTAGRAM_URL = "https://www.instagram.com/gtselvam";
export const GITHUB_URL = "https://github.com/gtcelvam";
export const RESUME_URL = "https://drive.google.com/file/d/1NO-ybwSxkxOGmNCmHQu1IJDsRtm-xnw5/view?usp=sharing";
