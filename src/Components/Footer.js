import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Logo from "../assets/ncLogo.png"
import { TextField } from "@mui/material";

const Footer = () => {
  return (
    <div className="footer" style={{maxWidth: '100vw'}}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ p: 2 }}
      >
        <Grid lg={4} sm={12}>
          <Box
            sx={{
              width: "100%",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h5"
              align="center"
              sx={{ color: "text.pink", pb: 5 }}
            >
              Sign Up To Learn More:
            </Typography>
            <TextField
              sx={{ width: "70%", marginLeft: "15%" }}
              id="outlined-basic"
              label="email address"
              autocomplete="email"
              variant="outlined"
            />
          </Box>
        </Grid>
        <Grid lg={4}>
          <Box
            sx={{
              justifyContent: "center",
              display: 'flex',
              pt: 5,
              pb: 5
            }}
          >
            <img src={Logo} alt="logo" className="footer-logo"></img>
          </Box>
        </Grid>
        <Grid lg={4} sm={12}>
          <Box>
            <Typography
              variant="h5"
              align="center"
              sx={{
                color: "text.primary",
                pb: 2,
                pt: 2,
                width: "100%",
                whiteSpace: "pre-line",
              }}
            >
              {
                "KvK: 81938616 \n BTW nr: NL003620966B81 \n Tel: 06 13 56 69 11 \n e-mail: sweetness@nightcookies.nl"
              }
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
