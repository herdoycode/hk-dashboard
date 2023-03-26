import config from "./../config.json";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import { format } from "timeago.js";
import Pagination from "./Pagination";
import axios from "axios";
import { paginate } from "../utils/paginate";
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
      content: (message) => (
        <button onClick={() => handleDelete(message)} className="btn-danger">
          Delete
        </button>
      ),
    },
  ];

  const [messages, setMessages] = useState([]);
  const [sortColumn, setSortColumn] = useState({
    path: "sender",
    order: "asc",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(config.apiUrl + config.messages);
      setMessages(data);
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

  const handleSort = (sortColumn) => {
    setSortColumn(sortColumn);
  };

  const handleDelete = async (message) => {
    const { data } = await axios.delete(
      config.apiUrl + config.messages + "/" + message._id
    );
    setMessages(messages.filter((m) => m._id !== data._id));
  };

  const sorted = _.orderBy(messages, [sortColumn.path], [sortColumn.order]);

  const paginatePosts = paginate(sorted, currentPage, pageSize);

  return (
    <div>
      <h2 className="table__header">All Messages</h2>
      <Table
        data={paginatePosts}
        sortColumn={sortColumn}
        onSort={handleSort}
        columns={columns}
      />
      <Pagination
        itemsCount={messages.length}
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
