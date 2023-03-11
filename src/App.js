import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";

const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="main">
        <Routes>
          <Route path="posts" element={<Table />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
