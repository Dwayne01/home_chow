import React, { useState } from "react";

export interface TabProps {
	label: string;
	children: React.ReactElement;
	onClick: () => void;
}

type TabsProps = {
	tabs: TabProps[];
};

const Tab: React.FC<TabProps & { active: boolean }> = ({
	label,
	children,
	active,
	onClick,
}) => (
	<button data-cy="tab" className="mb-6 flex flex-col" onClick={onClick}>
		{label}
		{active && <div className="">{children}</div>}
	</button>
);

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
	const [activeTab, setActiveTab] = useState(0);

	const handleTabClick = (index: number) => {
		setActiveTab((prevActiveTab) =>
			prevActiveTab === index ? prevActiveTab : index
		);
	};

	return (
		<div>
			<div className="flex justify-between mb-8">
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
						} flex-grow cursor-pointer`}
					>
						<div className="flex justify-center flex-col">
							<div>{tab.label}</div>
							{activeTab === index && (
								<div
									style={{
										flex: "1",
										maxWidth: "20%",
										marginTop: "8px",
										borderBottom: "3px solid #EAAA08",
										borderRadius: "4px",
									}}
								/>
							)}
						</div>
					</div>
				))}
			</div>
			{tabs.map((tab, index) => (
				<Tab
					key={tab.label}
					label={tab.label}
					active={activeTab === index}
					onClick={() => handleTabClick(index)}
				>
					{tab.children}
				</Tab>
			))}
		</div>
	);
};

export default Tabs;
