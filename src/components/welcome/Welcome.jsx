import React, { useEffect, useState } from "react";
import { Box, Typography, Fab, Button, Container } from "@mui/material";
import logo from "../../icons/logo.svg";
import groupProject from "../../icons/groups.png";
import spotify from "../../icons/spotify.png";
import linked from "../../icons/linked.png";
import weather from "../../icons/weather.png";

import { Link, Element } from "react-scroll";
import { skillsLogo } from "../skills/items.js";
import Grid from "@mui/material/Grid";
import linkedIn from "../../icons/linkedin.svg";
import github from "../../icons/github.svg";

function Welcome() {
  const [activeLink, setActiveLink] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      const currentPos = window.scrollY;
      const sections = ["welcome", "skills", "projects", "contact"];
      const sectionOffsets = sections.map((section) => {
        const element = document.getElementById(section);
        return {
          id: section,
          offset: element.offsetTop,
          height: element.offsetHeight,
        };
      });

      const currentSection = sectionOffsets.find(({ offset, height }) => currentPos >= offset - height / 2 && currentPos < offset + height / 2);

      if (currentSection) {
        setActiveLink(currentSection.id);
      } else {
        setActiveLink("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box sx={{ position: "relative" }}>
      <Fab variant="extended" sx={{ position: "sticky", top: "0px", cursor: "pointer", backgroundColor: "#E6DFD3" }}>
        <Link to="welcome" smooth={true} duration={1000} spy={true}>
          Welcome
        </Link>
        <Link to="skills" smooth={true} duration={1000} spy={true} className={activeLink === "skills" ? "active" : ""}>
          Skills
        </Link>
        <Link to="projects" smooth={true} duration={1000} spy={true} className={activeLink === "projects" ? "active" : ""}>
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={1000} spy={true} className={activeLink === "contact" ? "active" : ""}>
          Contact
        </Link>
      </Fab>
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
              <Typography sx={{ fontFamily: "Inter Tight, sans-serif", fontSize: "6em", textAlign: "center", lineHeight: "100px", color: "#000", fontWeight: "700" }}>Welcome,</Typography>
              <Typography sx={{ fontFamily: "Inter Tight, sans-serif", fontSize: "3em", textAlign: "center", color: "#000", fontWeight: "100" }}>
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
              <Grid item xs={6} sx={{ height: "350px" }}>
                <Box sx={{ backgroundColor: "#F1F1F1", width: "100%", height: "100%", position: "relative" }}>
                  <Button sx={{ width: "100%", height: "100%" }}>
                    <img src={groupProject} alt="" className="images-big" />
                  </Button>
                  <Box sx={{ position: "absolute", bottom: "50px", width: "100%" }}>
                    <Button
                      fullWidth
                      variant="contained"
                      component="a"
                      href="https://solid-groups.vercel.app/"
                      sx={{ backgroundColor: "#000", boxShadow: "none", borderRadius: "0", height: "50px", color: "#fff", opacity: ".6" }}
                    >
                      Solid Groups
                    </Button>
                  </Box>
                  <Box sx={{ position: "absolute", bottom: "0", width: "100%" }}>
                    <Button
                      component="a"
                      href="https://github.com/LeonMagnificat/Solid-FE"
                      fullWidth
                      variant="contained"
                      color="primary"
                      sx={{ backgroundColor: "#000", color: "#fff", boxShadow: "none", borderRadius: "0", height: "50px" }}
                    >
                      Repo
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6} sx={{ height: "350px" }}>
                <Box sx={{ backgroundColor: "#F1F1F1", width: "100%", height: "100%", position: "relative" }}>
                  <Button sx={{ width: "100%", height: "100%" }}>
                    <img src={spotify} alt="" className="images-big" />
                  </Button>
                  <Box sx={{ position: "absolute", bottom: "50px", width: "100%" }}>
                    <Button fullWidth variant="contained" color="orange" sx={{ backgroundColor: "#000", boxShadow: "none", borderRadius: "0", height: "50px", color: "#fff", opacity: ".6" }}>
                      Spotify Clone
                    </Button>
                  </Box>
                  <Box sx={{ position: "absolute", bottom: "0", width: "100%" }}>
                    <Button fullWidth variant="contained" color="primary" sx={{ backgroundColor: "#1e1e1e", color: "#fff", boxShadow: "none", borderRadius: "0", height: "50px" }}>
                      Repo
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6} sx={{ height: "350px" }}>
                <Box sx={{ backgroundColor: "#F1F1F1", width: "100%", height: "100%", position: "relative" }}>
                  <Button sx={{ width: "100%", height: "100%" }}>
                    <img src={linked} alt="" className="images-big" />
                  </Button>
                  <Box sx={{ position: "absolute", bottom: "50px", width: "100%" }}>
                    <Button fullWidth variant="contained" color="orange" sx={{ backgroundColor: "#000", boxShadow: "none", borderRadius: "0", height: "50px", color: "#fff", opacity: ".8" }}>
                      LinkedIn Clone
                    </Button>
                  </Box>
                  <Box sx={{ position: "absolute", bottom: "0", width: "100%" }}>
                    <Button fullWidth variant="contained" color="primary" sx={{ backgroundColor: "#333", color: "#fff", boxShadow: "none", borderRadius: "0", height: "50px" }}>
                      Repo
                    </Button>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6} sx={{ height: "350px" }}>
                <Box sx={{ backgroundColor: "#F1F1F1", width: "100%", height: "100%", position: "relative" }}>
                  <Button sx={{ width: "100%", height: "100%" }}>
                    <img src={weather} alt="" className="images-big" />
                  </Button>
                  <Box sx={{ position: "absolute", bottom: "50px", width: "100%" }}>
                    <Button fullWidth variant="contained" color="orange" sx={{ backgroundColor: "#000", boxShadow: "none", borderRadius: "0", height: "50px", color: "#fff", opacity: ".6" }}>
                      Weather App
                    </Button>
                  </Box>
                  <Box sx={{ position: "absolute", bottom: "0", width: "100%" }}>
                    <Button fullWidth variant="contained" color="primary" sx={{ backgroundColor: "#000", color: "#fff", boxShadow: "none", borderRadius: "0", height: "50px" }}>
                      Repo
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
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
      </Element>
    </Box>
  );
}

export default Welcome;
