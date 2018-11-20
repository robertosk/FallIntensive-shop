import React from "react";

const Pagination = ({ pager, setPage, shownItems }) => {
  if (!pager.pages || pager.pages.length <= 1) {
    return null;
  }
  return (
    <>
      <ul className="pagination">
        <li className={pager.currentPage === 1 ? "hidden" : ""}>
          <a href="#" onClick={() => setPage(1, shownItems)}>
            {" "}
            {`<<`}
          </a>
        </li>
        <li className={pager.currentPage === 1 ? "hidden" : ""}>
          <a
            href="#"
            onClick={() => setPage(pager.currentPage - 1, shownItems)}
          >{`<`}</a>
        </li>
        {pager.pages.map((page, index) => (
          <li
            key={index}
            className={pager.currentPage === page ? "active" : ""}
          >
            <a href="#" onClick={() => setPage(page, shownItems)}>
              {page}
            </a>
          </li>
        ))}
        <li className={pager.currentPage === pager.totalPages ? "hidden" : ""}>
          <a
            href="#"
            onClick={() => setPage(pager.currentPage + 1, shownItems)}
          >
            >
          </a>
        </li>
        <li className={pager.currentPage === pager.totalPages ? "hidden" : ""}>
          <a href="#" onClick={() => setPage(pager.totalPages, shownItems)}>
            >>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Pagination;
