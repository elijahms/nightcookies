import React from "react";
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import MandM from "../assets/M&M.png"
import uber from "../assets/ubereats.png"
import { new_kid, alert_msg, sweet_dream } from "../assets/conts";

const SweetDreams = () => {
  let screenSize = window.innerWidth;
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
          <Grid xs={12} md={6} lg={6} sx={{ mt: 4, mb: 4 }}>
            <Typography
              variant="h3"
              align="left"
              sx={{
                color: "text.pink",
                fontFamily: "FuturaBold",
                pb: 2,
              }}
            >
              {sweet_dream}
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
            <Box sx={{pt: 3}}>
              <img
                src={uber}
                style={{ maxWidth: '80px', marginRight: '10px'}}
              />
              <img
                src="https://play-lh.googleusercontent.com/vIL5SVs5s307EmCUZ6rWx11YvcoRnk0sMfGB1VCMBD3m78PMGGsZG_3VIwOZoI4TSQ"
                style={{
                  maxWidth: "80px",
                  borderRadius: "25px",
                 
                }}
              />
            </Box>
          </Grid>
          <Grid
            xs={12}
            md={4}
            lg={4}
            sx={{
              display: "flex",
              mt: 4,
              mb: 6,
            }}
          >
            {/* <img src={PinkCook} alt="pink-cookie" className="pink-cookie"></img> */}
            <img src={MandM} alt="pink-cookie" className="rotate"></img>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SweetDreams;
