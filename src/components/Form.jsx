// File: Form.jsx
// Author: Joseph Koh
// Description: This component let users to add new tasks to the task list.

import { Stack, TextField, Button, useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

// Form component
export const Form = ({ taskList, setTaskList }) => {
  const [task, setTask] = useState({ id: "", name: "", isCompleted: false }); // State to manage the current task being added

  // useEffect to load the task list from localStorage on component mount
  useEffect(() => {
    const storedTaskList = JSON.parse(localStorage.getItem("taskList")) || [];
    setTaskList(storedTaskList);
  }, []);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload when submit form

    const taskName = task.name.trim(); // Trim the task name

    // Check if the task name is empty
    if (taskName === "") {
      return;
    }

    // Check if the task is already added
    const isTaskAdded = taskList.some((i) => i.name.trim() === taskName);
    if (isTaskAdded) {
      alert(`Task ${taskName} is already added`);
      return;
    }

    // Update the task list with the new task
    const updatedTaskList = [...taskList, { ...task, name: taskName }];
    setTaskList(updatedTaskList);

    localStorage.setItem("taskList", JSON.stringify(updatedTaskList)); // Save the updated task list to localStorage

    setTask({ id: "", name: "", isCompleted: false }); // Reset the task state for a new task
  };

  const isXXsScreen = useMediaQuery("(max-width:350px)"); // Media query to determine screen size
  return (
    <>
      {/* Form for larger screens (width > 350px) */}
      <Stack
        direction={"row"}
        spacing={2}
        sx={{
          justifyContent: "center",
          marginTop: "15px",
        }}
      >
        {!isXXsScreen && (
          <form onSubmit={handleSubmit}>
            <TextField
              type="text"
              label="Add new task..."
              value={task.name}
              onChange={(event) =>
                setTask({
                  id: nanoid(),
                  name: event.target.value,
                  isCompleted: false,
                })
              }
              variant="outlined"
            ></TextField>
            <Button
              type="submit"
              variant="contained"
              disableRipple
              disableElevation
              sx={{
                padding: "15px 25px",
                marginLeft: "10px",
                bgcolor: "#1cca64",
                "&:hover": {
                  backgroundColor: "#18b459",
                },
              }}
            >
              Add
            </Button>
          </form>
        )}

        {/* Form for smaller screens (width <= 350px) */}
        {isXXsScreen && (
          <form onSubmit={handleSubmit}>
            <TextField
              type="text"
              label="Add new task..."
              value={task.name}
              onChange={(event) =>
                setTask({
                  id: nanoid(),
                  name: event.target.value,
                  isCompleted: false,
                })
              }
              variant="outlined"
              sx={{ width: "150px" }}
            ></TextField>
            <Button
              type="submit"
              variant="contained"
              disableRipple
              disableElevation
              sx={{
                padding: "15px 25px",
                marginLeft: "10px",
                bgcolor: "#1cca64",
                "&:hover": {
                  backgroundColor: "#18b459",
                },
              }}
            >
              Add
            </Button>
          </form>
        )}
      </Stack>
    </>
  );
};
