// File: Task.jsx
// Author: Joseph Koh
// Description: This component represents an individual task with delete and toggle completion feature.

import { Stack, Typography, IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Tooltip from "@mui/material/Tooltip";

// Task component
export const Task = ({ item, taskList, setTaskList }) => {
  // Function to handle task deletion
  const handleDelete = (id) => {
    const updatedTaskList = taskList.filter((i) => i.id !== id);
    setTaskList(updatedTaskList);

    localStorage.setItem("taskList", JSON.stringify(updatedTaskList)); // Update localStorage after deleting a task
  };

  // Function to handle toggling task completion
  const handleClick = (id) => {
    const updatedTaskList = taskList.map((i) =>
      i.id === id ? { ...i, isCompleted: !i.isCompleted } : i
    );
    setTaskList(updatedTaskList);

    localStorage.setItem("taskList", JSON.stringify(updatedTaskList)); // Update localStorage after toggling completion status
  };

  // Styles for striking off completed tasks
  const strikeOff = {
    textDecoration: "line-through",
    color: "green",
  };

  // Apply strike-through style if the task is completed
  const strikeOffTask = item.isCompleted ? strikeOff : {};
  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          margin: "auto",
          alignItems: "center",
          justifyContent: "space-between",
          width: "95%",
          backgroundColor: "white",
          padding: "5px 5px",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
        }}
      >
        {/* Tooltip for indicating that clicking toggles completion */}
        <Tooltip title="Click to toggle completion">
          {/* Typography to display task name with strike-through for completed tasks */}
          <Typography
            sx={{ paddingLeft: "5px", cursor: "pointer" }}
            style={strikeOffTask}
            onClick={() => handleClick(item.id)}
          >
            {item.name}
          </Typography>
        </Tooltip>

        {/* IconButton for deleting the task */}
        <IconButton color="error" onClick={() => handleDelete(item.id)}>
          <HighlightOffIcon />
        </IconButton>
      </Stack>
    </>
  );
};
