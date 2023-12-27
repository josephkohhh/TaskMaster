import { useState } from "react";
import { Header } from "./Header";
import { Form } from "./Form";
import { TaskList } from "./TaskList";
import { Footer } from "./Footer";

export const TaskMaster = () => {
  const [taskList, setTaskList] = useState([]);
  const totalTask = taskList.length;
  const completedTask = taskList.filter((i) => i.isCompleted).length;
  return (
    <>
      <Header />
      <Form taskList={taskList} setTaskList={setTaskList} />
      <TaskList taskList={taskList} setTaskList={setTaskList} />
      <Footer totalTask={totalTask} completedTask={completedTask} />
    </>
  );
};
