import CheckboxButtonGroup from "@/components/buttons/checkboxButtonGroup/CheckboxButtonGroup";
import Countdown from "@/components/countdown";

const ComponentPage = () => (
	<div>
		<h1 className="text-3xl text-red-600 font-bold underline">
			Components Page
		</h1>
		<Countdown />
		<CheckboxButtonGroup />
	</div>
);

export default ComponentPage;
