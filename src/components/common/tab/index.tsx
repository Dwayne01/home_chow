import React, { useState } from "react";

export interface TabProps {
	label: string;
	children: React.ReactElement;
	onClick: () => void;
}

type TabsProps = {
	tabs: TabProps[];
};

// const Tab: React.FC<TabProps & { active: boolean }> = ({
// 	// label,
// 	children,
// 	active,
// 	onClick,
// }) => (
// 	<button data-cy="tab" className="mb-6 flex flex-col" onClick={onClick}>
// 		{/* {label} */}
// 		{active && <div className="">{children}</div>}
// 	</button>
// );

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
	const [activeTab, setActiveTab] = useState(0);

	const handleTabClick = (index: number) => {
		// setActiveTab((prevActiveTab) =>
		// 	prevActiveTab === index ? prevActiveTab : index
		// );
		setActiveTab(index);
	};

	return (
		<div>
			<div className="flex w-full justify-start gap-16 mb-8">
				{tabs.map((tab, index) => (
					<div
						key={tab.label}
						role="button"
						onClick={() => handleTabClick(index)}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								handleTabClick(index);
							}
						}}
						tabIndex={0}
						className={`${
							activeTab === index ? "text-primary-color inline-block" : ""
						} cursor-pointer`}
					>
						<div className="inline-block">
							<div>{tab.label}</div>
							{activeTab === index && (
								<div className="h-1 bg-primary-color rounded-sm mt-2" />
							)}
						</div>
					</div>
				))}
			</div>
			{/* {tabs.map((tab, index) => (
				<Tab
					key={tab.label}
					label={tab.label}
					active={activeTab === index}
					onClick={() => handleTabClick(index)}
				>
			    {React.cloneElement(tab.children, {
				isActive: activeTab === index,
				})}

				</Tab>
			))} */}

			{tabs.map((tab, index) => (
				<div key={tab.label} className={activeTab === index ? "" : "hidden"}>
					{tab.children}
				</div>
			))}
		</div>
	);
};

export default Tabs;
