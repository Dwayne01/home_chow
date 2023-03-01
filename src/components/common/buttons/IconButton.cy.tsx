import React from "react";
import { FaFacebookF } from "react-icons/fa";
import IconButton from "./IconButton";

describe("<IconButton />", () => {
	it("display the right icon and color props", () => {
		cy.mount(
			<IconButton
				icon={FaFacebookF}
				color="text-red-500"
				bgColor="bg-black"
				href="/"
			/>
		);
	});
});
