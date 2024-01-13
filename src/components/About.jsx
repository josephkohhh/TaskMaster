import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  routerCodeSnippet,
  useStateCodeSnippet,
  useEffectCodeSnippet,
  localStorageCodeSnippet,
  arrayMapCodeSnippet,
  arrayFilterCodeSnippet,
  arraySomeCodeSnippet,
  arraySliceSortCodeSnippet,
} from "./Constants";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/js-extras";
import vsDark from "react-syntax-highlighter/dist/esm/styles/prism/vs-dark";

SyntaxHighlighter.registerLanguage("jsx", jsx);

export const About = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Box sx={{ marginBottom: "150px" }}>
      <Box sx={{ width: "70%", margin: "0 auto", marginTop: "30px" }}>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem" },
          }}
        >
          Introducing TaskMaster
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            marginTop: "10px",
            color: "#555555",
            fontSize: { xs: ".8rem", sm: "1rem", md: "1.2rem" },
          }}
        >
          A simple todo list app leveraging React and Material UI design. The
          goal of this app is to reinforce understanding of React's
          component-based architecture, ensuring a solid grasp of its
          fundamental concepts
        </Typography>
      </Box>
      <Box
        sx={{
          width: "50%",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        <img
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
            border: "1px solid #555555",
            borderRadius: "10px",
            boxSizing: "border-box",
          }}
          src="./src/assets/component-diagram.png"
          alt="component-diagram"
        />
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: ".7rem", sm: ".8rem", md: ".9rem" },
          }}
        >
          Component Diagram
        </Typography>
      </Box>

      <Box
        sx={{
          width: "70%",
          margin: "0 auto",
          marginTop: "30px",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            marginBottom: "20px",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2rem" },
          }}
        >
          Key Concepts Applied
        </Typography>

        {/* React Router Accordon */}
        <Accordion
          expanded={expanded === "panel4"}
          onChange={(event, isExpanded) => handleChange(isExpanded, "panel4")}
        >
          <AccordionSummary
            id="panel4-header"
            aria-controls="panel4-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              React Router
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <SyntaxHighlighter language="jsx" style={vsDark}>
              {routerCodeSnippet}
            </SyntaxHighlighter>
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              Home and About components will be rendered when the corresponding
              routes are matched. TaskMaster component is the default route when
              no path is specified.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* React Hooks Accordion */}
        <Accordion
          expanded={expanded === "panel1"}
          onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
        >
          <AccordionSummary
            id="panel1-header"
            aria-controls="panel1-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              React Hooks
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              useState Hook
            </Typography>
            <SyntaxHighlighter language="jsx" style={vsDark}>
              {useStateCodeSnippet}
            </SyntaxHighlighter>
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              Using useState hook to manage the user input task, used nanoid()
              to assign the id upon form submission. Additionally, created
              another state to store task objects. The taskList array will be
              stored in a local storage.
            </Typography>
            <Typography
              sx={{
                marginTop: "10px",
                fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" },
              }}
            >
              useEffect Hook
            </Typography>
            <SyntaxHighlighter language="jsx" style={vsDark}>
              {useEffectCodeSnippet}
            </SyntaxHighlighter>
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              Using useEffect hook to initialize the taskList state with the
              storedTaskList from localStorage at the mounting/updating phase.
              In this case, the effect is only required to run once when the
              component mounts hence an empty dependency array is used.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Local Storage Accordion */}
        <Accordion
          expanded={expanded === "panel2"}
          onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
        >
          <AccordionSummary
            id="panel2-header"
            aria-controls="panel2-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              Local Storage
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <SyntaxHighlighter language="jsx" style={vsDark}>
              {localStorageCodeSnippet}
            </SyntaxHighlighter>
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              Using localStorage to get the stored taskList array and convert
              JSON string to array or return empty array if retrieval fails.
              Update the stored taskList by converting array to JSON string with
              updatedTaskList. Delete the array from localStorage if user wishes
              to clear all task(s).
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* Array Functions Accordion */}
        <Accordion
          expanded={expanded === "panel3"}
          onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
        >
          <AccordionSummary
            id="panel3-header"
            aria-controls="panel3-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              Array Functions
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              Map()
            </Typography>
            <SyntaxHighlighter language="jsx" style={vsDark}>
              {arrayMapCodeSnippet}
            </SyntaxHighlighter>
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              Using map function to iterate over sortedTaskList array, and for
              each element in that array, it renders a Task component with
              certain properties.
            </Typography>
            <Typography
              sx={{
                marginTop: "10px",
                fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" },
              }}
            >
              Filter()
            </Typography>
            <SyntaxHighlighter language="jsx" style={vsDark}>
              {arrayFilterCodeSnippet}
            </SyntaxHighlighter>
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              Using filter function to filter elements in taskList array that
              satisfy the condition and saves the filtered elements to
              updatedTaskList.
            </Typography>
            <Typography
              sx={{
                marginTop: "10px",
                fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" },
              }}
            >
              Some()
            </Typography>
            <SyntaxHighlighter language="jsx" style={vsDark}>
              {arraySomeCodeSnippet}
            </SyntaxHighlighter>
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              Using some function to check if the elements in taskList array
              satisfy the condition and returns TRUE if condition is met. Else,
              it returns FALSE.
            </Typography>
            <Typography
              sx={{
                marginTop: "10px",
                fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" },
              }}
            >
              Slice() and Sort()
            </Typography>
            <Box sx={{ fontSize: { xs: "6px", sm: "1rem", md: "1rem" } }}>
              <SyntaxHighlighter language="jsx" style={vsDark}>
                {arraySliceSortCodeSnippet}
              </SyntaxHighlighter>
            </Box>
            <Typography
              sx={{ fontSize: { xs: ".8rem", sm: "1rem", md: "1rem" } }}
            >
              Using method chaining, the slice method creates a copy of the
              original array to avoid mutation when sorting. The sort method is
              used to arrange the array elements with incomplete status first.
              The isCompleted property is converted to number 1 for TRUE and 0
              for FALSE as to ensure that the comparison is done numerically
              rather than lexicographically.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};
