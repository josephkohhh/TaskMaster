/*
 * File: TaskMaster.jsx
 * Author: Joseph Koh
 * Description: This file contains the TaskMaster component responsible for managing tasks.
 */

import { useState } from "react";
import { Form } from "./Form";
import { TaskList } from "./TaskList";
import { Counter } from "./Counter";

export const TaskMaster = () => {
  // State to manage the task list
  const [taskList, setTaskList] = useState([]);

  // Retrieve stored task list from local storage or use an empty array if not present
  const storedTaskList = JSON.parse(localStorage.getItem("taskList")) || [];

  // Calculate the total number of tasks and the number of completed tasks
  const totalTask = storedTaskList.length;
  const completedTask = storedTaskList.filter((i) => i.isCompleted).length;

  // Render the TaskMaster component
  return (
    <>
      {/* Counter component displaying the total and completed tasks */}
      <Counter totalTask={totalTask} completedTask={completedTask} />
      {/* Form component for adding new tasks */}
      <Form taskList={taskList} setTaskList={setTaskList} />
      {/* TaskList component for displaying and managing the list of tasks */}
      <TaskList setTaskList={setTaskList} />
    </>
  );
};

/*
 * Component Structure:
 * - Counter
 * - Form
 * - TaskList
 *
 * Explanation:
 * - The TaskMaster component integrates Counter, Form, and TaskList components.
 * - It manages the taskList state using useState and retrieves the stored task list from local storage.
 * - The Counter component displays the total and completed tasks.
 * - The Form component allows users to add new tasks to the task list.
 * - The TaskList component displays and manages the list of tasks.
 */
