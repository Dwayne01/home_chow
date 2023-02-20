import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const IconButton = () => (
	<div className="flex gap-7 m-10">
		<button className="px-4 py-2 bg-gray-100 text-black rounded focus:outline-none focus:ring-2 focus:ring-[#EAAA08] focus:ring-opacity-80">
			<FaFacebookF color="#EAAA08" fontSize="1.5em" />
		</button>
		<button className="px-4 py-2 bg-gray-100 text-black rounded focus:outline-none focus:ring-2 focus:ring-[#EAAA08] focus:ring-opacity-80">
			<FaTwitter color="#EAAA08" fontSize="1.5em" />
		</button>
		<button className="px-4 py-2 bg-gray-100 text-black rounded focus:outline-none focus:ring-2 focus:ring-[#EAAA08] focus:ring-opacity-80">
			<FaLinkedinIn color="#EAAA08" fontSize="1.5em" />
		</button>
	</div>
);

export default IconButton;
