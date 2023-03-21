import React from "react";

const Options = ({ items, onSelect }) => {
  return (
    <>
      <div className="filter">
        <h3>Filter By Categorys</h3>
        <select defaultValue={"DEFAULT"}>
          <option value="DEFAULT" onClick={() => onSelect("")}>
            All Posts
          </option>
          {items.map((item) => (
            <option
              key={item._id}
              onClick={() => onSelect(item._id)}
              value={item._id}
            >
              {item.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Options;
