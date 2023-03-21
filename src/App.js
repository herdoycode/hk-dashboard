import React from "react";
import { Route, Routes } from "react-router-dom";
import CommentTable from "./components/CommentTable";
import MessagesTable from "./components/MessagesTable";
import Navbar from "./components/Navbar";
import PostsTable from "./components/PostsTable";
import Sidebar from "./components/Sidebar";
import UsersTable from "./components/UsersTable";

const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="main">
        <Routes>
          <Route path="/posts" element={<PostsTable />} />
          <Route path="/comments" element={<CommentTable />} />
          <Route path="/messages" element={<MessagesTable />} />
          <Route path="/users" element={<UsersTable />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
