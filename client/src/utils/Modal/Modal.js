import React from "react";
import PropTypes from "prop-types";

export default function Modal(props) {
  return (
    <div className="modal-window">
      <div>
        <div>{props.children}</div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired
};
