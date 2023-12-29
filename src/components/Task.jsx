import styles from "./task.module.css";
import { Box, Typography, IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export const Task = ({ item, taskList, setTaskList }) => {
  const strikeOff = {
    textDecoration: "line-through",
  };
  const handleDelete = (item) => {
    setTaskList(taskList.filter((i) => i.id !== item.id));
  };
  const handeClick = (id) => {
    setTaskList(
      taskList.map((i) =>
        i.id === id ? { ...i, isCompleted: !i.isCompleted } : i
      )
    );
  };
  const strikeTask = item.isCompleted ? strikeOff : {};
  return (
    <Box
      sx={{
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        width: "555px",
        backgroundColor: "white",
        padding: "5px 10px",
        border: "1px solid rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
      }}
    >
      <Typography
        variant="h6"
        style={strikeTask}
        onClick={() => handeClick(item.id)}
      >
        {item.name}
      </Typography>
      <IconButton
        onClick={() => handleDelete(item)}
        aria-label="delete"
        color="error"
        size="large"
        sx={{ marginLeft: "auto" }}
      >
        <HighlightOffIcon />
      </IconButton>
    </Box>
  );
};
