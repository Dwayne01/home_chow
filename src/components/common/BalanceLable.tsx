import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BalanceLableProps } from "../../types/dashboard";

const BalanceLable = ({
	balance = 12457,
	visible = true,
	label = "",
	onClick = () => {},
	className = "",
}: BalanceLableProps) => {
	const maskedBalance = "*"
		.repeat(balance.toString().length)
		.padEnd(balance.toString().length, "0");
	return (
		<div className={`flex items-center gap-2 justify-between ${className}`}>
			{label && <div className="text-sm font-semibold">{label}</div>}
			<div className="text-sm font-semibold">
				${visible ? balance : maskedBalance}
			</div>
			<button
				onClick={onClick}
				className="focus:bg-grey-light hover:bg-grey-light rounded-full flex items-center justify-center h-[20px] w-[20px]"
			>
				{visible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
			</button>
		</div>
	);
};

export default BalanceLable;
