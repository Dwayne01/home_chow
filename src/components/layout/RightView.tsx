import React from "react";
import Cover from "../../../public/assets/images/plate_of_food.png";

const RightView = () => (
	<div
		className="overflow-hidden w-full bg-primary-color"
		style={{
			backgroundImage: `url(${Cover.src})`,
			backgroundSize: "cover",
			backgroundPosition: "center",
			backgroundRepeat: "no-repeat",
		}}
	/>
);

export default RightView;
