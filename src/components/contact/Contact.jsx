import * as React from "react";
import Container from "@mui/material/Container";
import { Button, Typography, Grid, Paper, Box, styled } from "@mui/material";
import linkedIn from "../../icons/linkedin.svg";
import github from "../../icons/github.svg";

function Contact() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", backgroundColor: "#E6DFD3" }} id="contact">
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={6} sx={{ height: "350px" }}>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "30px", boxSizing: "border-box", width: "100%", height: "100%" }}>
              <Box sx={{ display: "flex" }}>
                <Button sx={{ marginInlineEnd: "20px" }}>
                  <img src={github} alt="" />
                </Button>
                <Button>
                  <img src={linkedIn} alt="" />
                </Button>
              </Box>
              <Box>
                <Typography sx={{ fontFamily: "Nunito", fontSize: "24px", fontWeight: "600" }}>Leon Magnificat Kwizera</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontFamily: "Nunito", fontSize: "18px", fontWeight: "600" }}>Poland, Sopot</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontFamily: "Nunito", fontSize: "18px", fontWeight: "600" }}>+48 791676 244</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontFamily: "Nunito", fontSize: "18px", fontWeight: "600" }}>leonmagnificat@gmail.com</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
