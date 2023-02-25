import HTML from '../../assests/images/html.png';
import CSS from '../../assests/images/css.png';
import JS from '../../assests/images/jslogo.png';
import REACT from '../../assests/images/react.png';
import MUI from '../../assests/images/mui.png';
import SASS from '../../assests/images/sass.png';
import TYPESCRIPT from '../../assests/images/tslogo.png';
import NODEJS from '../../assests/images/node.png';
import MYSQL from '../../assests/images/sql.png';
import MONGODB from '../../assests/images/mongodb.png';
import STYLEDCOMPONENTS from '../../assests/images/styled-components.png';

export const generateUniqueId = () =>
  "id_" + Date.now() + String(Math.random()).substr(2);

export const EducationDetails = [
  {
    id: generateUniqueId(),
    education: "BE - Civil Engineering",
    place: "Rvs Technical Campus - Coimbatore",
    percentage: "6.47 CGPA",
    description: "lorem ipusm",
  },
  {
    id: generateUniqueId(),
    education: "12th Grade",
    place: "GBHSS - Pattukkottai",
    percentage: "83%",
    description: "lorem ipusm",
  },
  {
    id: generateUniqueId(),
    education: "10th Grade",
    place: "GBHSS - Pattukkottai",
    percentage: "77.2%",
    description: "lorem ipsume",
  },
];

export const Experience = [
  {
    id: generateUniqueId(),
    companyName: "Aequalis Software Solutions",
    role: "Junior Software Developer",
    location: "Chennai",
    duration: "May 2022 - Present",
  },
  {
    id: generateUniqueId(),
    companyName: "Amazon Developement Center",
    role: "Print Quality Assurance Associate",
    location: "Chennai",
    duration: "Jul 2019 - Dec 2020",
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
];
