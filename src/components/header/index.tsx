import { useEffect, useState,useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { RootState } from "../../utils/slice/configureStore";
import { setTheme } from "../../utils/slice/themeSlice";
import S from "./header.style";

const Header = () => {
  //Constructors
  const {theme,navActive} = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  //state values
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scrollOn, setScrollOn] = useState(false);
  const NavListRef = useRef<HTMLUListElement | null>(null);

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
    scrollHeight >= 50 ? setScrollOn(true) : setScrollOn(false);
  }, [scrollHeight]);

  useEffect(() => {
    if (NavListRef.current) {
      let list:HTMLCollection = NavListRef.current?.children;
      list && Array.from(list).forEach((item) => {
        let element = item.children[0] as HTMLElement
        let isActive = element.innerHTML.toLowerCase() === navActive.toLocaleLowerCase();
        isActive ? element.classList.add('navActive') : element.classList.remove('navActive');
      })
    }
  },[navActive])

  return (
    <S.HeaderContainer scrollOn={scrollOn}>
      <S.Name>Thamarai Selvan</S.Name>
      <S.NavUnorderList ref={NavListRef}>
        <S.NavListItem><a href="#home">Home</a></S.NavListItem>
        <S.NavListItem><a href="#portfolio">Portfolio</a></S.NavListItem>
        <S.NavListItem><a href="#resume">Resume</a></S.NavListItem>
        <S.NavListItem><a href="#contact">Contact</a></S.NavListItem>
      </S.NavUnorderList>
      <S.ThemeSwitcherContainer onClick={handleTheme}>
        {theme === "dark" ? <WbSunnyIcon /> : <DarkModeIcon />}
      </S.ThemeSwitcherContainer>
    </S.HeaderContainer>
  );
};

export default Header;
