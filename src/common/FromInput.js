/** @format */

import React from "react";

const FromInput = (props) => {
  const {
    item: { fieldName, fieldValue, label, type, inputIcon },
    handalFormValue,
  } = props;
  return (
    <>
      <div className='col-12'>
        <label>
          {label}
          <span className='text-danger'>*</span>
        </label>
        <div className='input-group'>
          <div className='input-group-text'>
            <i className={inputIcon ? inputIcon : "bi bi-person-fill"}></i>
          </div>
          <input
            type={type ? type : "text"}
            className='form-control'
            placeholder={`Enter ${label}`}
            value={fieldValue}
            name={fieldName}
            onChange={(e) => handalFormValue(e)}
          />
        </div>
      </div>
    </>
  );
};

export default FromInput;
