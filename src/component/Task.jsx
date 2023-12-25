/**
 * A child component to render task item
 * @Task
 */
export const Task = ({ item, taskList, setTaskList }) => {
  const handleDelete = (item) => {
    setTaskList(taskList.filter((i) => i.id !== item.id));
  };
  return (
    <div>
      <div>
        {item.name} {item.id}
        <span>
          <button onClick={() => handleDelete(item)}>X</button>
        </span>
      </div>
    </div>
  );
};
