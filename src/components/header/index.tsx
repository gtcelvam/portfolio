import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { RootState } from "../../utils/slice/configureStore";
import { setTheme } from "../../utils/slice/themeSlice";
import S from "./header.style";

const Header = () => {
  //Constructors
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  //state values
  const [scrollHeight, setScrollHeight] = useState(200);
  const [scrollOn, setScrollOn] = useState(false);

  //constants
  let minHeight = 200;

  //functions
  const handleTheme = () => {
    dispatch(setTheme(theme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const changeScroll = () => {
      setScrollHeight(window.scrollY)
    };
    window.addEventListener("scroll", changeScroll);
    return () => {
      window.removeEventListener("scroll", changeScroll);
    };
  }, []);

  useEffect(() => {
    scrollHeight > 50 ? setScrollOn(true) : setScrollOn(false);
  },[scrollHeight])

  return (
    <S.HeaderContainer scrollOn={scrollOn}>
      <S.Name>Thamarai Selvan</S.Name>
      <S.NavUnorderList>
        <S.NavListItem>Home</S.NavListItem>
        <S.NavListItem>Features</S.NavListItem>
        <S.NavListItem>Resume</S.NavListItem>
        <S.NavListItem>Contact</S.NavListItem>
      </S.NavUnorderList>
      <S.ThemeSwitcherContainer onClick={handleTheme}>
        {theme === "dark" ? <WbSunnyIcon /> : <DarkModeIcon />}
      </S.ThemeSwitcherContainer>
    </S.HeaderContainer>
  );
};

export default Header;
