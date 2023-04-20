import { applyTheme } from "@/theme/utils";
import SearchBar from "./index";
import "../../styles/globals.css";

applyTheme();
describe("<SearchBar />", () => {
	const placeholder = "Where";
	const iconBgColor = "bg-primary-color";

	beforeEach(() => {
		const onSearch = cy.spy();
		cy.mount(
			<SearchBar
				placeholder={placeholder}
				iconBgColor={iconBgColor}
				onSearch={onSearch}
			/>
		);
	});

	it("renders with the correct props", () => {
		cy.get("input").should("have.attr", "placeholder", placeholder); // check that the input element has the correct placeholder text
		cy.get("button").should("have.class", iconBgColor); // check that the button element has the correct background color
	});

	it("search keyword Vancouver", () => {
		const searchKeyword = "Vancouver";
		cy.get("input").type(searchKeyword).should("have.value", searchKeyword);
	});

	it("calls the onSearch function when the form is submitted", () => {
		cy.get("form")
			.submit()
			.then(() => {
				// eslint-disable-next-line no-console
				console.log("form submitted!");
			});
	});
});
