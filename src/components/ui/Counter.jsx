/**
 * File: Counter.jsx
 * Author: Joseph Koh
 * Description: Component to display the counter for completed and total tasks in TaskMaster app.
 */

import { Stack, Box, Typography } from "@mui/material";

export const Counter = ({ totalTaskList, completedTaskList }) => {
  // Styling for the counter box
  const boxStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "200px",
    height: "25px",
    padding: "10px",
    backgroundColor: "#F9F9F9",
    borderRadius: "10px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 8px 0px",
  };
  return (
    <>
      {/* Counter wrapper */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={2}
        my={3}
      >
        {/* Completed task box */}
        <Box style={boxStyle}>
          <Typography>Completed Task: {completedTaskList}</Typography>
        </Box>

        {/* Total task box */}
        <Box style={boxStyle}>
          <Typography>Total Task: {totalTaskList}</Typography>
        </Box>
      </Stack>
    </>
  );
};
