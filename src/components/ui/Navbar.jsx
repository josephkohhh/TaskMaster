/**
 * File: Navbar.jsx
 * Author: Joseph Koh
 * Description: Component for the app's navigation bar.
 */

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Stack,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  // Array of navigation links
  const navLinks = [
    { label: "Code", path: "https://github.com/josephkohhh/TaskMaster" },
    { label: "Home", path: "/home" },
    { label: "About", path: "/about" },
  ];
  // Styling for nav links
  const navLinkStyle = {
    textDecoration: "none",
    color: "#F9F9F9",
  };
  const menuLinkStyle = {
    textDecoration: "none",
    color: "#000",
  };

  // State for handling the mobile menu
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpenMenu = (event) => setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);

  // Handle resize on component mount
  useEffect(() => {
    const handleResize = () => handleCloseMenu();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {/* Navbar */}
      <AppBar
        position={"static"}
        elevation={0}
        sx={{ bgcolor: "#000", borderRadius: "0 0 25px 25px" }}
      >
        <Toolbar>
          <Box
            width={"100%"}
            display="flex"
            flexDirection={{ xs: "row", sm: "column" }}
            alignItems={"center"}
            justifyContent={"center"}
            my={1}
          >
            {/* Title */}
            <Typography
              sx={{ fontSize: { xs: "32px", sm: "40px", md: "40px" } }}
              flexGrow={1}
              textAlign={"center"}
            >
              TaskMaster
            </Typography>

            {/* Mobile Menu */}
            <IconButton
              color="inherit"
              sx={{ display: { xs: "flex", sm: "none" } }}
              onClick={handleOpenMenu}
            >
              <MenuIcon fontSize="large" />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              {navLinks.map((link, index) => (
                <MenuItem
                  key={index}
                  sx={{ textDecoration: "none", color: "#F9F9F9" }}
                >
                  {index === 0 ? (
                    <a
                      style={menuLinkStyle}
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link style={menuLinkStyle} to={link.path}>
                      {link.label}
                    </Link>
                  )}
                </MenuItem>
              ))}
            </Menu>

            {/* Nav Button Links for non mobile devices */}
            <Stack
              display={{ xs: "none", sm: "flex" }}
              direction={"row"}
              spacing={6}
            >
              {navLinks.map((link, index) => (
                <Button
                  key={index}
                  sx={{
                    "&:hover": {
                      color: "#FFF",
                      textDecoration: "underline",
                      textUnderlineOffset: "8px",
                    },
                  }}
                >
                  {index === 0 ? (
                    <a
                      style={navLinkStyle}
                      href={link.path}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link style={navLinkStyle} to={link.path}>
                      {link.label}
                    </Link>
                  )}
                </Button>
              ))}
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
