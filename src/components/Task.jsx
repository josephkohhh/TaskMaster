import { Stack, Typography, IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export const Task = ({ item, taskList, setTaskList }) => {
  const handleDelete = (item) => {
    const updatedTaskList = taskList.filter((i) => i.id !== item.id);
    setTaskList(updatedTaskList);

    localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
  };

  const handleClick = (id) => {
    const updatedTaskList = taskList.map((i) =>
      i.id === id ? { ...i, isCompleted: !i.isCompleted } : i
    );
    setTaskList(updatedTaskList);

    localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
  };
  const strikeOff = {
    textDecoration: "line-through",
    color: "green",
  };
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
        <Typography
          sx={{ paddingLeft: "5px", cursor: "pointer" }}
          style={strikeOffTask}
          onClick={() => handleClick(item.id)}
        >
          {item.name}
        </Typography>
        <IconButton color="error" onClick={() => handleDelete(item)}>
          <HighlightOffIcon />
        </IconButton>
      </Stack>
    </>
  );
};
