import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { skillsLogo } from "./items.js";
import { Typography } from "@mui/material";

function Skills() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", backgroundColor: "#F6DFD3" }}>
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
  );
}

export default Skills;
