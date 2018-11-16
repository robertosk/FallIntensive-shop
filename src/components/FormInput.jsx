import React from "react";

const FromInput = ({ label, required, meta, ...props }) => {
  return (
    <>
      <div className="form-group">
        <label className="label d-flex justify-content-between">
          <span className="text-capitalize"> {label} </span>
          {required && <span className="text-danger"> * </span>}

          {meta.error && meta.touched && (
            <span className="text-danger">{meta.error} </span>
          )}
        </label>

        <div className="input-group">
          <input className="form-control" placeholder={props.name} {...props} />
          {/* <div className="input-group-append">
            <span className="input-group-text">
              <i className="mdi mdi-check-circle-outline" />
            </span>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default FromInput;
