import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import Button from "./index";

describe("<Button />", () => {
	it("renders", () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(
			<Button
				icon={AiOutlineSend}
				rootClass="text-white gap-2"
				label="Notify me"
				onClick={() => {}}
				iconPosition="right"
			/>
		);
	});
});
