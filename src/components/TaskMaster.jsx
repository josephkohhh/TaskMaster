// File: TaskMaster.jsx
// Author: Joseph Koh
// Description: This component manages a task list using useState hook and localStorage.

import { useState } from "react";
import { Counter } from "./Counter";
import { Form } from "./Form";
import { TaskList } from "./TaskList";

// TaskMaster component
export const TaskMaster = () => {
  const [taskList, setTaskList] = useState([]); // State to manage the task list
  const storedTaskList = JSON.parse(localStorage.getItem("taskList")) || []; // Retrieve stored task list from localStorage or initialize an empty array

  // Calculate total and completed tasks
  const totalTask = storedTaskList.length;
  const completedTask = storedTaskList.filter((i) => i.isCompleted).length;
  return (
    <>
      {/* Counter component to display task count */}
      <Counter totalTask={totalTask} completedTask={completedTask} />

      {/* Form component for adding new tasks */}
      <Form taskList={taskList} setTaskList={setTaskList} />

      {/* TaskList component to display and manage the task list */}
      <TaskList setTaskList={setTaskList} />
    </>
  );
};
