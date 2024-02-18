/**
 * File: EmptyList.jsx
 * Author: Joseph Koh
 * Description: Component to display empty list
 */

import { Box, Typography } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

export const EmptyList = () => {
  return (
    <Box width={"100%"} textAlign={"center"} marginTop={3}>
      <TaskAltIcon sx={{ fontSize: "100px", color: "#04AA6D" }} />
      <Typography variant="h5">You have no Task</Typography>
    </Box>
  );
};
