import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { FontTheme } from "./components/FontTheme";
import { TaskMaster } from "./components/TaskMaster";

function App() {
  return (
    <ThemeProvider theme={FontTheme}>
      <TaskMaster />
    </ThemeProvider>
  );
}

export default App;
