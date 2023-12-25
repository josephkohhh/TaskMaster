import { useState } from "react";
import { nanoid } from "nanoid";
/**
 * A child component to save/update user input to an array
 * @Form
 */
export const Form = ({ taskList, setTaskList }) => {
  const [task, setTask] = useState({ id: "", name: "", isCompleted: false });
  const handleSubmit = (event) => {
    event.preventDefault();
    setTaskList([...taskList, task]);
    setTask({ id: "", name: "", isCompleted: false });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add new task"
          value={task.name}
          onChange={(event) =>
            setTask({
              id: nanoid(),
              name: event.target.value,
              isCompleted: false,
            })
          }
        ></input>
        <button type="submit">Add</button>
      </form>
    </>
  );
};
