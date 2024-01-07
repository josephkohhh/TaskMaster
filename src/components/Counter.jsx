/*
 * File: Counter.jsx
 * Author: Joseph Koh
 * Description: This file contains the Counter component for displaying task counts in the TaskMaster app.
 */

import { Stack, Box, Typography } from "@mui/material";

export const Counter = ({ totalTask, completedTask }) => {
  // Styling object for the Box component
  const boxStyle = {
    backgroundColor: "#F9F9F9",
    width: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  // Render the Counter component
  return (
    <Stack
      direction={"row"}
      spacing={2}
      sx={{
        width: "600px",
        height: "50px",
        margin: "0 auto",
        marginTop: "10px",
        padding: "10px",
      }}
    >
      {/* Box for displaying the completed task count */}
      <Box sx={boxStyle}>
        <Typography>Completed Task: {completedTask}</Typography>
      </Box>

      {/* Box for displaying the total task count */}
      <Box sx={boxStyle}>
        <Typography>Total Task: {totalTask}</Typography>
      </Box>
    </Stack>
  );
};

/*
 * Component Structure:
 * - Stack
 *   - Box (Total Task)
 *     - Typography
 *   - Box (Completed Task)
 *     - Typography
 *
 * Explanation:
 * - The Counter component displays total and completed task counts in a horizontal Stack.
 * - Two Box components are used to create containers for the total and completed task counts.
 * - Typography is used to display the task counts inside each Box.
 * - Styling is applied to enhance the visual appearance of the counter.
 */
