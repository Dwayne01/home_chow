import { useState, useEffect } from "react";
import classNames from "classnames";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";

const CounterInput = ({
	startValue,
	price,
	setUpdatedTotalPrice,
	width,
	labelColor,
	leftButtonColor,
	rightButtonColor,
	leftButtonIconColor,
	rightButtonIconColor,
}: {
	startValue: number;
	price: number;
	setUpdatedTotalPrice: (updatedTotalPrice: number) => void;
	width?: string;
	labelColor?: string;
	leftButtonColor?: string;
	rightButtonColor?: string;
	leftButtonIconColor?: string;
	rightButtonIconColor?: string;
}) => {
	const [value, setValue] = useState<number>(startValue);

	const handleDecrement = () => {
		if (value >= 2) {
			setValue(value - 1);
		}
	};
	const handleIncrement = () => {
		setValue(value + 1);
	};

	useEffect(() => {
		const totalPrice = price * value;
		setUpdatedTotalPrice(totalPrice);
	}, [value, price, setUpdatedTotalPrice]);

	return (
		<div
			className={classNames(
				"flex justify-center items-center space-x-2 p-2 gap-7 relative h-14 rounded-full",
				width || "w-[260px]",
				labelColor || "bg-gray-textArea"
			)}
		>
			<div
				className={classNames(
					"flex justify-center items-center w-14 h-14 rounded-full left-0 absolute",
					leftButtonColor || "bg-yellow-button"
				)}
			>
				<button
					onClick={handleDecrement}
					className={classNames(
						"counter-minus p-2 text-2xl",
						leftButtonIconColor || "text-primary-color"
					)}
				>
					<HiOutlineMinus />
				</button>
			</div>

			<div className="text-center">{value}</div>

			<div
				className={classNames(
					"flex justify-center items-center w-14 h-14 rounded-full right-0 absolute",
					rightButtonColor || "bg-primary-color"
				)}
			>
				<button
					onClick={handleIncrement}
					className={classNames(
						"counter-plus p-2 text-2xl",
						rightButtonIconColor || "text-white"
					)}
				>
					<HiOutlinePlus />
				</button>
			</div>
		</div>
	);
};

export default CounterInput;
