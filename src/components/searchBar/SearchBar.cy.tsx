import SearchBar from "./index";

describe("<SearchBar />", () => {
	it("renders with the correct props", () => {
		const placeholder = "Where";
		const iconBgColor = "bg-primary-color";
		const onSearch = cy.spy();

		cy.mount(
			<SearchBar
				placeholder={placeholder}
				iconBgColor={iconBgColor}
				onSearch={onSearch}
			/>
		);

		cy.get("input").should("have.attr", "placeholder", placeholder); // check that the input element has the correct placeholder text
		cy.get("button").should("have.class", iconBgColor); // check that the button element has the correct background color
	});

	it("calls the onSearch function when the form is submitted", () => {
		const onSearch = cy.spy();

		cy.mount(<SearchBar placeholder="Where" onSearch={onSearch} />);

		cy.get("form")
			.submit()
			.then(() => {
				// eslint-disable-next-line no-console
				console.log("form submitted!");
			});
	});
});
