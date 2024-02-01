/**
 * File: constants.js
 * Author: Joseph Koh
 * Description: A file to store data
 */

// About introduction
export const introduction = `A simple todo list app leveraging React and Material UI design. The goal of this app is to reinforce understanding of React's component-based architecture, ensuring a solid grasp of its fundamental concepts`;

// Data stored in app features table
export const tableData = [
  {
    feature: "Navbar",
    description: "App bar to navigate around",
  },
  {
    feature: "Counter",
    description: "To keep track the number of task",
  },
  { feature: "Form", description: "To add new task" },
  { feature: "Clear all button", description: "To delete all task" },
  { feature: "Delete button", description: "To delete selected task" },
  {
    feature: "Toggle task completion",
    description: "Click on task title to toggle completion",
  },
  {
    feature: "Local storage",
    description: "Task is saved to web local storage",
  },
  {
    feature: "Responsiveness",
    description: "App is responsive which supports mobile devices",
  },
];

// Code snippets stored in variables
export const routerCodeSnippet = `<Router>
  <Routes>
    {/* Default route */}
    <Route index element={<Home />} />
    {/* Home route */}
    <Route path="/Home" element={<Home />} />
    {/* About route */}
    <Route path="/about" element={<About />} />
  </Routes>
</Router>`;
export const useStateCodeSnippet = `const [task, setTask] = useState({ id: "", name: "", isCompleted: false });`;
export const useEffectCodeSnippet = `useEffect(() => {
  const handleResize = () => handleCloseMenu();
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);`;
export const localStorageCodeSnippet = `// Get
const getTaskListFromLocalStorage = () => JSON.parse(localStorage.getItem("taskList")) || [];
// Set
localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
// Delete
localStorage.removeItem("taskList");`;
export const arrayMapCodeSnippet = `{sortedTaskList.map((item) => (
  <Task key={item.id} item={item} setTaskList={setTaskList} />
))}`;
export const arrayFilterCodeSnippet = `const updatedTaskList = taskList.filter((i) => i.id !== item.id);`;
export const arraySomeCodeSnippet = `const isTaskAdded = taskList.some((task) => task.name.trim().toLowerCase() === taskName);`;
export const arraySliceSortCodeSnippet = `const sortedTaskList = initTaskList
.slice()
.sort((a, b) => a.isCompleted - b.isCompleted);`;
export const viteCodeSnippet = `npx create-vite project_name --template react`;
export const viteDevCodeSnippet = `npm run dev`;
export const viteProdCodeSnippet = `npm run build`;
export const muiCodeSnippet = `npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material`;
