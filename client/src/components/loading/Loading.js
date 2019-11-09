import React from "react";

import "./Loading.scss";
import Modal from "@utils/Modal/Modal";

export default function Loading(props) {
  //TODO: Modal windows,
  //TODO: loading screen
  return (
    <Modal>
      <div className="loading-window">Loading...</div>
    </Modal>
  );
}
