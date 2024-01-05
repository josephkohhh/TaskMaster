import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const About = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box sx={{ minHeight: "1200px" }}>
      <Box sx={{ width: "70%", margin: "0 auto", marginTop: "30px" }}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Introducing TaskMaster
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: "center", marginTop: "10px", color: "#555555" }}
        >
          A simple todo list app leveraging React and Material UI design. <br />
          The goal of this app is to reinforce understanding of React's
          component-based architecture,
          <br /> ensuring a solid grasp of its fundamental concepts
        </Typography>
      </Box>
      <Box
        sx={{
          width: "60%",
          margin: "0 auto",
          marginTop: "30px",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            border: "1px solid #555555",
            borderRadius: "10px",
            boxSizing: "border-box",
          }}
          src="./src/assets/component-diagram.png"
          alt={`component-diagram`}
        />
      </Box>

      <Box
        sx={{
          width: "70%",
          margin: "0 auto",
          marginTop: "30px",
        }}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginBottom: "20px" }}
        >
          Concepts Applied
        </Typography>

        <Accordion
          expanded={expanded === "panel1"}
          onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
        >
          <AccordionSummary
            id="panel1-header"
            aria-controls="panel1-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              vero cumque fugiat laudantium velit eos ea exercitationem?
              Voluptatum reiciendis ipsam maxime adipisci praesentium corrupti
              tempora, cum, dignissimos odit exercitationem autem! Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Error vero cumque
              fugiat laudantium velit eos ea exercitationem? Voluptatum
              reiciendis ipsam maxime adipisci praesentium corrupti tempora,
              cum, dignissimos odit exercitationem autem! Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Error vero cumque fugiat
              laudantium velit eos ea exercitationem? Voluptatum reiciendis
              ipsam maxime adipisci praesentium corrupti tempora, cum,
              dignissimos odit exercitationem autem! Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Error vero cumque fugiat laudantium
              velit eos ea exercitationem? Voluptatum reiciendis ipsam maxime
              adipisci praesentium corrupti tempora, cum, dignissimos odit
              exercitationem autem! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Error vero cumque fugiat laudantium velit eos ea
              exercitationem? Voluptatum reiciendis ipsam maxime adipisci
              praesentium corrupti tempora, cum, dignissimos odit exercitationem
              autem!
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel2"}
          onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
        >
          <AccordionSummary
            id="panel2-header"
            aria-controls="panel2-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              vero cumque fugiat laudantium velit eos ea exercitationem?
              Voluptatum reiciendis ipsam maxime adipisci praesentium corrupti
              tempora, cum, dignissimos odit exercitationem autem!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
        >
          <AccordionSummary
            id="panel3-header"
            aria-controls="panel3-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Accordion 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              vero cumque fugiat laudantium velit eos ea exercitationem?
              Voluptatum reiciendis ipsam maxime adipisci praesentium corrupti
              tempora, cum, dignissimos odit exercitationem autem!
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};
