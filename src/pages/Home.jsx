/**
 * File: Home.jsx
 * Author: Joseph Koh
 * Description: Home page component showcasing the TaskMaster application.
 */

import "../components/ui/Navbar";
import { Navbar } from "../components/ui/Navbar";
import { TaskMaster } from "../components/containers/TaskMaster";

export const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* TaskMaster */}
      <TaskMaster />
    </>
  );
};
