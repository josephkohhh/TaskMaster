/*
 * File: App.jsx
 * Author: Joseph Koh
 * Description: This file contains the main App component for rendering the TaskMaster app.
 */

// Import necessary styles and components
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { FontTheme } from "./components/FontTheme";
import { Header } from "./components/Header";
import { TaskMaster } from "./components/TaskMaster";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // Render the App component
  return (
    // Apply the FontTheme using MUI's ThemeProvider
    <ThemeProvider theme={FontTheme}>
      <Router>
        <div>
          {/* Header component for the app's navigational bar */}
          <Header />
          <Routes>
            {/* Default route to render TaskMaster when no path is specified */}
            <Route index element={<TaskMaster />} />
            {/* Explicit route to render TaskMaster when /home is accessed */}
            <Route path="/home" element={<TaskMaster />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
