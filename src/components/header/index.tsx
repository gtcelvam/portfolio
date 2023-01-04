import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { RootState } from '../../utils/slice/configureStore';
import { setTheme } from '../../utils/slice/themeSlice';
import Button from '@mui/material/Button';
import S from './header.style';


const Header = () => {
  const theme = useSelector((state:RootState)=>state.theme.theme);
  const dispatch = useDispatch();
  
  const handleTheme = ()=>{
    dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <S.HeaderContainer>
        <S.Name>Thamarai Selvan</S.Name>
        <S.NavUnorderList>
          <S.NavListItem>Home</S.NavListItem>
          <S.NavListItem>Features</S.NavListItem>
          <S.NavListItem>Resume</S.NavListItem>
          <S.NavListItem>Contact</S.NavListItem>
        </S.NavUnorderList>
        <S.ThemeSwitcherContainer onClick={handleTheme}>
        {theme === 'dark' ? <WbSunnyIcon/> : <DarkModeIcon/>}
        </S.ThemeSwitcherContainer>
    </S.HeaderContainer>
  )
}

export default Header;