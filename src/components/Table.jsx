import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import axios from "axios";
import { paginate } from "../utils/paginate";

const Table = () => {
  const [posts, setPosts] = useState([]);
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(data.splice(0, 50));
    };
    fetchPosts();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const paginatePosts = paginate(posts, currentPage, pageSize);

  return (
    <div>
      <h2 className="table__header">All Posts</h2>
      <table className="table bg-white">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {paginatePosts.map((post) => (
            <tr key={post.id}>
              <td>
                <p> {post.id} </p>
              </td>
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
      <Pagination
        itemsCount={posts.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onChange={handlePageChange}
        onNext={handleNextPage}
        onPrev={handlePrevPage}
      />
    </div>
  );
};

export default Table;
