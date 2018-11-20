import React from "react";
const toShowCount = [6, 9, 12];

const StoreFilter = ({ orderBy, doOrder, shownItems, setItemsCount }) => {
  return (
    <div className="store-filter clearfix">
      <div className="store-sort">
        <label>
          Order By:
          <div className="btn-group ml-2">
            <button
              type="button"
              className="btn btn-outline-secondary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="text-capitalize">{orderBy}</span>
            </button>
            <div className="dropdown-menu">
              <a
                className="dropdown-item"
                href="#"
                onClick={e => {
                  e.stopPropagation();
                  doOrder("price", "asc");
                }}
              >
                Expensive
              </a>
              <a
                className="dropdown-item"
                href="#"
                onClick={e => {
                  e.stopPropagation();
                  doOrder("price", "desc");
                }}
              >
                Cheaper
              </a>
              <div className="dropdown-divider" />
              <a
                className="dropdown-item"
                href="#"
                onClick={e => {
                  e.stopPropagation();
                  doOrder("title", "asc");
                }}
              >
                Name up
              </a>
              <a
                className="dropdown-item"
                href="#"
                onClick={e => {
                  e.stopPropagation();
                  doOrder("title", "desc");
                }}
              >
                Name down
              </a>
            </div>
          </div>
        </label>

        <label>
          Show:
          <div className="btn-group ml-2">
            <button
              type="button"
              className="btn btn-outline-secondary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Shown: {shownItems}
            </button>
            <div className="dropdown-menu">
              {toShowCount.map(item => (
                <a
                  key={`${item}s_show`}
                  className="dropdown-item"
                  href="#"
                  onClick={e => {
                    e.stopPropagation();
                    setItemsCount(item);
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default StoreFilter;
