import React from "react";
import LayoutComponent from "../../components/layout/ComingSoonLayout";

const Dummy = () => <div>Coming Soon</div>;

type ComingSoonPageProps = {
	LeftComponent?: React.FC;
	RightComponent?: React.FC;
};

const ComingSoonPage: React.FC<ComingSoonPageProps> = () => (
	<LayoutComponent LeftComponent={Dummy} RightComponent={Dummy} />
);

export default ComingSoonPage;
