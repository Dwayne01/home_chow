import { ChangeEvent } from "react";

interface CheckboxButtonProps {
	text: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxButton = ({ text, onChange }: CheckboxButtonProps) => (
	<div className="flex flex-col sm:flex-row sm:gap-5 justify-center mt-5">
		<button className="container flex justify-center py-4 px-5 rounded-full shadow-[0px_4px_50px_0px_rgba(0,0,0,0.1)] text-xl text-[#718096] hover:bg-[#FEFDF0] hover:border-[#FFAF02] hover:text-[#FFAF02]">
			<label htmlFor="checkbox">
				{text}
				<input
					className="checkbox ml-4 mt-2 accent-[#FFAF02]"
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
