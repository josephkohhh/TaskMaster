import { Box, Stack, Typography, Button, useMediaQuery } from "@mui/material";
import { Task } from "./Task";

export const TaskList = ({ setTaskList }) => {
  const isXsScreen = useMediaQuery("(max-width:600px)");
  const isXXsScreen = useMediaQuery("(max-width:450px)");
  const isXXXsScreen = useMediaQuery("(max-width:350px)");

  const getTaskListFromLocalStorage = () =>
    JSON.parse(localStorage.getItem("taskList")) || [];

  const taskList = getTaskListFromLocalStorage();
  const sortedTaskList = getTaskListFromLocalStorage()
    .slice()
    .sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));

  const handleClearAll = () => {
    setTaskList([]);
    localStorage.removeItem("taskList");
  };

  return (
    <>
      {!isXsScreen && (
        <Box
          sx={{
            width: "550px",
            minHeight: "100px",
            margin: "20px auto 100px",
            bgcolor: "#F9F9F9",
            padding: "15px 10px 30px 10px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 10px 10px",
            }}
          >
            <Typography variant="h6">My Tasks</Typography>
            <Button color="error" disableRipple onClick={handleClearAll}>
              Clear All
            </Button>
          </Stack>
          <Stack direction={"column"}>
            {sortedTaskList.map((item) => (
              <Task
                key={item.id}
                item={item}
                taskList={taskList}
                setTaskList={setTaskList}
              />
            ))}
          </Stack>
        </Box>
      )}

      {isXsScreen && !isXXsScreen && (
        <Box
          sx={{
            width: "70%",
            minHeight: "100px",
            margin: "auto",
            marginTop: "20px",
            bgcolor: "#F9F9F9",
            padding: "15px 10px 30px 10px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 1% 1%",
            }}
          >
            <Typography variant="h6">My Tasks</Typography>
            <Button color="error" disableRipple onClick={handleClearAll}>
              Clear All
            </Button>
          </Stack>
          <Stack direction={"column"}>
            {sortedTaskList.map((item) => (
              <Task
                key={item.id}
                item={item}
                taskList={taskList}
                setTaskList={setTaskList}
              />
            ))}
          </Stack>
        </Box>
      )}

      {isXXsScreen && !isXXXsScreen && (
        <Box
          sx={{
            width: "70%",
            minHeight: "100px",
            margin: "auto",
            marginTop: "20px",
            bgcolor: "#F9F9F9",
            padding: "15px 10px 30px 10px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 1% 1%",
            }}
          >
            <Typography variant="h6">My Tasks</Typography>
            <Button color="error" disableRipple onClick={handleClearAll}>
              Clear All
            </Button>
          </Stack>
          <Stack direction={"column"}>
            {sortedTaskList.map((item) => (
              <Task
                key={item.id}
                item={item}
                taskList={taskList}
                setTaskList={setTaskList}
              />
            ))}
          </Stack>
        </Box>
      )}

      {isXXXsScreen && (
        <Box
          sx={{
            width: "70%",
            minHeight: "100px",
            margin: "auto",
            marginTop: "20px",
            bgcolor: "#F9F9F9",
            padding: "15px 10px 30px 10px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 1% 1%",
            }}
          >
            <Typography variant="body1">My Tasks</Typography>
            <Button
              color="error"
              disableRipple
              size="small"
              onClick={handleClearAll}
            >
              Clear All
            </Button>
          </Stack>
          <Stack direction={"column"}>
            {sortedTaskList.map((item) => (
              <Task
                key={item.id}
                item={item}
                taskList={taskList}
                setTaskList={setTaskList}
              />
            ))}
          </Stack>
        </Box>
      )}
    </>
  );
};
