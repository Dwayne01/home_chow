import React from "react";
import LayoutComponent from "../../components/layout/ComingSoonLayout";
import Dummy from "../../components/misc/Dummy";

type ComingSoonPageProps = {
	LeftComponent?: React.FC;
	RightComponent?: React.FC;
};

const ComingSoonPage: React.FC<ComingSoonPageProps> = () => (
	<LayoutComponent LeftComponent={Dummy} RightComponent={Dummy} />
);

export default ComingSoonPage;
