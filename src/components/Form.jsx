import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { Stack, TextField, Button } from "@mui/material";

export const Form = ({ taskList, setTaskList }) => {
  const [task, setTask] = useState({ id: "", name: "", isCompleted: false });

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   task.name.trim() !== "" ? setTaskList([...taskList, task]) : {};
  //   setTask({ id: "", name: "", isCompleted: false });
  // };

  // Initialize taskList with the storedTaskList from localStorage
  useEffect(() => {
    const storedTaskList = JSON.parse(localStorage.getItem("taskList")) || [];
    setTaskList(storedTaskList);
  }, [setTaskList]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const taskName = task.name.trim();

    if (taskName === "") {
      return; // Do nothing if the task name is empty
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
  return (
    <>
      <Stack direction="row" justifyContent="center" sx={{ marginTop: "15px" }}>
        <form onSubmit={handleSubmit}>
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
