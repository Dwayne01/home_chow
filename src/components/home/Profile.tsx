import { useState, FC } from "react";
import { useTranslation } from "next-i18next";
import { FormProvider, useForm } from "react-hook-form";
import { PhoneField, TextField } from "../form/InputField";
import Button from "../common/buttons";

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
			{/* <h1 className="text-primary-color-dark-theme">{t("Become_Chef")}</h1> */}
			{/* <h2>{t("Apply_now")}</h2> */}
			{/* <p className="mt-3">{t("Please_fill_details")}</p> */}
			<div className="mt-16">
				<FormProvider {...form}>
					<form
						className="profile-form"
						onSubmit={handleSubmit(handleProfileForm)}
					>
						<div className="flex flex-col">
							<TextField
								data-testid="business-name"
								rootClass="col-auto text-xs md:text-base"
								id="bussinessName"
								name="bussinessName"
								label={t("Legal_Business_Name")}
								placeholder={t("Enter_Name")}
								required
								alt="info"
								ref={register({
									required: true,
								})}
								autoComplete="bussinessName"
							/>
						</div>

						<div className=" mt-5">
							<PhoneField
								data-testid="phoneNumbers-input"
								rootClass="col-auto text-xs md:text-base"
								id="phoneNumber"
								label={t("Phone_Number")}
								name="phoneNumber"
								placeholder="111-222-2222"
								alt="info"
								required
								ref={register({
									required: true,
								})}
								autoComplete="Phone Number"
							/>
						</div>
						<div className="flex flex-col mt-5">
							<TextField
								data-testid="email-name"
								rootClass="col-auto text-xs md:text-base"
								id="email"
								name="bussinemailessName"
								label={t("Email")}
								placeholder={t("Entr_Email")}
								required
								alt="info"
								ref={register({
									required: true,
								})}
								autoComplete="Email"
							/>
						</div>
						<div className="mt-5">
							<TextField
								data-testid="street-input"
								rootClass="col-auto"
								id="street"
								name="street"
								required
								label={t("Street")}
								placeholder={t("Street")}
								ref={register({
									required: true,
								})}
								alt="info"
							/>
						</div>
						<div className="grid md:grid-cols-2 gap-5 md:gap-14 mt-5 ">
							<TextField
								data-testid="area-input"
								rootClass="col-auto"
								id="area"
								name="area"
								required
								label={t("Province")}
								placeholder={t("Province")}
								ref={register({
									required: true,
								})}
								alt="info"
								autoComplete="area"
								inputClass="text-xs md:text-base"
							/>
							<TextField
								data-testid="city-input"
								rootClass="col-auto"
								id="city"
								name="city"
								label={t("City")}
								placeholder={t("Enter_City")}
								required
								alt="info"
								ref={register({
									required: true,
								})}
								autoComplete="city"
							/>
						</div>
						<div className="grid md:grid-cols-2 gap-5 md:gap-14 mt-5">
							<TextField
								data-testid="room-door-input"
								rootClass="col-auto"
								id="room_door"
								name="room_door"
								label={t("Room_Floor")}
								placeholder={t("Room_Floor")}
								ref={register({
									required: true,
								})}
								alt="info"
								required
								autoComplete="Room/Door"
								inputClass="text-xs md:text-base"
							/>
							<TextField
								data-testid="building-gate-input"
								rootClass="col-auto"
								id="building_gate"
								name="building_gate"
								label={t("Postcode")}
								placeholder={t("Postcode")}
								ref={register({
									required: true,
								})}
								alt="info"
								required
								autoComplete="postcode"
								inputClass="text-xs md:text-base"
							/>
						</div>

						<div className="mt-5">
							<TextField
								data-testid="facebookUrl-input"
								rootClass="col-auto text-xs md:text-base"
								id="facebookUrl"
								label={t("Facebook_URL")}
								name="facebookUrl"
								placeholder={t("Enter_Link")}
								alt="info"
								ref={register({
									required: false,
								})}
								autoComplete="Phone Number"
							/>
						</div>
						<div className="mt-5">
							<TextField
								data-testid="instagramURL-input"
								rootClass="col-auto text-xs md:text-base"
								id="instagramURL"
								name="instagramURL"
								label={t("Instagram_URL")}
								placeholder={t("Enter_Link")}
								alt="info"
								ref={register({
									required: false,
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
