import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import InstagramIcon from "@mui/icons-material/Instagram";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import NightCookiesLogo from "../assets/ncLogo.png";
import Link from "@mui/material/Link";
import { Modal } from "@mui/material";

const pages = ["Order Cookies", "Press"];

const ResponsiveAppBar = () => {

const [hamburger, setHamburger] = useState(false)
const [menu, setMenu] = useState(true)

const OpenMenu = () => {
  setHamburger(() => !hamburger);
  setMenu(() => !menu)
}


  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <NavLink activesyle="none" to="/">
              <img src={NightCookiesLogo} alt="logo" className="logo"></img>
            </NavLink>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              {/* <IconButton size="large" edge="end" color="inherit"> */}
              {/* <MenuIcon sx={{ fontSize: 45, color: "#61C7C3" }} /> */}
              {/* <Hamburder /> */}
              <div
                onClick={OpenMenu}
                className={
                  hamburger
                    ? "hamburger hamburger--collapse is-active"
                    : "hamburger hamburger--collapse"
                }
                type="button"
              >
                <div className="hamburger-box">
                  <div className="hamburger-inner"></div>
                </div>
              </div>
              {/* </IconButton> */}
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "right",
                // border: "2px solid red",
              }}
            >
              {pages.map((page) => (
                <Link
                  key={page}
                  sx={{
                    // border: "2px solid green",
                    textAlign: "center",
                    fontFamily: "FuturaBold",
                    // fontWeight: 'bold',
                    fontSize: "2rem",
                    justifyContent: "center",
                    alignItems: "center",
                    pt: 1.7,
                    // my: 1,
                    color: "white",
                    pl: 5,
                  }}
                >
                  {page}
                </Link>
              ))}
              <Link
                sx={{ pl: 5,}}
                href="https://elijahsilverman.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon sx={{ color: "#7558cc", fontSize: 60, my: 1 }} />
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default ResponsiveAppBar;
