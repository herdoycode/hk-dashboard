import axios from "axios";
import React, { useEffect, useState } from "react";

const Table = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(data);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <h2 className="table__header">All Posts</h2>
      <table className="table bg-white">
        <thead>
          <tr>
            <th>Title</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>
                <p> {post.title} </p>
              </td>
              <td>
                <button className="btn-purple">Update</button>
              </td>
              <td>
                <button className="btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
