import { FC } from "react";
import Image, { StaticImageData } from "next/image";

interface MemberProps {
	imageSrc: StaticImageData | string;
	name: string;
	position: string;
}

const Member: FC<MemberProps> = ({ imageSrc, name, position }) => (
	<div className="relative">
		<Image src={imageSrc} alt={`Image for ${name}`} />
		<div className="text-center absolute bottom-5 w-[100%] text-white">
			<h4 className="text-2xl">{name}</h4>
			<h4>{position}</h4>
		</div>
	</div>
);

export default Member;
