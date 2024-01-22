export const routerCodeSnippet = `<Router>
<div>
  {/* Header component for the app's navigational bar */}
  <Header />
  <Routes>
    {/* Default route to render TaskMaster when no path is specified */}
    <Route index element={<TaskMaster />} />
    {/* Explicit route to render TaskMaster when /home is accessed */}
    <Route path="/home" element={<TaskMaster />} />
    {/* Explicit route to render About when /about is accessed */}
    <Route path="/about" element={<About />} />
  </Routes>
</div>
</Router>`;
export const useStateCodeSnippet = `export const [task, setTask] = useState({ id: "", name: "", isCompleted: false });
export const [taskList, setTaskList] = useState([]);`;
export const useEffectCodeSnippet = `useEffect(() => {
  export const storedTaskList = JSON.parse(localStorage.getItem("taskList")) || [];
  setTaskList(storedTaskList);
}, []);`;
export const localStorageCodeSnippet = `// Get
export const getTaskListFromLocalStorage = () => JSON.parse(localStorage.getItem("taskList")) || [];
// Set
localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
// Delete
localStorage.removeItem("taskList");`;
export const arrayMapCodeSnippet = `{sortedTaskList.map((item) => (
<Task
  key={item.id}
  item={item}
  taskList={taskList}
  setTaskList={setTaskList}
/>
))}`;
export const arrayFilterCodeSnippet = `export const updatedTaskList = taskList.filter((i) => i.id !== item.id);`;
export const arraySomeCodeSnippet = `export const isTaskAdded = taskList.some((task) => task.name.trim() === taskName);`;
export const arraySliceSortCodeSnippet = `export const sortedTaskList = getTaskListFromLocalStorage()
.slice()
.sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));`;
export const viteCodeSnippet = `npx create-vite project_name --template react`;
export const viteDevCodeSnippet = `npm run dev`;
export const viteProdCodeSnippet = `npm run build`;
export const muiCodeSnippet = `npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material`;
