import React from "react";
import { Stack, Box, Typography, useMediaQuery } from "@mui/material";

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

export const Counter = ({ totalTask, completedTask }) => {
  const isXsScreen = useMediaQuery("(max-width:600px)");
  const isXXsScreen = useMediaQuery("(max-width:350px)");

  return (
    <>
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
