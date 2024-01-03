/*
 * File: TaskList.jsx
 * Author: Joseph Koh
 * Description: This file contains the TaskList component for displaying a list of tasks in the TaskMaster app.
 */

import { Task } from "./Task";
import { Box, Typography, Button, Stack } from "@mui/material";

export const TaskList = ({ setTaskList }) => {
  // Function to retrieve taskList from local storage
  const getTaskListFromLocalStorage = () =>
    JSON.parse(localStorage.getItem("taskList")) || [];

  // Function to handle clearing all tasks
  const handleClearAll = () => {
    setTaskList([]);
    localStorage.removeItem("taskList");
  };

  // Retrieve the taskList from local storage and sort it based on completion status
  const taskList = getTaskListFromLocalStorage();
  const sortedTaskList = getTaskListFromLocalStorage()
    .slice()
    .sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));

  // Render the TaskList component
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F9F9F9",
          width: "600px",
          minHeight: "100px",
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          marginTop: "15px",
          marginBottom: "80px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "15px 15px 30px 15px ",
        }}
      >
        {/* Header with title and clear all button */}
        <Stack
          direction={"row"}
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">My Tasks</Typography>
          <Button color="error" disableRipple onClick={handleClearAll}>
            Clear All
          </Button>
        </Stack>

        {/* Container for displaying individual tasks */}
        <Box sx={{ marginTop: "15px" }}>
          {sortedTaskList.map((item) => (
            <Task
              key={item.id}
              item={item}
              taskList={taskList}
              setTaskList={setTaskList}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

/*
 * Component Structure:
 * - Box
 *   - Stack (Header with title and clear all button)
 *     - Typography (Title)
 *     - Button (Clear All)
 *   - Box (Container for displaying individual tasks)
 *     - Task (Individual task components)
 *
 * Explanation:
 * - The TaskList component displays a list of tasks with a clear all button.
 * - It retrieves the taskList from local storage and sorts it based on completion status.
 * - The header includes a title and a button to clear all tasks.
 * - The sorted task list is mapped to individual Task components for rendering.
 */
