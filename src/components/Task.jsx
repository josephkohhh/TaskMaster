import styles from "./task.module.css";
import { Box, Typography, IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export const Task = ({ item, taskList, setTaskList }) => {
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
  const taskStrike = item.isCompleted ? styles.strike : {};
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        backgroundColor: "white",
        padding: "20px",
      }}
    >
      <Typography
        variant="h6"
        className={taskStrike}
        onClick={() => handeClick(item.id)}
      >
        {item.name}
      </Typography>
      <IconButton
        onClick={() => handleDelete(item)}
        aria-label="delete"
        color="error"
        size="large"
        sx={{ marginLeft: "auto", marginTop: "-6px" }}
      >
        <HighlightOffIcon />
      </IconButton>
    </Box>
  );
};
