import styles from "./task.module.css";

export const Task = ({ item, taskList, setTaskList }) => {
  const handleDelete = (item) => {
    setTaskList(taskList.filter((i) => i.id !== item.id));
  };
  const handeClick = (id) => {
    setTaskList(
      taskList.map((i) =>
        i.id === id ? { ...i, isCompleted: !i.isCompleted } : i
      )
    );
  };
  const taskStrike = item.isCompleted ? styles.strike : {};
  return (
    <>
      <div>
        <span className={taskStrike} onClick={() => handeClick(item.id)}>
          {item.name}
        </span>
        <span>
          <button onClick={() => handleDelete(item)}>X</button>
        </span>
      </div>
    </>
  );
};
