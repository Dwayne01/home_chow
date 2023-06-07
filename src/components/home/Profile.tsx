import { useState, FC } from "react";
import { useTranslation } from "next-i18next";
import { FormProvider, useForm } from "react-hook-form";
import { TextIconField } from "../form/InputField";
import Info from "../../../public/assets/images/Home/Info.svg";
import Button from "../common/buttons";
import { SelectIconField } from "../form/SelectField";
import HomeIcon from "../../../public/assets/images/Home/Home_Icon.svg";

const businessStatus: string[] = ["Active", "Inactive"];

interface UserProfile {
	bussinessName: string;
	tradingName: string;
	Status: string;
	city: string;
	area: string;
	street: string;
	buidlingGate: number | string;
	roomNumber: number | string;
	phoneNumner: number;
	alternatePhoneNumber: number;
	email: string;
	facebookUrl: string;
	instagramURL: string;
}

interface ProfileProps {
	setScheduleBtnEnable: (value: boolean) => void;
}

const Profile: FC<ProfileProps> = ({ setScheduleBtnEnable }: ProfileProps) => {
	const [, setProfile] = useState<UserProfile>({} as UserProfile);
	const { t } = useTranslation(["home"]);
	const form = useForm({
		defaultValues: {},
	});

	const { handleSubmit, register } = form;

	const handleProfileForm = (data: UserProfile) => {
		setProfile(data);

		// SV: Depending upon what we need to do in backend.
		setScheduleBtnEnable(true);
	};

	return (
		<div>
			<h1 className="text-primary-color-dark-theme">{t("Become_Chef")}</h1>
			<h2>{t("Apply_now")}</h2>
			<p className="mt-3">{t("Please_fill_details")}</p>
			<div className="mt-16">
				<FormProvider {...form}>
					<form
						className="profile-form"
						onSubmit={handleSubmit(handleProfileForm)}
					>
						<div className="flex flex-col">
							<TextIconField
								data-testid="business-name"
								rootClass="col-auto text-xs md:text-base"
								id="bussinessName"
								name="bussinessName"
								label={t("Legal_Business_Name")}
								placeholder={t("Enter_Name")}
								required
								icon={Info}
								alt="info"
								iconContainerClassName="right-2 top-0   h-full flex w-10 items-center justify-center "
								iconClassNames="w-20 h-5"
								ref={register({
									required: true,
								})}
								autoComplete="bussinessName"
							/>
						</div>

						<div className="grid md:grid-cols-2 gap-5 md:gap-14 mt-5">
							<TextIconField
								data-testid="trading-name"
								rootClass="col-auto w-full text-xs md:text-base"
								id="tradingName"
								name="tradingName"
								label={t("Business_Trading_Name")}
								placeholder={t("Business_Name")}
								required
								icon={Info}
								alt="info"
								iconContainerClassName="right-2 top-0   h-full flex w-10 items-center justify-center "
								iconClassNames="w-20 h-5"
								ref={register({
									required: true,
								})}
								autoComplete="bussinessName"
							/>
							<SelectIconField
								label="Select Trading status"
								labelClassName="invisible text-granite mb-2"
								rootClass="col-auto w-full mb-1"
								inputClass=" w-full md:ml-2 block px-3 py-3 rounded-sm w-full border-2 border-sand text-xs md:text-base pl-10 md:pl-8 content-center"
								required
								icon={HomeIcon}
								alt="info"
								iconContainerClassName="left-1 top-0   h-full flex w-10 items-center justify-center "
								iconClassNames="w-20 h-5"
								name="tradingStatus"
								placeholder="Select trading status"
								ref={register({ required: true })}
								data-testid="tradingStatus"
								id="tradingStatus"
								multiple={false}
							>
								{businessStatus.map((status: string) => (
									<option key={status} value={status}>
										{status}
									</option>
								))}
							</SelectIconField>
						</div>
						<div className="mt-5">
							<TextIconField
								data-testid="city-input"
								rootClass="col-auto"
								id="city"
								name="city"
								label={t("City")}
								placeholder={t("Enter_City")}
								required
								icon={Info}
								alt="info"
								iconContainerClassName="right-2 top-0   h-full flex w-10 items-center justify-center "
								iconClassNames="w-20 h-5"
								ref={register({
									required: true,
								})}
								autoComplete="city"
							/>
						</div>
						<div className="grid md:grid-cols-2 gap-5 md:gap-14 mt-5 ">
							<TextIconField
								data-testid="area-input"
								rootClass="col-auto"
								id="area"
								name="area"
								placeholder={t("Area")}
								ref={register({
									required: false,
								})}
								icon={Info}
								alt="info"
								iconContainerClassName="right-2 top-0   h-full flex w-10 items-center justify-center "
								iconClassNames="w-20 h-5"
								autoComplete="area"
								inputClass="text-xs md:text-base"
							/>
							<TextIconField
								data-testid="street-input"
								rootClass="col-auto"
								id="street"
								name="street"
								placeholder={t("Street")}
								ref={register({
									required: false,
								})}
								icon={Info}
								alt="info"
								iconContainerClassName="right-2 top-0   h-full flex w-10 items-center justify-center "
								iconClassNames="w-20 h-5"
								autoComplete="street"
								inputClass="text-xs md:text-base"
							/>
						</div>
						<div className="grid md:grid-cols-2 gap-5 md:gap-14 mt-5">
							<TextIconField
								data-testid="building-gate-input"
								rootClass="col-auto"
								id="building_gate"
								name="building_gate"
								placeholder={t("Building_Gate")}
								ref={register({
									required: false,
								})}
								icon={Info}
								alt="info"
								iconContainerClassName="right-2 top-0   h-full flex w-10 items-center justify-center "
								iconClassNames="w-20 h-5"
								autoComplete="Building/Gate"
								inputClass="text-xs md:text-base"
							/>
							<TextIconField
								data-testid="room-door-input"
								rootClass="col-auto"
								id="room_door"
								name="room_door"
								placeholder={t("Room_Floor")}
								ref={register({
									required: false,
								})}
								icon={Info}
								alt="info"
								iconContainerClassName="right-2 top-0   h-full flex w-10 items-center justify-center "
								iconClassNames="w-20 h-5"
								autoComplete="Room/Door"
								inputClass="text-xs md:text-base"
							/>
						</div>

						<div className="grid sm:grid-cols-2 gap-5 md:gap-14 mt-5">
							<TextIconField
								data-testid="phoneNumbers-input"
								rootClass="col-auto text-xs md:text-base"
								id="phoneNumber"
								label={t("Phone_Number")}
								name="phoneNumber"
								placeholder="111-222-2222"
								icon={Info}
								alt="info"
								iconContainerClassName="right-2 top-0   h-full flex w-10 items-center justify-center "
								iconClassNames="w-20 h-5"
								required
								ref={register({
									required: true,
								})}
								autoComplete="Phone Number"
							/>
							<TextIconField
								data-testid="altPhoneNumber-input"
								rootClass="col-auto text-xs md:text-base"
								id="altPhoneNumber"
								name="altPhoneNumber"
								label={t("Alt_Phone_Number")}
								required
								placeholder="111-222-2222"
								icon={Info}
								alt="info"
								iconContainerClassName="right-2 top-0   h-full flex w-10 items-center justify-center "
								iconClassNames="w-20 h-5"
								ref={register({
									required: true,
								})}
								autoComplete="111-222-2222"
							/>
						</div>
						<div className="flex flex-col mt-5">
							<TextIconField
								data-testid="email-name"
								rootClass="col-auto text-xs md:text-base"
								id="email"
								name="bussinemailessName"
								label={t("Email")}
								placeholder={t("Entr_Email")}
								required
								icon={Info}
								alt="info"
								iconContainerClassName="right-2 top-0   h-full flex w-10 items-center justify-center "
								iconClassNames="w-20 h-5"
								ref={register({
									required: true,
								})}
								autoComplete="Email"
							/>
						</div>
						<div className="grid sm:grid-cols-2 gap-5 md:gap-14 mt-5">
							<TextIconField
								data-testid="facebookUrl-input"
								rootClass="col-auto text-xs md:text-base"
								id="facebookUrl"
								label={t("Facebook_URL")}
								name="facebookUrl"
								placeholder={t("Enter_Link")}
								icon={Info}
								alt="info"
								iconContainerClassName="right-2 top-0   h-full flex w-10 items-center justify-center "
								iconClassNames="w-20 h-5"
								required
								ref={register({
									required: true,
								})}
								autoComplete="Phone Number"
							/>
							<TextIconField
								data-testid="instagramURL-input"
								rootClass="col-auto text-xs md:text-base"
								id="instagramURL"
								name="instagramURL"
								label={t("Instagram_URL")}
								required
								placeholder={t("Enter_Link")}
								icon={Info}
								alt="info"
								iconContainerClassName="right-2 top-0   h-full flex w-10 items-center justify-center "
								iconClassNames="w-20 h-5"
								ref={register({
									required: true,
								})}
								autoComplete="Enter link"
							/>
						</div>

						<Button
							label={t("Submit") as string}
							type="submit"
							rootClass="rounded-lg font-bold text-white gap-4 col-auto mt-8 w-full"
							iconPosition="right"
							id="Submit-Profile-btn"
						/>
					</form>
				</FormProvider>
			</div>
		</div>
	);
};

export default Profile;
