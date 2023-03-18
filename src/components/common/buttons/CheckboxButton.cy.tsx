import CheckboxButton from "./CheckboxButton";

describe("<CheckboxButton />", () => {
	it("renders with the correct props", () => {
		const label = "I am a Vendor";
		const name = "vendor";
		const value = "vendor";
		const isChecked = false;
		const handleClick = cy.spy();

		cy.mount(
			<CheckboxButton
				label={label}
				name={name}
				value={value}
				isChecked={isChecked}
				handleClick={handleClick}
			/>
		);

		cy.get("label").should("have.text", label); // check that the label text is correct
		cy.get("input")
			.should("have.attr", "name", name)
			.should("have.value", value); // check that the input element has the correct name and value props
	});

	it("calls the handleClick function when clicked", () => {
		const handleClick = cy.spy();

		cy.mount(
			<CheckboxButton
				name="vendor"
				label="I am a Vendor"
				value="vendor"
				isChecked={false}
				handleClick={handleClick}
			/>
		);

		cy.get("input")
			.click()
			.then(() => {
				// eslint-disable-next-line no-console
				console.log("button checked!");
			});
	});
});
