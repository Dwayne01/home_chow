import Image from "next/image";
import classNames from "classnames";
import CircularProgressBar from "../CircularProgressBar";
import User from "../../../public/assets/images/Avatar.png";
import { AccountButtonProps } from "../../types/dashboard";

const AccountButton = ({
	profileCompletion,
	notificationCount,
	notificationColor = "bg-red",
}: AccountButtonProps) => (
	<CircularProgressBar className="relative" progressEnd={profileCompletion}>
		<div className="p-[1px] rounded-full bg-white focus:bg-grey-light hover:bg-grey-light">
			<Image
				src={User}
				alt="User"
				width={40}
				height={40}
				className="rounded-full"
			/>
			<span
				className={classNames(
					"absolute top-0 right-0 bg-red rounded-full w-5 h-5 flex items-center justify-center text-white font-semibold text-[10px]",
					notificationColor
				)}
			>
				{notificationCount}
			</span>
			{notificationCount && (
				<span
					className={classNames(
						"absolute bottom-0 right-1 rounded-full bg-red w-[11px] h-[11px] border-[2px] border-white",
						notificationColor
					)}
				/>
			)}
		</div>
	</CircularProgressBar>
);

export default AccountButton;
