import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import Header from "../../components/header";
import LandingSection from "../../components/landing";
import PortfolioSection from "../../components/portfolio";
import ResumeSection from "../../components/resume";
import ContactSection from "../../components/contact";
import Footer from "../../components/footer";
import { getTheme } from "../../utils/theme/createTheme";
import { RootState } from "../../utils/slice/configureStore";
import S from "./home.style";

const Home = () => {
  const themeDesign = useSelector((state: RootState) => state.theme.theme);
  const theme = createTheme(getTheme(themeDesign));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
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
