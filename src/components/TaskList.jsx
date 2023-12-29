import { Task } from "./Task";
import { Box, Typography, Grid } from "@mui/material";

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
          alignItems: "center",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h6" sx={{ marginTop: "10px" }}>
          My Tasks
        </Typography>
        <Grid
          container
          sx={{
            width: "580px",
            margin: "0 auto",
            marginTop: "10px",
            justifyContent: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {sortedTaskList.map((item) => (
            <Task
              key={item.id}
              item={item}
              taskList={taskList}
              setTaskList={setTaskList}
            />
          ))}
        </Grid>
      </Box>
    </>
  );
};
