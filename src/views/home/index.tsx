import React from 'react'
import { ThemeProvider } from '@mui/material';
import Header from '../../components/header'
import LandingSection from '../../components/landing';
import { getTheme } from '../../utils/theme/createTheme';
import { createTheme } from "@mui/material/styles";
import { useSelector } from 'react-redux/es/exports';
import { RootState } from '../../utils/slice/configureStore';
import S from './home.style'

const Home = () => {
  const themeDesign: any = useSelector((state: RootState) => state.theme.theme);
  const theme = createTheme(getTheme(themeDesign as any) as any);

  return (
    <ThemeProvider theme={theme}>
      <S.HomeContainer>
        <Header />
        <LandingSection />
      </S.HomeContainer>
    </ThemeProvider>

  )
}

export default Home