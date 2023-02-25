import Countdown from "@/components/countdown";
import { AiOutlineSend } from "react-icons/ai";
import IconButtonGroup from "../components/buttons/IconButtonGroup";
import IconButtonWithLabel from "../components/buttons/IconButtonWithLabel";

const ComponentPage = () => (
	<div>
		<h1 className="text-3xl text-red-600 font-bold underline">
			Components Page
		</h1>
		<Countdown />
		<IconButtonGroup />
		<div className="flex justify-center mt-5">
			<IconButtonWithLabel
				icon={AiOutlineSend}
				textColor="#FCFCFC"
				bgColor="#EAAA08"
				borderColor="#FFAF02"
				label="Notify me"
				onClick={() => {}}
				iconPosition="right"
			/>
		</div>
	</div>
);

export default ComponentPage;
