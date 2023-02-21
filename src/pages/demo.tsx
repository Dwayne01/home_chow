import Countdown from "@/components/countdown";
import IconButtonGroup from "../components/buttons/IconButtonGroup";

const ComponentPage = () => (
	<div>
		<h1 className="text-3xl text-red-600 font-bold underline">
			Components Page
		</h1>
		<Countdown />
		<IconButtonGroup />
	</div>
);

export default ComponentPage;
