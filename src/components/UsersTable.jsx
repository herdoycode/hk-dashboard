import config from "./../config.json";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import { format } from "timeago.js";
import Pagination from "./Pagination";
import axios from "axios";
import { paginate } from "../utils/paginate";
import Table from "./common/Table";

const UsersTable = () => {
  const columns = [
    { id: 1, path: "name", label: "Name" },
    { id: 2, path: "email", label: "Email" },
    {
      id: 3,
      path: "",
      label: "Join",
      content: (comment) => <p> {format(comment.createdAt)} </p>,
    },
    {
      id: 4,
      label: "Delete",
      content: (comment) => (
        <button onClick={() => handleDelete(comment)} className="btn-danger">
          Delete
        </button>
      ),
    },
  ];

  const [users, setUsers] = useState([]);

  const [sortColumn, setSortColumn] = useState({
    path: "name",
    order: "asc",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(config.apiUrl + config.users);
      setUsers(data);
    };
    fetchUsers();
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

  const handleSort = (sortColumn) => {
    setSortColumn(sortColumn);
  };

  const handleDelete = async (comment) => {
    try {
      await axios.delete(config.apiUrl + config.comments + "/" + comment._id);
      setUsers(users.filter((c) => c._id !== comment._id));
    } catch (error) {
      console.log(error);
    }
  };

  const sorted = _.orderBy(users, [sortColumn.path], [sortColumn.order]);

  const paginateUsers = paginate(sorted, currentPage, pageSize);

  return (
    <div>
      <h2 className="table__header">All Comments</h2>
      <Table
        data={paginateUsers}
        sortColumn={sortColumn}
        onSort={handleSort}
        columns={columns}
      />
      <Pagination
        itemsCount={users.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onChange={handlePageChange}
        onNext={handleNextPage}
        onPrev={handlePrevPage}
      />
    </div>
  );
};

export default UsersTable;
