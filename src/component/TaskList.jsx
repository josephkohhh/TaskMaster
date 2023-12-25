import { Task } from "./Task";
/**
 * A child component render task list
 * @TaskList
 */
export const TaskList = ({ taskList, setTaskList }) => {
  return (
    <>
      <div>
        {taskList.map((item) => (
          <Task
            key={item.id}
            item={item}
            taskList={taskList}
            setTaskList={setTaskList}
          />
        ))}
      </div>
    </>
  );
};
