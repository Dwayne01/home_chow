import { FaFacebookF } from "react-icons/fa";
import { applyTheme } from "@/theme/utils";
import IconButton from "./IconButton";
import "../../../styles/globals.css";

applyTheme();
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
		cy.get("a").should("have.class", bgColor);
		cy.get("svg").should("have.attr", "color", color);
	});
});
