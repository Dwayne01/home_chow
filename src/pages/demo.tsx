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
		<div className="flex justify-center">
			<IconButtonWithLabel
				icon={AiOutlineSend}
				color="#FCFCFC"
				bgColor="#EAAA08"
				borderColor="#FFAF02"
				label="Notify me"
				href=""
			/>
		</div>
	</div>
);

export default ComponentPage;
