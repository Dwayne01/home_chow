import { ReactNode, FC } from "react";

interface ComingSoonLayoutProps {
	Header: ReactNode;
	Footer?: ReactNode;
	Landing: ReactNode;
}

const ComingSoonLayout: FC<ComingSoonLayoutProps> = ({
	Header,
	Footer,
	Landing,
}) => (
	<>
		<div className="md:h-[90vh]">
			<header className="md:mx-10 lg:mx-40">{Header}</header>
			<main>{Landing}</main>
		</div>
		<footer className="md:mx-10 lg:mx-40">{Footer}</footer>
	</>
);

export default ComingSoonLayout;
