import React from "react";
import LayoutComponent from "../../components/layout/ComingSoonLayout";
import LeftView from "./LeftView";
import RightView from "./RightView";

type ComingSoonPageProps = {
	LeftComponent?: React.FC;
	RightComponent?: React.FC;
};

const ComingSoonPage: React.FC<ComingSoonPageProps> = () => (
	<LayoutComponent LeftComponent={LeftView} RightComponent={RightView} />
);

export default ComingSoonPage;
