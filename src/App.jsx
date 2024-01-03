/*
 * File: App.jsx
 * Author: Joseph Koh
 * Description: This file contains the main App component for rendering the TaskMaster app.
 */

// Import necessary styles and components
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { FontTheme } from "./components/FontTheme";
import { TaskMaster } from "./components/TaskMaster";

function App() {
  // Render the App component
  return (
    // Apply the FontTheme using MUI's ThemeProvider
    <ThemeProvider theme={FontTheme}>
      {/* Render the TaskMaster component */}
      <TaskMaster />
    </ThemeProvider>
  );
}

export default App;
