import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import KinderCook from "../assets/Kinder.jpg";
import MilkCook from "../assets/MilkCook.jpg";
import NutellaCook from "../assets/Nutella.jpg";
import SnickersCook from "../assets/Snickers.jpg";
import TripCook from "../assets/TripleChoc.jpg";
import WhiteFCook from "../assets/WhiteFreaks.jpg";
import Paper from "@mui/material/Paper";

const InstagramFeed = () => {
  let imageList = [
    KinderCook,
    MilkCook,
    NutellaCook,
    SnickersCook,
    TripCook,
    WhiteFCook,
  ];

  return (
    <div
      style={{
        backgroundColor: "#D566A6",
        // minHeight: "78vh",
        maxWidth: "100vw",
      }}
    >
      <Stack direction="column">
        <Box sx={{ alignItems: "center", display: "flex" }}>
          <Typography
            variant="h2"
            align="center"
            sx={{
              color: "text.primary",
              pb: 4,
              pt: 4,
              width: "50%",

              fontFamily: "FuturaBold",
              float: "left",
            }}
          >
            {" Feed (me)"}
          </Typography>
          <div id="arrowAnim">
            <div className="arrowSliding">
              <div className="arrow"></div>
            </div>
            <div className="arrowSliding delay1">
              <div className="arrow"></div>
            </div>
            <div className="arrowSliding delay2">
              <div className="arrow"></div>
            </div>
            <div className="arrowSliding delay3">
              <div className="arrow"></div>
            </div>
          </div>
        </Box>
        <Stack
          direction="row"
          spacing={3}
          className="picture-gallery"
          sx={{
            overflowY: "scroll",
            maxWidth: "200vw",
            pb: 5,
            pt: 5,
            pl: 1,
            // minHeight: '120%'
          }}
        >
          {imageList.map((image) => {
            return (
              <Paper
                key={image}
                elevation={6}
                sx={{
                  borderRadius: "25px",
                  p: 0,
                  backgroundColor: "#D566A6",
                }}
              >
                <img
                  loading="lazy"
                  src={image}
                  alt={image}
                  className="feed-img"
                ></img>
              </Paper>
            );
          })}
        </Stack>
      </Stack>
    </div>
  );
};

export default InstagramFeed;
