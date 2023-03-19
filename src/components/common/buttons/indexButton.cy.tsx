import React from "react";
import { applyTheme } from "@/theme/utils";
import { AiOutlineSend } from "react-icons/ai";
import Button from "./index";
import "../../../styles/globals.css";

applyTheme();

describe("<Button />", () => {
	beforeEach(() => {
		cy.mount(
			<Button
				icon={AiOutlineSend}
				rootClass="text-white gap-2"
				label="Notify me"
				iconPosition="right"
				loading={false}
				disabled={false}
				type="button"
			/>
		);
	});

	it("renders correctly", () => {
		cy.get("button").should("exist");
		cy.get("button").contains("Notify me");
	});

	it("renders a button with the correct label and icon", () => {
		cy.get("button")
			.should("have.attr", "type", "button")
			.should("have.class", "text-white")
			.should("have.class", "gap-2")
			.should("not.be.disabled")
			.should("not.have.class", "cursor-not-allowed")
			.contains("Notify me");
	});

	it("handles click events correctly", () => {
		const onClick = cy.stub().as("onClick");

		cy.mount(
			<Button
				icon={AiOutlineSend}
				rootClass="text-white gap-2"
				label="Notify me"
				onClick={onClick}
				iconPosition="right"
				loading={false}
				disabled={false}
				type="button"
			/>
		);

		cy.get("button")
			.click()
			.then(() => {
				// eslint-disable-next-line no-unused-expressions
				expect(onClick).to.be.calledOnce;
			});
	});

	it("check if button is clickable when the button is disabled", () => {
		cy.mount(
			<Button
				icon={AiOutlineSend}
				rootClass="text-white gap-2"
				label="Notify me"
				onClick={() => {}}
				iconPosition="right"
				loading={false}
				disabled
				type="button"
			/>
		);

		cy.get("button").should("be.disabled");
	});

	it("applies the correct icon position", () => {
		cy.mount(
			<Button
				icon={AiOutlineSend}
				rootClass="text-white gap-2"
				label="Notify me"
				onClick={() => {}}
				iconPosition="left"
				loading={false}
				disabled={false}
				type="button"
			/>
		);

		cy.get("[data-testid='btn-icon-left']").should("exist");
	});

	it("shows a loading indicator when loading", () => {
		cy.mount(
			<Button
				icon={AiOutlineSend}
				rootClass="text-white gap-2"
				label="Notify me"
				iconPosition="left"
				loading
				type="button"
			/>
		);

		cy.get("[data-testid='loading-indicator']").should("exist");
	});
});
