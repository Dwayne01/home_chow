import React from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../assets/images/logo/HomeChow_Logo.png";

const shadowStyle: React.CSSProperties = {
	boxShadow: "0px 4px 32px rgba(215, 225, 215, 0.25)",
};

const ComingSoonHeader: React.FC = () => (
	<div
		className="w-full flex md:hidden justify-between items-center"
		style={shadowStyle}
	>
		<div className="mx-3 my-4">
			<Image src={Logo} alt="HomeChow" width={175} height={57} />
		</div>
		<button className="mx-5 mt-2 p-2">
			<GiHamburgerMenu size={25} />
		</button>
	</div>
);

export default ComingSoonHeader;
