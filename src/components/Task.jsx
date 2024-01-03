/*
 * File: Task.jsx
 * Author: Joseph koh
 * Description: This file contains the Task component for displaying individual tasks in the TaskMaster app.
 */

import { Box, Typography, IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export const Task = ({ item, taskList, setTaskList }) => {
  // Styling for the strike-through effect on completed tasks
  const strikeOff = {
    textDecoration: "line-through",
  };

  // Function to handle task deletion
  const handleDelete = (item) => {
    const updatedTaskList = taskList.filter((i) => i.id !== item.id);
    setTaskList(updatedTaskList);

    // Update local storage with the updated taskList
    localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
  };

  // Function to handle task completion toggle
  const handeClick = (id) => {
    const updatedTaskList = taskList.map((i) =>
      i.id === id ? { ...i, isCompleted: !i.isCompleted } : i
    );
    setTaskList(updatedTaskList);

    // Update local storage with the new taskList
    localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
  };

  // Apply the strike-through effect if the task is completed
  const strikeTask = item.isCompleted ? strikeOff : {};

  // Render the Task component
  return (
    <Box
      sx={{
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        width: "555px",
        backgroundColor: "white",
        padding: "5px 10px",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
      }}
    >
      {/* Display task name with strike-through effect for completed tasks */}
      <Typography
        variant="h6"
        style={strikeTask}
        onClick={() => handeClick(item.id)}
      >
        {item.name}
      </Typography>

      {/* Delete button to remove the task */}
      <IconButton
        onClick={() => handleDelete(item)}
        aria-label="delete"
        color="error"
        size="large"
        sx={{ marginLeft: "auto" }}
      >
        <HighlightOffIcon />
      </IconButton>
    </Box>
  );
};

/*
 * Component Structure:
 * - Box
 *   - Typography (Task name with strike-through effect for completed tasks)
 *   - IconButton (Delete button)
 *
 * Explanation:
 * - The Task component displays individual tasks.
 * - It receives task information, the taskList, and setTaskList as props.
 * - Clicking on the task toggles its completion status, and clicking on the delete button removes the task.
 */
