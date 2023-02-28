import React from "react";
import Image from "next/image";
import Cover from "./RightImage.svg";

const RightView = () => (
	<div className="overflow-hidden w-full">
		<Image src={Cover} alt="Cover" className="object-cover h-full w-full" />
	</div>
);

export default RightView;
