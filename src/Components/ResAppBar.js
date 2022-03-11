import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import NightCookiesLogo from "../assets/ncLogo.png";
import Link from "@mui/material/Link";
import { contactLinks } from "../assets/conts";
import { Fade as Hamburger } from "hamburger-react";

const ResponsiveAppBar = ({ isOpen, setOpen }) => {

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
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                rounded
                color="#4FD1C5"
              />
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "right",
                // border: "2px solid red",
              }}
            >
              <div className="dropdown">
                <Button
                  className="dropbtn"
                  sx={{
                    textAlign: "center",
                    fontFamily: "FuturaBold",
                    fontSize: "2.5rem",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    pl: 8,
                  }}
                >
                  Order Now
                </Button>
                <div className="dropdown-content">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={contactLinks.uber}
                  >
                    Uber
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={contactLinks.deliveroo}
                  >
                    Deliveroo
                  </a>
                </div>
              </div>
              <div className="dropdown">
                <Button
                  className="dropbtn"
                  sx={{
                    textAlign: "center",
                    fontFamily: "FuturaBold",
                    fontSize: "2.5rem",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    pl: 8,
                  }}
                >
                  Press
                </Button>
                <div className="dropdown-content">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={contactLinks.press.hetparool}
                  >
                    HETPAROOL
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={contactLinks.press.dewestkrant}
                  >
                    DE WESTKRANT
                  </a>
                </div>
              </div>
              <Link
                sx={{ pl: 5 }}
                href={contactLinks.instagram}
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
