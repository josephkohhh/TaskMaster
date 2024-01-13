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

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};

export const Header = () => {
  const isXsScreen = useMediaQuery("(max-width:600px)");
  const [anchorEl, setAnchorEl] = useState(null);
  const handleToggleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleResize = () => {
      handleCloseMenu();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
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
