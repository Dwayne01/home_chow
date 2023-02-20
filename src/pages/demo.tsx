import IconButton from "@/components/buttons/iconButton/IconButton";
import Countdown from "@/components/countdown";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const ComponentPage = () => (
	<div>
		<h1 className="text-3xl text-red-600 font-bold underline">
			Components Page
		</h1>
		<Countdown />
		<IconButton icon={FaFacebookF} href="" />
		<IconButton icon={FaTwitter} href="" />
		<IconButton icon={FaLinkedinIn} href="" />
	</div>
);

export default ComponentPage;
