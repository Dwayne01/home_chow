import InputButtonGroup from "@/components/buttons/InputButtonGroup";
import Countdown from "@/components/countdown";

const ComponentPage = () => (
	<div>
		<h1 className="text-3xl text-red-600 font-bold underline">
			Components Page
		</h1>
		<Countdown />
		<InputButtonGroup />
	</div>
);

export default ComponentPage;
