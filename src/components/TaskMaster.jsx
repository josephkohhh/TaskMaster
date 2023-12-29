import { useState } from "react";
import { Header } from "./Header";
import { Form } from "./Form";
import { TaskList } from "./TaskList";
import { Counter } from "./Counter";

export const TaskMaster = () => {
  const [taskList, setTaskList] = useState([]);
  const totalTask = taskList.length;
  const completedTask = taskList.filter((i) => i.isCompleted).length;
  return (
    <>
      <Header />
      <Counter totalTask={totalTask} completedTask={completedTask} />
      <Form taskList={taskList} setTaskList={setTaskList} />
      <TaskList taskList={taskList} setTaskList={setTaskList} />
    </>
  );
};
