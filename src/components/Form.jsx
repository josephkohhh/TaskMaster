import { useState } from "react";
import { nanoid } from "nanoid";
import { Stack, TextField, Button } from "@mui/material";

export const Form = ({ taskList, setTaskList }) => {
  const [task, setTask] = useState({ id: "", name: "", isCompleted: false });
  const handleSubmit = (event) => {
    event.preventDefault();
    task.name.trim() !== "" ? setTaskList([...taskList, task]) : {};
    setTask({ id: "", name: "", isCompleted: false });
  };
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        spacing={2}
        sx={{ marginTop: "10px" }}
      >
        <TextField
          type="text"
          label="Add task"
          variant="outlined"
          sx={{ width: "400px" }}
        />
        <Button
          variant="contained"
          size="large"
          sx={{
            width: "90px",
            backgroundColor: "rgb(53, 53, 53)",
            fontFamily: '"Poppins", sans-serif',
            "&:hover": {
              backgroundColor: "black",
            },
          }}
          disableRipple
          disableElevation
        >
          Add
        </Button>
      </Stack>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add new task"
          value={task.name}
          onChange={(event) =>
            setTask({
              id: nanoid(),
              name: event.target.value,
              isCompleted: false,
            })
          }
        ></input>
        <button type="submit">Add</button>
      </form>
    </>
  );
};
