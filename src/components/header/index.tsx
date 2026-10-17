import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Box, IconButton, Drawer, Stack, Button } from "@mui/material";
import { RootState } from "../../utils/slice/configureStore";
import { setTheme, setNavActive } from "../../utils/slice/themeSlice";
import S from "./header.style";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Resume", id: "resume" },
  { label: "Contact", id: "contact" },
];

const Header = () => {
  const { theme, navActive } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  const [scrollOn, setScrollOn] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleTheme = () => {
    dispatch(setTheme(theme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const onScroll = () => {
      setScrollOn(window.scrollY >= 32);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <S.HeaderWrapper scrollOn={scrollOn}>
      <S.HeaderContainer scrollOn={scrollOn}>
        <S.Brand href="#home" onClick={() => dispatch(setNavActive("home"))}>
          THAMARAI<Box component="span" sx={{ color: "primary.main" }}>.DEV</Box>
        </S.Brand>

        <S.NavUnorderList>
          {NAV_ITEMS.map((item) => {
            const isActive = (navActive || "home").toLowerCase() === item.id;
            return (
              <S.NavListItem key={item.id}>
                <a
                  href={"#" + item.id}
                  className={isActive ? "navActive" : ""}
                  onClick={() => dispatch(setNavActive(item.id))}
                >
                  {item.label}
                </a>
              </S.NavListItem>
            );
          })}
        </S.NavUnorderList>

        <Stack direction="row" spacing={1} alignItems="center">
          <S.ThemeSwitcherBtn onClick={handleTheme} aria-label="Toggle color theme">
            {theme === "dark" ? <WbSunnyRoundedIcon fontSize="small" /> : <DarkModeRoundedIcon fontSize="small" />}
          </S.ThemeSwitcherBtn>

          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "text.primary" }}
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <MenuRoundedIcon />
          </IconButton>
        </Stack>
      </S.HeaderContainer>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 260,
            p: 3,
            bgcolor: "background.default",
            backgroundImage: "none",
          },
        }}
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
          <S.Brand href="#home">THAMARAI.DEV</S.Brand>
          <IconButton onClick={() => setMobileOpen(false)}>
            <CloseRoundedIcon />
          </IconButton>
        </Stack>
        <Stack spacing={1.5}>
          {NAV_ITEMS.map((item) => (
            <Button
              key={item.id}
              href={"#" + item.id}
              onClick={() => {
                dispatch(setNavActive(item.id));
                setMobileOpen(false);
              }}
              sx={{
                justifyContent: "flex-start",
                py: 1.25,
                px: 2,
                borderRadius: 2,
                color: navActive === item.id ? "primary.main" : "text.primary",
                bgcolor: navActive === item.id ? "rgba(99, 102, 241, 0.12)" : "transparent",
              }}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
      </Drawer>
    </S.HeaderWrapper>
  );
};

export default Header;
