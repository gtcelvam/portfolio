import { ThemeProvider } from "@mui/material";
import Header from "../../components/header";
import LandingSection from "../../components/landing";
import { getTheme } from "../../utils/theme/createTheme";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux/es/exports";
import { RootState } from "../../utils/slice/configureStore";
import S from "./home.style";
import PortfolioSection from "../../components/portfolio";
import ResumeSection from "../../components/resume";
import ContactSection from "../../components/contact";
import Footer from "../../components/footer";

const Home = () => {
  const themeDesign: any = useSelector((state: RootState) => state.theme.theme);
  const theme = createTheme(getTheme(themeDesign as any) as any);
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <S.HomeContainer>
        <LandingSection />
        <PortfolioSection />
        <ResumeSection />
        <ContactSection />
        <Footer />
      </S.HomeContainer>
    </ThemeProvider>
  );
};

export default Home;
