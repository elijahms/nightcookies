import ResAppBar from "./ResAppBar";
import SweetDreams from "./SweetDreams";
import InstagramFeed from "./InstagramFeed";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Footer from "./Footer";
import { useState } from "react";
import Button from "@mui/material/Button";

import { Fade as Hamburger } from "hamburger-react";
import { contactLinks } from "../assets/conts";

const HomePage = () => {
  const [isOpen, setOpen] = useState(false);
  const [pressTog, setPressTog] = useState(false);
  const [deliveryTog, setDeliveryTog] = useState(false);

  return (
    <div>
      <div
        id="flyoutMenu"
        className={isOpen ? "show" : "hide"}
        // onClick={() => setOpen(() => !isOpen)}
      >
        <Container
          id="menu-bar-id"
          sx={{
            minHeight: "100vh",
          }}
        >
          <Stack
            sx={{
              alignItems: "center",
              height: "80vh",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={() => setDeliveryTog(() => !deliveryTog)}
              sx={{
                textAlign: "center",
                fontFamily: "FuturaBold",
                fontSize: "2.5rem",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              Order Now
            </Button>
            <Box sx={{ display: `${deliveryTog ? "block" : "none"}` }}>
              <Stack
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
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
              </Stack>
            </Box>
            <Button
              onClick={() => setPressTog(() => !pressTog)}
              sx={{
                textAlign: "center",
                fontFamily: "FuturaBold",
                fontSize: "2.5rem",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              Press
            </Button>
            <Box sx={{ display: `${pressTog ? "block" : "none"}` }}>
              <Stack
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
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
              </Stack>
            </Box>
            <Box>
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                rounded
                color="#4FD1C5"
              />
            </Box>
          </Stack>
        </Container>
      </div>
      <ResAppBar isOpen={isOpen} setOpen={setOpen} />
      <div className="main-img-parent"></div>
      <SweetDreams />
      <InstagramFeed />
      <Footer />
    </div>
  );
};

export default HomePage;
