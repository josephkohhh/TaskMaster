/**
 * File: About.jsx
 * Author: Joseph Koh
 * Description: About page component showcasing the TaskMaster application.
 */

import { Navbar } from "../components/ui/Navbar";
import { Stack, Typography, Box } from "@mui/material";
import { introduction } from "../data/constants";
import { Diagram } from "../components/ui/Diagram";
import { TableDiagram } from "../components/ui/TableDiagram";
import componentDiagram from "../assets/images/component-diagram.png";
import { AccordionDiagram } from "../components/ui/AccordionDiagram";

export const About = () => {
  // Styling for font sizes
  const titleFontSize = {
    fontSize: {
      xs: "1.5rem",
      sm: "2rem",
      md: "2rem",
    },
  };
  const introFontSize = {
    fontSize: {
      xs: ".8rem",
      sm: "1rem",
      md: "1.2rem",
    },
  };
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Title & introduction */}
      <Stack
        width={{ xs: "80%", sm: "80%", md: "60%" }}
        direction={"column"}
        margin={"auto"}
        textAlign={"center"}
        my={4}
      >
        <Typography sx={titleFontSize}>Introducing TaskMaster</Typography>
        <Typography sx={introFontSize}>{introduction}</Typography>
      </Stack>

      {/* Architecture diagram */}
      <Box
        sx={{
          margin: "auto",
          width: { xs: "80%", sm: "550px", md: "700px" },
        }}
      >
        <Diagram src={componentDiagram} alt={"component-diagram"} />
      </Box>

      {/* Table diagram */}
      <Stack margin={"auto"} textAlign={"center"} direction={"column"} my={4}>
        <Typography sx={titleFontSize}>App Features</Typography>
        <Box
          sx={{
            width: { xs: "80%", sm: "80%", md: "60%" },
            margin: "auto",
            marginTop: "24px",
          }}
        >
          <TableDiagram />
        </Box>
      </Stack>

      {/*  Accordion  */}
      <Stack direction={"column"} margin={"auto"} textAlign={"center"} my={4}>
        <Typography sx={titleFontSize}>Key Concepts Applied</Typography>
        <Box
          sx={{
            width: { xs: "80%", sm: "80%", md: "70%" },
            margin: "24px auto 96px auto",
          }}
        >
          <AccordionDiagram />
        </Box>
      </Stack>
    </>
  );
};
