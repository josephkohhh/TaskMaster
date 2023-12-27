import { Task } from "./Task";

export const TaskList = ({ taskList, setTaskList }) => {
  const sortedTaskList = taskList
    .slice()
    .sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));
  return (
    <>
      <div>
        <h4>My Tasks</h4>
        {sortedTaskList.map((item) => (
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
