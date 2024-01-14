// File: Counter.jsx
// Author: Joseph Kogh
// Description: This component displays task statistics and adjusts its layout based on screen size.

import React from "react";
import { Stack, Box, Typography, useMediaQuery } from "@mui/material";

// Main styles for the task counter boxes
const boxStyle = {
  sx: {
    backgroundColor: "#F9F9F9",
    display: "flex",
    width: "100%",
    padding: "10px",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};

// Styles for the task counter boxes on smaller screens
const mobileBoxStyle = {
  sx: {
    backgroundColor: "#F9F9F9",
    display: "flex",
    padding: "10px",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};

// Counter component
export const Counter = ({ totalTask, completedTask }) => {
  // Media queries to determine screen size
  const isXsScreen = useMediaQuery("(max-width:600px)");
  const isXXsScreen = useMediaQuery("(max-width:350px)");

  return (
    <>
      {/* Counter layout for larger screens (width > 600px) */}
      {!isXsScreen && (
        <Stack
          direction={"row"}
          spacing={2}
          sx={{
            width: "600px",
            margin: "auto",
            marginTop: "10px",
            padding: "10px",
          }}
        >
          <Box {...boxStyle}>
            <Typography>Completed Task: {completedTask}</Typography>
          </Box>
          <Box {...boxStyle}>
            <Typography>Total Task: {totalTask}</Typography>
          </Box>
        </Stack>
      )}

      {/* Counter layout for medium screens (width > 350px and <= 600px) */}
      {isXsScreen && !isXXsScreen && (
        <Stack
          direction={"column"}
          spacing={2}
          sx={{
            width: "300px",
            margin: "auto",
            marginTop: "10px",
            padding: "10px",
          }}
        >
          <Box {...mobileBoxStyle}>
            <Typography>Completed Task: {completedTask}</Typography>
          </Box>
          <Box {...mobileBoxStyle}>
            <Typography>Total Task: {totalTask}</Typography>
          </Box>
        </Stack>
      )}

      {/* Counter layout for smallest screens (width <= 350px) */}
      {isXXsScreen && (
        <Stack
          direction={"column"}
          spacing={2}
          sx={{
            width: "200px",
            margin: "auto",
            marginTop: "10px",
            padding: "10px",
          }}
        >
          <Box {...mobileBoxStyle}>
            <Typography>Completed Task: {completedTask}</Typography>
          </Box>
          <Box {...mobileBoxStyle}>
            <Typography>Total Task: {totalTask}</Typography>
          </Box>
        </Stack>
      )}
    </>
  );
};
