/**
 * File: App.jsx
 * Author: Joseph Koh
 * Description: Entry point for the React application
 */

import "./App.css";
import { RouterComponent } from "./lib/RouterComponent";
import { FontTheme } from "./theme/FontTheme";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <>
      {/* Wrap components with custom theme */}
      <ThemeProvider theme={FontTheme}>
        {/* Render the RouterComponent for managing routes */}
        <RouterComponent />
      </ThemeProvider>
    </>
  );
}

export default App;
