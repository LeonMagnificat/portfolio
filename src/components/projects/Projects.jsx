import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

function Projects() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
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
  );
}

export default Projects;
