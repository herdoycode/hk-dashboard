import config from "./../config.json";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import Pagination from "./Pagination";
import axios from "axios";
import { paginate } from "../utils/paginate";
import Options from "./common/Options";
import Table from "./common/Table";

const PostsTable = () => {
  const columns = [
    { id: 1, path: "title", label: "Title" },
    { id: 2, path: "category.name", label: "Category" },
    {
      id: 3,
      path: "",
      label: "Update",
      content: (post) => <button className="btn-warning"> Update </button>,
    },
    {
      id: 4,
      path: "",
      label: "Delete",
      content: (post) => (
        <button onClick={() => handleDelete(post)} className="btn-danger">
          Delete
        </button>
      ),
    },
  ];

  const [posts, setPosts] = useState([]);
  const [categorys, setCategorys] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortColumn, setSortColumn] = useState({
    path: "title",
    order: "asc",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(config.apiUrl + config.posts);
      setPosts(data);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchCategorys = async () => {
      const { data } = await axios.get(config.apiUrl + config.categorys);
      setCategorys(data);
    };
    fetchCategorys();
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

  const handleFilter = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleSort = (sortColumn) => {
    setSortColumn(sortColumn);
  };

  const handleDelete = async (post) => {
    const { data } = await axios.delete(
      config.apiUrl + config.posts + "/" + post._id
    );
    setPosts(posts.filter((p) => p._id !== data._id));
  };

  const filtered = selectedCategory
    ? posts.filter((p) => p.category._id === selectedCategory)
    : posts;

  const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

  const paginatePosts = paginate(sorted, currentPage, pageSize);

  return (
    <div>
      <h2 className="table__header">All Posts</h2>
      <div className="table__options">
        <Options items={categorys} onSelect={handleFilter} />
      </div>
      <Table
        data={paginatePosts}
        sortColumn={sortColumn}
        onSort={handleSort}
        columns={columns}
      />
      <Pagination
        itemsCount={filtered.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onChange={handlePageChange}
        onNext={handleNextPage}
        onPrev={handlePrevPage}
      />
    </div>
  );
};

export default PostsTable;
