/**
 * File: Form.jsx
 * Author: Joseph Koh
 * Description: Represents a form for adding tasks to the TaskList
 */

import { Stack } from "@mui/material";
import { useState } from "react";
import { nanoid } from "nanoid";
import { TextInput } from "../ui/TextInput";
import { SubmitButton } from "../ui/SubmitButton";
import { saveToLocalStorage } from "../../services/localStorage";

export const Form = ({ taskList, setTaskList }) => {
  // State for managing the input task
  const [task, setTask] = useState({ id: "", name: "", isCompleted: false });

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const taskName = task.name.trim().toLowerCase();

    // Check if the task name is empty
    if (taskName === "") {
      return;
    }

    // Check if the task is already added
    const isTaskAdded = taskList.some(
      (i) => i.name.trim().toLowerCase() === taskName
    );
    if (isTaskAdded) {
      alert(`Task ${taskName} is already added`);
      return;
    }

    // Update the taskList and save to local storage
    setTaskList((prevTaskList) => {
      const updatedTaskList = [...prevTaskList, { ...task, name: taskName }];
      saveToLocalStorage(updatedTaskList, "taskList");
      return updatedTaskList;
    });

    // Reset the task input
    setTask({ id: "", name: "", isCompleted: false });
  };

  return (
    <>
      {/* Task form */}
      <form onSubmit={handleSubmit}>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={2}
        >
          {/* Task input field */}
          <TextInput
            placeholder="Add Task..."
            value={task.name}
            onChange={(event) =>
              setTask({
                id: nanoid(),
                name: event.target.value,
                isCompleted: false,
              })
            }
            sx={{
              bgcolor: "#F9F9F9",
              width: { xs: "150px", sm: "250px", md: "300px" },
            }}
          />

          {/* Submit button */}
          <SubmitButton
            type="submit"
            variant="contained"
            size="large"
            disableElevation
            disableRipple
            sx={{
              bgcolor: "#04AA6D",
              paddingY: "14px",
              "&:hover": { bgcolor: "#039962" },
            }}
          >
            Add
          </SubmitButton>
        </Stack>
      </form>
    </>
  );
};
