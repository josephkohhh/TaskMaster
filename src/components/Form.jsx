/*
 * File: Form.jsx
 * Author: Joseph Koh
 * Description: This file contains the Form component for adding tasks in the TaskMaster app.
 */

import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { Stack, TextField, Button } from "@mui/material";

export const Form = ({ taskList, setTaskList }) => {
  // State to manage the input task and initialize with an empty task object
  const [task, setTask] = useState({ id: "", name: "", isCompleted: false });

  // Initialize taskList with the storedTaskList from localStorage using useEffect
  useEffect(() => {
    const storedTaskList = JSON.parse(localStorage.getItem("taskList")) || [];
    setTaskList(storedTaskList);
  }, [setTaskList]);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const taskName = task.name.trim();

    // Do nothing if the task name is empty
    if (taskName === "") {
      return;
    }

    // Check if the task already exists in the taskList
    const isTaskAdded = taskList.some((task) => task.name.trim() === taskName);

    if (isTaskAdded) {
      alert(`Task ${taskName} is already added`);
      return;
    }

    // If the task is not a duplicate, add it to the taskList
    const updatedTaskList = [...taskList, { ...task, name: taskName }];
    setTaskList(updatedTaskList);

    // Update localStorage with the new taskList
    localStorage.setItem("taskList", JSON.stringify(updatedTaskList));

    // Reset input
    setTask({ id: "", name: "", isCompleted: false });
  };

  // Render the Form component
  return (
    <>
      {/* Form to add new tasks */}
      <Stack direction="row" justifyContent="center" sx={{ marginTop: "15px" }}>
        <form onSubmit={handleSubmit}>
          {/* TextField for entering task name */}
          <TextField
            type="text"
            label="Add new task..."
            variant="outlined"
            sx={{ width: "400px", marginRight: "16px" }}
            value={task.name}
            onChange={(event) =>
              setTask({
                id: nanoid(),
                name: event.target.value,
                isCompleted: false,
              })
            }
          />

          {/* Button to submit the form and add a new task */}
          <Button
            type="submit"
            variant="contained"
            sx={{
              fontWeight: "bold",
              width: "100px",
              height: "56px",
              backgroundColor: "#1cca64",
              "&:hover": {
                backgroundColor: "#18b459",
              },
            }}
            disableRipple
            disableElevation
          >
            Add
          </Button>
        </form>
      </Stack>
    </>
  );
};

/*
 * Component Structure:
 * - Stack
 *   - form
 *     - TextField (Task input)
 *     - Button (Add task)
 *
 * Explanation:
 * - The Form component allows users to add new tasks.
 * - It includes a TextField for entering task names and a Button to submit the form.
 * - The state 'task' is used to manage the input task.
 * - The useEffect hook initializes the taskList with the storedTaskList from localStorage.
 * - The handleSubmit function handles form submission, checks for duplicates, and updates the taskList and localStorage.
 */
