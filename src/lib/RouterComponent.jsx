/**
 * File: RouterComponent.jsx
 * Author: Joseph Koh
 * Description: Component for setting up routing using React Router.
 */

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/About";

export const RouterComponent = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Default route */}
          <Route index element={<Home />} />
          {/* Home route */}
          <Route path="/Home" element={<Home />} />
          {/* About route */}
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};
