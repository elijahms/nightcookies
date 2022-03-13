import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Fade as Hamburger } from "hamburger-react";
import { contactLinks } from "../assets/conts";
import {DeliveryLinks, ExternalLinks} from "./ExternalLinks"

const Modal = ({ isOpen, setOpen }) => {
  const [pressTog, setPressTog] = useState(false);
  const [deliveryTog, setDeliveryTog] = useState(false);
  return (
    <div id="flyoutMenu" className={isOpen ? "show" : "hide"}>
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
            disableRipple
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
                fontSize: "1.5rem",
              }}
            >
              <DeliveryLinks />
            </Stack>
          </Box>
          <Button
            disableRipple
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
                fontSize: "1.5rem",
              }}
            >
              <ExternalLinks />
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
  );
};

export default Modal;
