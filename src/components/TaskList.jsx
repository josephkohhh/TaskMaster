import { Task } from "./Task";
import { Box, Typography, Button, Stack } from "@mui/material";

export const TaskList = ({ setTaskList }) => {
  // Function to retrieve taskList from local storage
  const getTaskListFromLocalStorage = () => {
    const storedTaskList = localStorage.getItem("taskList");
    return storedTaskList ? JSON.parse(storedTaskList) : [];
  };
  const handleClearAll = () => {
    // Clear the taskList state
    setTaskList([]);
    // Clear the corresponding item from local storage
    localStorage.removeItem("taskList");
  };

  const taskList = getTaskListFromLocalStorage();
  const sortedTaskList = getTaskListFromLocalStorage()
    .slice()
    .sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F9F9F9",
          width: "600px",
          minHeight: "100px",
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          marginTop: "15px",
          marginBottom: "80px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "15px 15px 30px 15px ",
        }}
      >
        <Stack
          direction={"row"}
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">My Tasks</Typography>
          <Button color="error" disableRipple onClick={handleClearAll}>
            Clear All
          </Button>
        </Stack>

        <Box sx={{ marginTop: "15px" }}>
          {sortedTaskList.map((item) => (
            <Task
              key={item.id}
              item={item}
              taskList={taskList}
              setTaskList={setTaskList}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};
