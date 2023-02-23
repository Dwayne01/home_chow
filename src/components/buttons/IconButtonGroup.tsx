import IconButton from "@/components/buttons/IconButton";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const IconButtonGroup = () => (
	<div className="flex justify-center gap-5">
		<IconButton icon={FaFacebookF} color="#EAAA08" bgColor="#FCFCFD" href="" />
		<IconButton icon={FaTwitter} color="#EAAA08" bgColor="#FCFCFD" href="" />
		<IconButton icon={FaLinkedinIn} color="#EAAA08" bgColor="#FCFCFD" href="" />
	</div>
);

export default IconButtonGroup;
