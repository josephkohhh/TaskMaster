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
