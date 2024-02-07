/**
 * File: Task.jsx
 * Author: Joseph Koh
 * Description: Component for rendering individual tasks with options to delete and toggle completion status.
 */

import { Stack, Typography, IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { saveToLocalStorage } from "../../services/localStorage";

export const Task = ({ item, setTaskList }) => {
  // Function to handle deletion of a task
  const handleDelete = (id) =>
    setTaskList((prevTaskList) => {
      const updatedTaskList = prevTaskList.filter((i) => i.id !== id);
      saveToLocalStorage(updatedTaskList, "taskList");
      return updatedTaskList;
    });

  // Function to handle task completion
  const handleToggleCompletion = (id) =>
    setTaskList((prevTaskList) => {
      const updatedTaskList = prevTaskList.map((i) =>
        i.id === id ? { ...i, isCompleted: !i.isCompleted } : i
      );
      saveToLocalStorage(updatedTaskList, "taskList");
      return updatedTaskList;
    });
  // Styling for completed tasks
  const strikeOff = {
    textDecoration: "line-through",
    color: "green",
  };
  const taskStatus = item.isCompleted ? strikeOff : {};

  return (
    <>
      {/* Task wrapper */}
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bgcolor={"#FFF"}
        width={"100%"}
        border={"1px solid rgba(0, 0, 0, 0.1)"}
        borderRadius={"10px"}
      >
        {/* Task title */}
        <Typography
          mx={2}
          my={1}
          sx={{ cursor: "pointer" }}
          onClick={() => handleToggleCompletion(item.id)}
          style={taskStatus}
        >
          {item.name}
        </Typography>
        {/* Delete button */}
        <IconButton
          color="error"
          sx={{ mx: "16px", my: "8px" }}
          onClick={() => handleDelete(item.id)}
        >
          <HighlightOffIcon />
        </IconButton>
      </Stack>
    </>
  );
};
