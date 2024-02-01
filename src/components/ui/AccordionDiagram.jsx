/**
 * File: AccordionDiagram.jsx
 * Author: Joseph Koh
 * Description: Component showcasing various code snippets and explanations for TaskMaster app features.
 */

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { ReactSyntaxHighligherComponent } from "../../lib/ReactSyntaxHighligherComponent";
import {
  viteCodeSnippet,
  viteDevCodeSnippet,
  viteProdCodeSnippet,
  routerCodeSnippet,
  useStateCodeSnippet,
  useEffectCodeSnippet,
  localStorageCodeSnippet,
  arrayMapCodeSnippet,
  arrayFilterCodeSnippet,
  arraySomeCodeSnippet,
  arraySliceSortCodeSnippet,
  muiCodeSnippet,
} from "../../data/constants";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export const AccordionDiagram = () => {
  // Styling for accordion details text
  const textAlignStart = {
    textAlign: "start",
  };
  const fontSizing = {
    sx: { fontSize: { xs: "0.8rem", sm: "1rem", md: "1rem" } },
  };

  // State for managing the expanded accordion panels
  const [expanded, setExpanded] = useState(false);

  // Function to handle change in accordion panel expansion.
  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      {/* Vite */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Vite</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography {...fontSizing} style={textAlignStart}>
            Vite is a javascript build tool to create frontend projects.
          </Typography>
          <ReactSyntaxHighligherComponent
            code={viteCodeSnippet}
            language={"shell"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            The command line above creates a react + vite app.
          </Typography>
          <ReactSyntaxHighligherComponent
            code={viteDevCodeSnippet}
            language={"shell"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            Development Mode: Vite relies on native ES module support in modern
            browsers for optimal development performance.
          </Typography>
          <ReactSyntaxHighligherComponent
            code={viteProdCodeSnippet}
            language={"shell"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            Production Build: When building for production, Vite (using Rollup
            under the hood) can transpile and bundle the code to ensure
            compatibility with a wider range of browsers.
          </Typography>
          <br />
          <Typography {...fontSizing} style={textAlignStart}>
            Vite is used to create this project instead of traditional CRA. It
            is much faster and also has built in typescript support. However, it
            does not contain built in server side rendering hence using Vite for
            client side application is a good choice.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* React router */}
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>React Router</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ReactSyntaxHighligherComponent
            code={routerCodeSnippet}
            language={"jsx"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            Home and About page will be rendered when the corresponding routes
            are matched. Home page component is the default route when no path
            is specified.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* React hooks */}
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>React Hooks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography {...fontSizing} style={textAlignStart}>
            useState
          </Typography>
          <ReactSyntaxHighligherComponent
            code={useStateCodeSnippet}
            language={"javascript"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            Using built in useState hook to manage the user input task, nanoid()
            is used to assign the id upon form submission.
          </Typography>

          <br />

          <Typography {...fontSizing} style={textAlignStart}>
            useEffect
          </Typography>
          <ReactSyntaxHighligherComponent
            code={useEffectCodeSnippet}
            language={"javascript"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            Using built in useEffect hook to listen to window resize on
            component mount. When window is resize, the opened menu will be
            closed. Cleanup function will remove the event listener on component
            unmount. The effect has no dependencies and will only run on inital
            mount.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Web local storage */}
      <Accordion
        expanded={expanded === "panel4"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel4")}
      >
        <AccordionSummary
          id="panel4-header"
          aria-controls="panel4-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Local Storage</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography {...fontSizing} style={textAlignStart}>
            React Hooks
          </Typography>
          <ReactSyntaxHighligherComponent
            code={localStorageCodeSnippet}
            language={"javascript"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            Using localStorage to get the stored taskList array and convert JSON
            string to array or return empty array if retrieval fails. Update the
            stored taskList by converting array to JSON string with
            updatedTaskList. Delete the array from localStorage if user wishes
            to clear all task(s).
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Array functions */}
      <Accordion
        expanded={expanded === "panel5"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel5")}
      >
        <AccordionSummary
          id="panel5-header"
          aria-controls="panel5-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Array Functions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography {...fontSizing} style={textAlignStart}>
            map()
          </Typography>
          <ReactSyntaxHighligherComponent
            code={arrayMapCodeSnippet}
            language={"jsx"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            Using map function to iterate over sortedTaskList array, and for
            each element in that array, it renders a Task component with certain
            properties.
          </Typography>

          <br />
          <Typography {...fontSizing} style={textAlignStart}>
            filter()
          </Typography>
          <ReactSyntaxHighligherComponent
            code={arrayFilterCodeSnippet}
            language={"javascript"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            Using filter function to filter elements in taskList array that
            satisfy the condition and saves the filtered elements to
            updatedTaskList.
          </Typography>

          <br />
          <Typography {...fontSizing} style={textAlignStart}>
            some()
          </Typography>
          <ReactSyntaxHighligherComponent
            code={arraySomeCodeSnippet}
            language={"javascript"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            Using some function to check if the elements in taskList array
            satisfy the condition and returns TRUE if condition is met. Else, it
            returns FALSE.
          </Typography>

          <br />
          <Typography {...fontSizing} style={textAlignStart}>
            slice() and sort()
          </Typography>
          <ReactSyntaxHighligherComponent
            code={arraySliceSortCodeSnippet}
            language={"javascript"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            Using method chaining, the slice method creates a copy of the
            original array to avoid mutation when sorting. The sort method
            arranges the array elements with incomplete status first.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Material UI */}
      <Accordion
        expanded={expanded === "panel6"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel6")}
      >
        <AccordionSummary
          id="panel6-header"
          aria-controls="panel6-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Material UI</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ReactSyntaxHighligherComponent
            code={muiCodeSnippet}
            language={"shell"}
          />
          <Typography {...fontSizing} style={textAlignStart}>
            A react UI framework that provides a set of customizable and
            reusable components, styles, and themes following the google
            material design guidelines.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
