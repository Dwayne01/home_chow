import { ReactElement } from "react";
import Footer from "../footer/Footer";
import ComingSoonHeader from "../header/ComingSoonHeader";

const ComingSoonLayout = ({ children }: { children: ReactElement }) => (
	<div className="h-[90vh]">
		<ComingSoonHeader />
		<main>{children}</main>
		<Footer />
	</div>
);

export default ComingSoonLayout;
