import React, { ReactElement, Props } from "react";

import Modal from "@utils/Modal/Modal";

import "./Loading.scss";

export default function Loading(props: Props<any>): ReactElement {
	return (
		<Modal>
			<div className="loading"></div>
		</Modal>
	);
}
