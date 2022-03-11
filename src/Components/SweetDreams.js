import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MandM from "../assets/M&M.png";
import uber from "../assets/ubereats.png";
import Deliveroo from "../assets/deliveroo.png"
import Typewriter from "typewriter-effect";
import { contactLinks } from "../assets/conts";
import { new_kid, alert_msg, sweet_dream } from "../assets/conts";


const SweetDreams = () => {
  let typewriterS = ["chocolate", "reese", "m&ms", "kinder", "nutella"];
  // let screenSize = window.innerWidth;
  return (
    <>
      <Container>
        <Grid
          id="learn-more"
          container
          justifyContent="space-between"
          alignContent="center"
          sx={{
            whiteSpace: "pre-line",
          }}
        >
          <Grid item xs={12} md={6} sx={{ mt: 4, mb: 4 }}>
            <Typography
              variant="h3"
              align="left"
              sx={{
                color: "text.pink",
                fontFamily: "FuturaBold",
                display: "inline-flex",
                pb: 2,
                float: "left",
              }}
            >
              {sweet_dream}
              {/* <Typewriter
                options={{
                  strings: typewriterS,
                  autoStart: true,
                  delay: 90,
                  cursor: "|",
                  loop: true,
                }}
              /> */}
            </Typography>
            <Typography
              variant="h5"
              align="justify"
              sx={{
                color: "text.primary",
                pb: 4,
              }}
            >
              {new_kid}
            </Typography>
            <Typography
              variant="p"
              align="left"
              sx={{
                color: "text.secondary",
              }}
            >
              {alert_msg}
            </Typography>
            <Box sx={{ pt: 3 }}>
              <a
                href={contactLinks.uber}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="ubereats"
                  src={uber}
                  style={{ maxWidth: "80px", marginRight: "10px" }}
                />
              </a>
              <a
                href={contactLinks.deliveroo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Deliveroo}
                  style={{
                    maxWidth: "80px",
                    borderRadius: "25px",
                  }}
                  alt="deliveroo"
                />
              </a>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              mt: 4,
              mb: 6,
            }}
          >
            <img src={MandM} alt="pink-cookie" className="rotate"></img>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SweetDreams;
