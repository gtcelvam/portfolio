import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { RootState } from '../../utils/slice/configureStore';
import { setTheme } from '../../utils/slice/themeSlice';
import S from './header.style';


const Header = () => {
  const theme = useSelector((state:RootState)=>state.theme.theme);
  const dispatch = useDispatch();
  
  const handleTheme = ()=>{
    dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <S.HeaderContainer>
        <p>Header</p>
        <div onClick={handleTheme}>
        {theme === 'dark' ? <WbSunnyIcon/> : <DarkModeIcon/>}
        </div>
    </S.HeaderContainer>
  )
}

export default Header;