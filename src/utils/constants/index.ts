import HTML from "../../assests/images/html.png";
import CSS from "../../assests/images/css.png";
import JS from "../../assests/images/jslogo.png";
import REACT from "../../assests/images/react.png";
import MUI from "../../assests/images/mui.png";
import SASS from "../../assests/images/sass.png";
import TYPESCRIPT from "../../assests/images/tslogo.png";
import NODEJS from "../../assests/images/node.png";
import MYSQL from "../../assests/images/sql.png";
import MONGODB from "../../assests/images/mongodb.png";
import STYLEDCOMPONENTS from "../../assests/images/styled-components.png";
import RVS from "../../assests/images/rvs.jpg";
import SCHOOL from "../../assests/images/school.jpg";
import AEQUALIS from "../../assests/images/aequalisys.png";
import AMAZON from "../../assests/images/amazon.jpg";
import SHOPPING_SITE from "../../assests/images/shopping-site.png";
import COLLEGE_SITE from "../../assests/images/college-site.png";
import STREAMING_SITE from "../../assests/images/streaming-site.png";
import HOTEL_SITE from "../../assests/images/hotel-site.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import GRAPHQL from "../../assests/images/graphql.png";
import REST_API from "../../assests/images/rest-api.png";
import { Theme } from "@mui/material/styles";

export const generateUniqueId = () =>
  "id_" + Date.now() + String(Math.random()).substr(2);

export const EducationDetails = [
  {
    id: generateUniqueId(),
    education: "BE - Civil Engineering",
    place: "Rvs Technical Campus - Coimbatore",
    percentage: "6.47 CGPA",
    description:
      "Obtained a Bachelor's degree in Civil Engineering with a focus on structural analysis and design, completed from 2014-2018.",
    icon: RVS,
  },
  {
    id: generateUniqueId(),
    education: "12th Grade",
    place: "GBHSS - Pattukkottai",
    percentage: "83%",
    description:
      "Completed 12th grade with a focus on Mathematics and Computer Science in 2014 from GBHSS, Pattukkottai, Thanjavur.",
    icon: SCHOOL,
  },
  {
    id: generateUniqueId(),
    education: "10th Grade",
    place: "GBHSS - Pattukkottai",
    percentage: "77.2%",
    description:
      "Completed 10th grade with a focus on Mathematics and Science from the State Board in 2012 from GBHSS, Pattukkottai, Thanjavur.",
    icon: SCHOOL,
  },
];

export const Experience = [
  {
    id: generateUniqueId(),
    companyName: "Aequalis Software Solutions",
    role: "Junior Software Developer",
    location: "Chennai",
    duration: "May 2022 - Present",
    description:
      "Managed content creation and delivery for web applications, leveraging React and TypeScript to interact with APIs and optimize delivery through thorough quality checks and adherence to technical specifications.",
    icon: AEQUALIS,
  },
  {
    id: generateUniqueId(),
    companyName: "Amazon Developement Center",
    role: "Print Quality Assurance Associate",
    location: "Chennai",
    duration: "Jul 2019 - Dec 2020",
    description:
      "Responsible for checking the quality of the content and also to check the content whether it meet the criteria of the process",
    icon: AMAZON,
  },
];

export const FrontEndSkills = [
  {
    id: generateUniqueId(),
    skill: "TypeScript",
    logo: TYPESCRIPT,
  },
  {
    id: generateUniqueId(),
    skill: "React",
    logo: REACT,
  },
  {
    id: generateUniqueId(),
    skill: "Rest API",
    logo: REST_API,
  },
  {
    id: generateUniqueId(),
    skill: "JavaScript",
    logo: JS,
  },
  {
    id: generateUniqueId(),
    skill: "Material UI",
    logo: MUI,
  },
  {
    id: generateUniqueId(),
    skill: "Styled Components",
    logo: STYLEDCOMPONENTS,
  },
  {
    id: generateUniqueId(),
    skill: "SASS",
    logo: SASS,
  },
  {
    id: generateUniqueId(),
    skill: "CSS",
    logo: CSS,
  },
  {
    id: generateUniqueId(),
    skill: "HTML",
    logo: HTML,
  },
];

export const BackEndSkills = [
  {
    id: generateUniqueId(),
    skill: "Node JS",
    logo: NODEJS,
  },
  {
    id: generateUniqueId(),
    skill: "MongoDB",
    logo: MONGODB,
  },
  {
    id: generateUniqueId(),
    skill: "MySQL",
    logo: MYSQL,
  },
  {
    id: generateUniqueId(),
    skill: "GraphQL",
    logo: GRAPHQL,
  },
];

export const ProjectsData = [
  {
    id: generateUniqueId(),
    title: "Shopping Website",
    image: SHOPPING_SITE,
    description:
      "Users can create account and add products of their wish.All the products are categorized for better user experience.Also users can add quantities as they wish and they can switch colors available for the particular product.Users can only add products after login to their respective account.",
    link: "https://ts-project-f3354.web.app",
    tech: ["HTML", "CSS", "Javascript", "React", "Node Js", "MongoDB"],
  },
  {
    id: generateUniqueId(),
    title: "Streaming Website",
    image: STREAMING_SITE,
    description:
      "Users can see newly released movies list and also they can watch the trailer of it here.Users can check movies of different categories and also they can search movies based on genre.",
    link: "https://photosearchapp.web.app/",
    tech: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Styled Components",
      "TMDB API",
    ],
  },
  {
    id: generateUniqueId(),
    title: "Hotel Site",
    image: HOTEL_SITE,
    description:
      "Simple hotel website layout where users can get detials about particular hotel and also theri special dishes.This site also have the section for comments from users.",
    link: "https://restaurantwebsite-ts.web.app/",
    tech: ["HTML", "CSS", "Javascript"],
  },
  {
    id: generateUniqueId(),
    title: "College Website",
    image: COLLEGE_SITE,
    description:
      "This site has sections where users can get details about the courses provided from this college and they can visit their gallery page to check activities happening internally and also user can send message to contact them.",
    link: "https://collegewebsite-ts.web.app/",
    tech: ["HTML", "CSS", "Javascript", "Bootstrap"],
  },
];

export const useCustomView = () =>
  useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

/* Social Links */
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/thamarai-selvan-851068164/";
export const INSTAGRAM_URL = "https://www.instagram.com/gtselvam";
export const GITHUB_URL = "https://github.com/gtcelvam";
export const RESUME_URL =
  "https://drive.google.com/file/d/1r-w0yg_XBKywH2mKtcfCdG-0h2QC-1rC/view?usp=sharing";
