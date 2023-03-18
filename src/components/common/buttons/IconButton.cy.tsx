import { FaFacebookF } from "react-icons/fa";
import IconButton from "./IconButton";

describe("<IconButton />", () => {
	it("renders with the correct props", () => {
		const icon = FaFacebookF;
		const color = "text-red-500";
		const bgColor = "bg-black";
		const href = "/";

		cy.mount(
			<IconButton icon={icon} color={color} bgColor={bgColor} href={href} />
		);

		cy.get("a").should("have.attr", "href", href);
		cy.get("a").should("have.class", color).should("have.class", bgColor);
	});
});
