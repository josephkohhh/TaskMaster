/*
 * File: Header.jsx
 * Author: Joseph Koh
 * Description: This file contains the Header component for the TaskMaster app.
 */

import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";

export const Header = () => {
  // Styling object for the navigation buttons
  const buttonStyle = {
    size: "large",
    disableRipple: true,
    sx: {
      color: "white",
      fontSize: "1.1rem",
      padding: "15px 30px",
      "&:hover": {
        fontWeight: "600",
        textDecoration: "underline",
        textUnderlineOffset: "1rem",
        background: "none",
      },
    },
  };

  // Render the Header component
  return (
    <>
      {/* AppBar for the application header */}
      <AppBar position="static" color="transparent" elevation={0}>
        {/* Toolbar containing the title and navigation buttons */}
        <Toolbar
          sx={{
            background: "black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "15px 0 10px 0",
            borderRadius: "0 0 20px 20px",
          }}
        >
          {/* Application title */}
          <Typography variant="h2" color={"white"}>
            TaskMaster
          </Typography>
          {/* Navigation buttons */}
          <Stack direction="row" spacing={8} sx={{ marginTop: "10px" }}>
            <Button {...buttonStyle}>Code</Button>
            <Button {...buttonStyle}>Home</Button>
            <Button {...buttonStyle}>About</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

/*
 * Component Structure:
 * - AppBar
 *   - Toolbar
 *     - Typography (Application title)
 *     - Stack (Container for navigation buttons)
 *       - Button (Code)
 *       - Button (Home)
 *       - Button (About)
 *
 * Explanation:
 * - The Header component consists of an AppBar containing a Toolbar with the application title and navigation buttons.
 * - Styling is applied to create a visually appealing header.
 * - Navigation buttons are styled using the buttonStyle object.
 * - The AppBar has a transparent background and no elevation.
 * - Typography is used for the application title.
 * - Stack is used to arrange navigation buttons in a row.
 */
