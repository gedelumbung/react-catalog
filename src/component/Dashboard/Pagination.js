import React from "react";

const Pagination = ({ pagination, onClick }) => {
  const pages = [];
  for (var i = 0; i < pagination.last_page; i++) {
    pages.push(i + 1);
  }
  return (
    <div className="pagination is-small">
      <ul className="pagination-list">
        {pages.map((page, index) => {
          const isDisabled = pagination.current_page === page ? true : false;
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
    </div>
  );
};

export default Pagination;
