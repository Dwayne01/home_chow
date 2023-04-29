import React from "react";
import { mount } from "@cypress/react";
import Tabs, { TabProps } from "@/components/tab";
import "../../styles/globals.css";

describe("Tab component", () => {
	const tabs: TabProps[] = [
		{
			label: "Tab 1 Title",
			children: <div>Content for tab 1</div>,
			onClick: () => {},
		},
		{
			label: "Tab 2 Title",
			children: <div>Content for tab 2</div>,
			onClick: () => {},
		},
		{
			label: "Tab 3 Title",
			children: <div>Content for tab 3</div>,
			onClick: () => {},
		},
	];

	it("should display active tab content", () => {
		mount(<Tabs tabs={tabs} />);
		cy.contains("Tab 1 Title").click();
		cy.get('[data-cy="tab"]').eq(0).should("contain", "Content for tab 1");
		cy.contains("Tab 2 Title").click();
		cy.get('[data-cy="tab"]').eq(1).should("contain", "Content for tab 2");
		cy.contains("Tab 3 Title").click();
		cy.get('[data-cy="tab"]').eq(2).should("contain", "Content for tab 3");
	});
});
