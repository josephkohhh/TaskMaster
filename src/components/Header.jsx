// File: Header.jsx
// Author: Joseph Koh
// Description: This component represents the header of the TaskMaster application.
// It includes a nav bar with a title, nav links and menu icon for small screens.
// The component uses Material-UI components for styling and responsiveness.

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Stack,
  Button,
  useMediaQuery,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Styles for navigation buttons
const navButtonStyle = {
  disableRipple: true,
  sx: {
    color: "white",
    "&:hover": {
      fontWeight: "600",
      textDecoration: "underline",
      textUnderlineOffset: "0.5rem",
    },
  },
};

// Styles for links
const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};

// Header component
export const Header = () => {
  const isXsScreen = useMediaQuery("(max-width:600px)"); // Check if the screen size is extra small (xs)
  const [anchorEl, setAnchorEl] = useState(null); // State to manage the menu anchor element

  // Function to handle opening the menu
  const handleToggleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Function to handle closing the menu
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  // useEffect to close the menu when resizing the window on component mount
  useEffect(() => {
    const handleResize = () => {
      handleCloseMenu();
    };
    window.addEventListener("resize", handleResize); // Event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup: remove event listener on component unmount
    };
  }, []);
  return (
    <>
      {/* Navigation bar for smaller screens (width <= 600px) */}
      <AppBar position="static" elevation={0} sx={{ bgcolor: "black" }}>
        <Toolbar>
          <Typography
            sx={{
              flexGrow: 1,
              textAlign: "center",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            TaskMaster
          </Typography>

          {/* Menu icon for smaller screens (width <= 600px) */}
          {isXsScreen && (
            <>
              <IconButton onClick={handleToggleMenu}>
                <MenuIcon sx={{ color: "white" }} />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
              >
                <a
                  style={linkStyle}
                  href="https://github.com/josephkohhh/TaskMaster"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MenuItem onClick={handleCloseMenu} disableRipple>
                    Code
                  </MenuItem>
                </a>

                <Link to="/home" style={linkStyle}>
                  <MenuItem onClick={handleCloseMenu} disableRipple>
                    Home
                  </MenuItem>
                </Link>
                <Link to="/about" style={linkStyle}>
                  <MenuItem onClick={handleCloseMenu} disableRipple>
                    About
                  </MenuItem>
                </Link>
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Navigation bar larger screens (width > 600px) */}
      {!isXsScreen && (
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "black",
            borderRadius: "0 0 20px 20px",
            height: "50px",
          }}
        >
          <Toolbar>
            <Stack
              direction={"row"}
              spacing={8}
              sx={{ margin: "auto", marginBottom: "25px" }}
            >
              <a
                href="https://github.com/josephkohhh/TaskMaster"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button {...navButtonStyle}>Code</Button>
              </a>
              <Link to="/home">
                <Button {...navButtonStyle}>Home</Button>
              </Link>
              <Link to="/about">
                <Button {...navButtonStyle}>About</Button>
              </Link>
            </Stack>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};
