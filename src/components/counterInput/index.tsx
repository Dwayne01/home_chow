import { useState } from "react";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";

const CounterInput = ({ startValue }: { startValue: number }) => {
	const [value, setValue] = useState<number>(startValue);

	const handleDecrement = () => setValue(value - 1);
	const handleIncrement = () => setValue(value + 1);

	return (
		<div className="flex items-center space-x-2">
			<button
				className="p-2 text-gray-500 hover:text-gray-600"
				onClick={handleDecrement}
			>
				<HiOutlineMinus />
			</button>
			<div className="w-12 text-center">{value}</div>
			<button
				className="p-2 text-gray-500 hover:text-gray-600"
				onClick={handleIncrement}
			>
				<HiOutlinePlus />
			</button>
		</div>
	);
};

export default CounterInput;
