import React from "react";
import { Box, Typography, Fab, Button, Container } from "@mui/material";
import logo from "../../icons/logo.svg";
import Skills from "../skills/Skills.jsx";
import Projects from "../projects/Projects.jsx";
import Contact from "../contact/Contact.jsx";
import { Link, Element } from "react-scroll";
import { skillsLogo } from "../skills/items.js";
import Grid from "@mui/material/Grid";
import linkedIn from "../../icons/linkedin.svg";
import github from "../../icons/github.svg";

function Welcome() {
  return (
    <>
      <Box>
        <Link to="welcome" smooth={true} duration={800}>
          Section 1
        </Link>
        <Link to="skills" smooth={true} duration={800}>
          Section 2
        </Link>
        <Link to="projects" smooth={true} duration={800}>
          Section 3
        </Link>
        <Link to="contact" smooth={true} duration={800}>
          Section 3
        </Link>
      </Box>

      <Element name="welcome">
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh", backgroundColor: "#E6DFD3" }} id="welcome">
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginBlock: "150px" }}>
            <Box>
              <img src={logo} alt="" />
            </Box>
            <Box sx={{ width: "300px" }}>
              <Typography sx={{ fontFamily: "Bentham, serif", fontSize: "1.5em", textAlign: "center", lineHeight: "25px", color: "#9E3F0D", marginBlock: "150px" }}>
                "Designing with flair, Developing with skill”
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", fontFamily: "Nunito, sans-serif" }}>
              <Typography sx={{ fontFamily: "Inter Tight, sans-serif", fontSize: "6em", textAlign: "center", lineHeight: "100px", color: "#9E3F0D", fontWeight: "700" }}>Welcome,</Typography>
              <Typography sx={{ fontFamily: "Inter Tight, sans-serif", fontSize: "3em", textAlign: "center", color: "#9E3F0D", fontWeight: "100" }}>
                I am <span className="italic">Leon_</span> Designer and Full Stack Developer!
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", backgroundColor: "#F6DFD3" }} id="skills">
          <Container maxWidth="lg">
            <Grid container rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              {skillsLogo.map((skill) => (
                <Grid item xs={2}>
                  <img src={skill.icon} sx={{ minWidth: "40px" }} alt="" />
                  {/* <Box sx={{ width: "100%", border: "solid 0.1px #B9B9B9", marginBlock: "10px" }}></Box> */}
                  <Typography sx={{ fontSize: "16px", fontFamily: "nunito", textTransform: "capitalize", marginBlockStart: "20px" }}>{skill.name}</Typography>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", backgroundColor: "#F6EFD3" }} id="projects">
          <Container maxWidth="lg">
            <Grid container>
              <Grid item xs={4} sx={{ height: "350px" }}>
                <Box sx={{ backgroundColor: "#F1F1F1", width: "100%", height: "100%" }}></Box>
              </Grid>
              <Grid item xs={4} sx={{ height: "350px" }}>
                <Box sx={{ backgroundColor: "#E8E8E8", width: "100%", height: "100%" }}></Box>
              </Grid>
              <Grid item xs={4} sx={{ height: "350px" }}>
                <Box sx={{ backgroundColor: "#D9D4D4", width: "100%", height: "100%" }}></Box>
              </Grid>
              <Grid item xs={4} sx={{ height: "350px" }}>
                <Box sx={{ backgroundColor: "#E8E8E8", width: "100%", height: "100%" }}></Box>
              </Grid>
              <Grid item xs={4} sx={{ height: "350px" }}>
                <Box sx={{ backgroundColor: "#D9D4D4", width: "100%", height: "100%" }}></Box>
              </Grid>
              <Grid item xs={4} sx={{ height: "350px" }}>
                <Box sx={{ backgroundColor: "#F1F1F1", width: "100%", height: "100%" }}></Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", backgroundColor: "#E6DFD3", position: "relative" }} id="contact">
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
        <Box sx={{ border: "solid", backgroundColor: "green", height: "160px" }}>
          <Fab sx={{ position: "absolute", backgroundColor: "green" }}>
            <Link to="welcome" smooth={true} duration={800}>
              <Button>Section 1</Button>
            </Link>
          </Fab>
        </Box>
      </Element>
    </>
  );
}

export default Welcome;
