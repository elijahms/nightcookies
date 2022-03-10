import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack  from "@mui/material/Stack";
import KinderCook from '../assets/Kinder.jpg'
import MilkCook from "../assets/MilkCook.jpg";
import NutellaCook from "../assets/Nutella.jpg";
import SnickersCook from "../assets/Snickers.jpg";
import TripCook from "../assets/TripleChoc.jpg";
import WhiteFCook from "../assets/WhiteFreaks.jpg";

const InstagramFeed = () => {

let imageList = [KinderCook, MilkCook, NutellaCook, SnickersCook, TripCook, WhiteFCook];

  return (
    <div style={{ backgroundColor: "#D566A6", minHeight: "78vh" }}>
      <Stack direction="column">
        <Typography
          variant="h2"
          align="center"
          sx={{
            color: "text.primary",
            pb: 4,
            pt: 4,
            width: "100%",
            fontFamily: 'FuturaBold'
          }}
        >
          {" Feed (me)"}
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          className='picture-gallery'
          sx={{
            overflowY: "scroll",
            maxWidth: "200vw",
          }}
        >
          {imageList.map((image) => {
            return (
              <Box>
                <img src={image} alt={image} className="feed-img"></img>
              </Box>
            );
          })}
        </Stack>
        <div id="arrowAnim">
          <div class="arrowSliding">
            <div class="arrow"></div>
          </div>
          <div class="arrowSliding delay1">
            <div class="arrow"></div>
          </div>
          <div class="arrowSliding delay2">
            <div class="arrow"></div>
          </div>
          <div class="arrowSliding delay3">
            <div class="arrow"></div>
          </div>
        </div>
      </Stack>
    </div>
  );
};

export default InstagramFeed;
