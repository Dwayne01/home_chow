import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { formatNumber } from "@/utils";
import { LableProps } from "../../types/dashboard";

const Lable = ({
	balance = 12457,
	visible = true,
	label = "",
	onClick = () => {},
	className = "",
}: LableProps) => {
	const maskedBalance = "*"
		.repeat(balance.toString().length)
		.padEnd(balance.toString().length, "0");
	return (
		<div className={`flex items-center gap-2 justify-between ${className}`}>
			{label && <div className="text-sm font-semibold">{label}</div>}
			<div className="text-sm font-semibold">
				${visible ? formatNumber(balance) : maskedBalance}
			</div>
			<button
				onClick={onClick}
				className="focus:bg-grey-light hover:bg-grey-light rounded-full flex items-center justify-center p-1"
			>
				{visible ? (
					<AiOutlineEye className="h-[20px] w-[20px]" />
				) : (
					<AiOutlineEyeInvisible className="h-[20px] w-[20px]" />
				)}
			</button>
		</div>
	);
};

export default Lable;
