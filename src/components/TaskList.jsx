import { Task } from "./Task";
import { Box, Typography, Grid, Button, Stack } from "@mui/material";

export const TaskList = ({ taskList, setTaskList }) => {
  const sortedTaskList = taskList
    .slice()
    .sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F9F9F9",
          width: "600px",
          minHeight: "340px",
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          marginTop: "15px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "15px 10px 30px 15px ",
        }}
      >
        <Stack
          direction={"row"}
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">My Tasks</Typography>
          <Button color="error">Clear All</Button>
        </Stack>

        {sortedTaskList.map((item) => (
          <Task
            key={item.id}
            item={item}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        ))}
      </Box>
    </>
  );
};
