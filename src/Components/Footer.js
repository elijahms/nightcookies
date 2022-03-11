import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Logo from "../assets/ncLogo.png";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import { contactLinks } from "../assets/conts";

const Footer = () => {
  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ p: 2 }}
      >
        <Grid item lg={4} sm={12}>
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
              name="email"
              autoComplete="on"
              type="email"
              variant="outlined"
            />
          </Box>
        </Grid>
        <Grid item lg={4} sm={12}>
          <Box
            sx={{
              justifyContent: "center",
              display: "flex",
              pt: 5,
              pb: 5,
            }}
          >
            <img src={Logo} alt="logo" className="footer-logo"></img>
          </Box>
        </Grid>
        <Grid item lg={4} sm={12}>
          <Box>
            <Typography
              variant="h5"
              align="left"
              sx={{
                color: "text.primary",
                pb: 2,
                pt: 2,
                width: "100%",
                whiteSpace: "pre-line",
              }}
            >
              {"KvK:"} {"81938616"} {"\n BTW nr:"} {"NL003620966B81 \n Tel:"}{" "}
              {<Link href={contactLinks.phone}>{contactLinks.phone}</Link>}{" "}
              {"\n e-mail: "}
              {<Link href={contactLinks.email}>{contactLinks.email}</Link>}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
