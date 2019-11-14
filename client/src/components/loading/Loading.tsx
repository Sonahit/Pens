import React from "react";

import Modal from "@utils/Modal/Modal";

import "./Loading.scss";

export default function Loading() {
  return (
    <Modal>
      <div className="loading"></div>
    </Modal>
  );
}
