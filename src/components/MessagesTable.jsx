import config from "./../config.json";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import { format } from "timeago.js";
import Pagination from "./Pagination";
import axios from "axios";
import { paginate } from "../utils/paginate";
import Options from "./common/Options";
import Table from "./common/Table";

const MessagesTable = () => {
  const columns = [
    { id: 1, path: "sender", label: "Sender" },
    { id: 2, path: "email", label: "Email" },
    { id: 3, path: "message", label: "Message" },
    {
      id: 4,
      path: "createdAt",
      label: "Date",
      content: (message) => <p> {format(message.createdAt)} </p>,
    },
    {
      id: 5,
      label: "Delete",
      content: (post) => <button className="btn-danger"> Delete </button>,
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
      const { data } = await axios.get(config.apiUrl + config.messages);
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

export default MessagesTable;
