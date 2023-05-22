import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import MessagesTable from "./components/MessagesTable";
import PostsTable from "./components/PostsTable";
import UsersTable from "./components/UsersTable";
import Login from "./pages/Login";
import Register from "./pages/Register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "posts", element: <PostsTable /> },
      { path: "messages", element: <MessagesTable /> },
      { path: "users", element: <UsersTable /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

export default routes;
