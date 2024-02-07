/**
 * File: TaskMaster.jsx
 * Author: Joseph koh
 * Description: Main component that manages the TaskMaster app
 */

import { useState } from "react";
import { Counter } from "../ui/Counter";
import { Form } from "../form/Form";
import { TaskList } from "./TaskList";
import { getFromLocalStorage } from "../../services/localStorage";

export const TaskMaster = () => {
  // Initialize taskList state with data from local storage or an empty array
  const initTaskList = getFromLocalStorage("taskList") || [];
  const [taskList, setTaskList] = useState(initTaskList);

  // Calculate completed and total tasks
  const completedTaskList = initTaskList.filter((i) => i.isCompleted).length;
  const totalTaskList = initTaskList.length;

  // Sort the task list based on completion status
  const sortedTaskList = initTaskList
    .slice()
    .sort((a, b) => a.isCompleted - b.isCompleted);
  return (
    <>
      {/* Display the Counter component */}
      <Counter
        completedTaskList={completedTaskList}
        totalTaskList={totalTaskList}
      />

      {/* Display the Form component */}
      <Form taskList={taskList} setTaskList={setTaskList} />

      {/* Display the TaskList component */}
      <TaskList sortedTaskList={sortedTaskList} setTaskList={setTaskList} />
    </>
  );
};
