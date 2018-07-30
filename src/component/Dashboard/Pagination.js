import React from "react";
import { Link } from "react-router-dom";
import { last, get } from "lodash";

const Pagination = ({ pagination, onClick }) => {
  const pages = [];
  for (var i = 0; i < pagination.last_page; i++) {
    pages.push(i+1);
  }
  return (
    <nav
      className="pagination is-small"
      role="navigation"
      aria-label="pagination"
    >
      <ul className="pagination-list">
      {pages.map((page, index) => {
          const isDisabled = pagination.current_page == page ? true : false;
          return (
            <li key={index}>
              <a
                className="pagination-link"
                onClick={!isDisabled ? onClick(page) : null}
                disabled={isDisabled}
              >
                {page}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
