/**
 * File: TaskList.jsx
 * Author: Joseph Koh
 * Description: Represents a container for displaying a list of tasks
 */

import { Box, Stack, Button, Typography } from "@mui/material";
import { Task } from "./Task";
import { clearFromLocalStorage } from "../../services/localStorage";
import { EmptyList } from "../ui/EmptyList";

export const TaskList = ({ sortedTaskList, setTaskList }) => {
  // Function to clear taskList in state and localStorage
  const handleClearAll = () => {
    setTaskList([]);
    clearFromLocalStorage("taskList");
  };
  return (
    <>
      {/* TaskList container */}
      <Box
        my={2}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* TaskList wrapper */}
        <Box
          width={{ xs: "220px", sm: "400px", md: "500px" }}
          display={"flex"}
          flexDirection={"column"}
          bgcolor={"#F9F9F9"}
          borderRadius={"10px"}
          boxShadow={"rgba(0, 0, 0, 0.1) 0px 4px 8px"}
          marginBottom={10}
          p={2}
        >
          {/* TaskList header */}
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="h6">My Tasks</Typography>
            <Button
              variant="outlined"
              color="error"
              size="small"
              onClick={handleClearAll}
              disabled={sortedTaskList.length === 0}
            >
              Clear All
            </Button>
          </Stack>

          {/* Task container */}
          <Stack
            direction={"column"}
            alignItems={"center"}
            marginTop={"10px"}
            minHeight={"300px"}
          >
            {sortedTaskList.length === 0 ? (
              // render if empty list
              <EmptyList />
            ) : (
              // render if list > 0
              sortedTaskList.map((item) => (
                <Task key={item.id} item={item} setTaskList={setTaskList} />
              ))
            )}
          </Stack>
        </Box>
      </Box>
    </>
  );
};
