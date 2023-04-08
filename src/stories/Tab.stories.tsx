import React from "react";
import Tabs, { TabProps } from "@/components/tab";

export default {
	title: "Components/Tabs",
	component: Tabs,
};

export const DefaultTabs = () => {
	const tabs: TabProps[] = [
		{ label: "Tab Title 1", children: <div>Content 1</div>, onClick: () => {} },
		{ label: "Tab Title 2", children: <div>Content 2</div>, onClick: () => {} },
		{ label: "Tab Title 3", children: <div>Content 3</div>, onClick: () => {} },
	];

	return <Tabs tabs={tabs} />;
};
