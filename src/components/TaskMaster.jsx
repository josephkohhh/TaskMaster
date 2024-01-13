import { useState } from "react";
import { Counter } from "./Counter";
import { Form } from "./Form";
import { TaskList } from "./TaskList";

export const TaskMaster = () => {
  const [taskList, setTaskList] = useState([]);

  const storedTaskList = JSON.parse(localStorage.getItem("taskList")) || [];

  const totalTask = storedTaskList.length;
  const completedTask = storedTaskList.filter((i) => i.isCompleted).length;
  return (
    <>
      <Counter totalTask={totalTask} completedTask={completedTask} />
      <Form taskList={taskList} setTaskList={setTaskList} />
      <TaskList setTaskList={setTaskList} />
    </>
  );
};
