import { useState } from "react";
import { Form } from "./Form";
import { TaskList } from "./TaskList";
/**
 * A parent component
 * @TaskMaster
 */
export const TaskMaster = () => {
  const [taskList, setTaskList] = useState([]);
  return (
    <>
      <Form taskList={taskList} setTaskList={setTaskList} />
      <TaskList taskList={taskList} setTaskList={setTaskList} />
    </>
  );
};
