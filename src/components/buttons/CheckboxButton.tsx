import { ChangeEvent } from "react";

interface CheckboxButtonProps {
	text: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxButton = ({ text, onChange }: CheckboxButtonProps) => (
	<div className="flex flex-col sm:flex-row sm:gap-5 justify-center mt-5">
		<button className="container flex justify-center min-w-fit p-5 m-3 border-2 rounded-full shadow text-xl text-stone-500 hover:bg-yellow-50 hover:border-yellow-500 hover:text-yellow-500">
			<label htmlFor="checkbox">
				{text}
				<input
					className="checkbox ml-4 mt-2 accent-yellow-500"
					id="checkbox"
					type="checkbox"
					value={text}
					onChange={onChange}
				/>
			</label>
		</button>
	</div>
);

export default CheckboxButton;
