import { Stack, TextField, Button, useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

export const Form = ({ taskList, setTaskList }) => {
  const [task, setTask] = useState({ id: "", name: "", isCompleted: false });

  useEffect(() => {
    const storedTaskList = JSON.parse(localStorage.getItem("taskList")) || [];
    setTaskList(storedTaskList);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const taskName = task.name.trim();

    if (taskName === "") {
      return;
    }

    const isTaskAdded = taskList.some((i) => i.name.trim() === taskName);

    if (isTaskAdded) {
      alert(`Task ${taskName} is already added`);
      return;
    }

    const updatedTaskList = [...taskList, { ...task, name: taskName }];
    setTaskList(updatedTaskList);

    localStorage.setItem("taskList", JSON.stringify(updatedTaskList));

    setTask({ id: "", name: "", isCompleted: false });
  };
  const isXXsScreen = useMediaQuery("(max-width:350px)");
  return (
    <>
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
