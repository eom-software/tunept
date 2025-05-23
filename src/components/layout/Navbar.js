import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useTheme,
  useMediaQuery,
  Fade,
  useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, alpha } from "@mui/material/styles";

const Logo = styled("img")(({ theme }) => ({
  height: "40px",
  marginRight: theme.spacing(2),
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.02)",
  },
}));

const NavButton = styled(Button)(({ theme, active }) => ({
  position: "relative",
  margin: theme.spacing(0, 1),
  padding: theme.spacing(1, 2),
  color: active ? theme.palette.primary.main : theme.palette.text.primary,
  fontWeight: active ? 600 : 500,
  "&::after": {
    content: '""',
    position: "absolute",
    width: active ? "100%" : "0%",
    height: "2px",
    bottom: 0,
    left: 0,
    backgroundColor: theme.palette.primary.main,
    transition: "width 0.3s ease-in-out",
  },
  "&:hover": {
    backgroundColor: "transparent",
    "&::after": {
      width: "100%",
    },
  },
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 12,
    marginTop: theme.spacing(1),
    minWidth: 180,
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    "& .MuiMenuItem-root": {
      padding: theme.spacing(1.5, 2),
      transition: "all 0.2s ease-in-out",
      "&:hover": {
        backgroundColor: alpha(theme.palette.primary.main, 0.08),
      },
    },
  },
}));

const pages = [
  { title: "Home", path: "/" },
  { title: "Services", path: "/services" },
  { title: "Contact", path: "/contact" },
  { title: "About", path: "/about" },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const handleScroll = () => {
    const isScrolled = window.scrollY > 20;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: scrolled
          ? alpha(theme.palette.background.paper, 0.9)
          : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "all 0.3s ease-in-out",
        borderBottom: scrolled
          ? `1px solid ${alpha(theme.palette.divider, 0.1)}`
          : "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 64, md: 80 },
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          {/* Logo for desktop */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              mr: 2,
            }}
          >
            <RouterLink to="/">
              <Logo
                src="https://i0.wp.com/tunedpt.com/wp-content/uploads/2025/01/TUNED-PT-LOGO-WHITE-BG-1-1.png?resize=768%2C204&ssl=1"
                alt="Tuned PT Logo"
              />
            </RouterLink>
          </Box>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
              sx={{
                p: 1,
                "&:hover": {
                  backgroundColor: alpha(theme.palette.primary.main, 0.08),
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <StyledMenu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              TransitionComponent={Fade}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.title}
                  onClick={handleCloseNavMenu}
                  component={RouterLink}
                  to={page.path}
                  selected={location.pathname === page.path}
                  sx={{
                    color:
                      location.pathname === page.path
                        ? "primary.main"
                        : "text.primary",
                    fontWeight: location.pathname === page.path ? 600 : 400,
                  }}
                >
                  <Typography textAlign="center">{page.title}</Typography>
                </MenuItem>
              ))}
            </StyledMenu>
          </Box>

          {/* Logo for mobile */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              justifyContent: "center",
            }}
          >
            <RouterLink to="/">
              <Logo
                src="https://i0.wp.com/tunedpt.com/wp-content/uploads/2025/01/TUNED-PT-LOGO-WHITE-BG-1-1.png?resize=768%2C204&ssl=1"
                alt="Tuned PT Logo"
                style={{ height: "32px" }}
              />
            </RouterLink>
          </Box>

          {/* Desktop menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {pages.map((page) => (
              <NavButton
                key={page.title}
                component={RouterLink}
                to={page.path}
                onClick={handleCloseNavMenu}
                active={location.pathname === page.path}
              >
                {page.title}
              </NavButton>
            ))}
            <Button
              variant="contained"
              color="primary"
              sx={{
                ml: 2,
                px: 3,
                py: 1,
                borderRadius: 2,
                boxShadow: "none",
                "&:hover": {
                  boxShadow: "0 4px 12px rgba(37, 99, 235, 0.2)",
                },
              }}
            >
              Book Now
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
