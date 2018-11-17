import React from "react";
import { withRouter } from "react-router-dom";
import { compose, withState, withHandlers } from "recompose";
import { routes } from "../../../../routes";

const SearchComponent = ({ searchInput, onSearchInput, doSearch }) => {
  return (
    <>
      <div className="search-form">
        <input
          className="input"
          placeholder="Search here"
          value={searchInput}
          onChange={e => onSearchInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && doSearch()}
        />
        <button className="search-btn" onClick={doSearch}>
          Search
        </button>
      </div>
    </>
  );
};
const enhance = compose(
  withRouter,
  withState("searchInput", "handleSearchInput", ""),
  withHandlers({
    doSearch: props => () => {
      if (props.searchInput.length !== 0) {
        props.history.push(`${routes.productList}?query=${props.searchInput}`);
        props.handleSearchInput("");
      }
    },
    onSearchInput: props => value => {
      props.handleSearchInput(value);
    }
  })
);
export default enhance(SearchComponent);
