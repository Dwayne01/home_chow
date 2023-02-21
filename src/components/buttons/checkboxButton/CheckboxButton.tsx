import { ChangeEvent } from "react";

interface CheckboxButtonGroupProps {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxButton = ({
	handleChange,
}: {
	handleChange: CheckboxButtonGroupProps;
}) => (
	<div className="flex flex-col sm:flex-row sm:gap-5 justify-center mt-5">
		<button className="container flex justify-center min-w-fit p-5 m-3 border-2 rounded-full shadow text-xl text-stone-500 hover:bg-yellow-50 hover:border-yellow-500 hover:text-yellow-500">
			<label htmlFor="checkbox-1" className="">
				I am a Lorem
				<input
					className="checkbox ml-4 mt-2 accent-yellow-500"
					id="checkbox"
					type="checkbox"
					value="lorem"
					onChange={handleChange}
				/>
			</label>
		</button>
	</div>
);

export default CheckboxButton;
