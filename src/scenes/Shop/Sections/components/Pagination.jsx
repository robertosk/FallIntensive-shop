import React from "react";
import {
  compose,
  withState,
  withHandlers,
  lifecycle,
  defaultProps
} from "recompose";

const Pagination = ({ pager, setPage, shownItems }) => {
  if (!pager.pages || pager.pages.length <= 1) {
    return null;
  }
  console.log("=shownItems=");
  console.log(shownItems);
  console.log("====================================");
  return (
    <>
      <ul className="pagination">
        <li className={pager.currentPage === 1 ? "hidden" : ""}>
          <a onClick={() => setPage(1)}> {`<<`}</a>
        </li>
        <li className={pager.currentPage === 1 ? "hidden" : ""}>
          <a onClick={() => setPage(pager.currentPage - 1)}>{`<`}</a>
        </li>
        {pager.pages.map((page, index) => (
          <li
            key={index}
            className={pager.currentPage === page ? "active" : ""}
          >
            <a onClick={() => setPage(page)}>{page}</a>
          </li>
        ))}
        <li className={pager.currentPage === pager.totalPages ? "hidden" : ""}>
          <a onClick={() => setPage(pager.currentPage + 1)}>></a>
        </li>
        <li className={pager.currentPage === pager.totalPages ? "hidden" : ""}>
          <a onClick={() => setPage(pager.totalPages)}>>></a>
        </li>
      </ul>
    </>
  );
};
const enhance = compose(
  withState("pager", "handlePager", defaultProps),
  defaultProps({
    initialPage: 1,
    pageSize: 6
  }),
  withHandlers({
    getPager: props => (totalItems, currentPage, pageSize) => {
      currentPage = currentPage || 1;
      pageSize = pageSize || 10;
      const totalPages = Math.ceil(totalItems / pageSize);
      let startPage = null,
        endPage = null;
      if (totalPages <= 10) {
        startPage = 1;
        endPage = totalPages;
      } else {
        if (currentPage <= 6) {
          startPage = 1;
          endPage = 10;
        } else if (currentPage + 4 >= totalPages) {
          startPage = totalPages - 9;
          endPage = totalPages;
        } else {
          startPage = currentPage - 5;
          endPage = currentPage + 4;
        }
      }

      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

      const pages = [...Array(endPage + 1 - startPage).keys()].map(
        i => startPage + i
      );
      return {
        totalItems: totalItems,
        currentPage: currentPage,
        pageSize: pageSize,
        totalPages: totalPages,
        startPage: startPage,
        endPage: endPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: pages
      };
    }
  }),
  withHandlers({
    setPage: props => page => {
      const { items, pageSize } = props;
      let pager = props.pager;
      if (page < 1 || page > pager.totalPages) {
        return;
      }
      pager = props.getPager(items.length, page, pageSize);
      const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

      props.handlePager(pager);
      props.onChangePage(pageOfItems);
    }
  }),
  lifecycle({
    componentWillMount() {
      if (this.props.items && this.props.items.length) {
        this.props.setPage(this.props.initialPage);
      }
    },
    componentDidUpdate(prevProps) {
      if (this.props.items !== prevProps.items) {
        this.props.setPage(this.props.initialPage);
      }
    }
  })
);
export default enhance(Pagination);
