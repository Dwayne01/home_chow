import { useState, FC } from "react";
import { useTranslation } from "next-i18next";
import { SubscribeParams } from "@/types/comingsoon";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { TextField } from "@/components/form/InputField";
import Button from "../common/buttons/Button";

type LandingProps = {
	handleNavigation: (id: number) => void;
	handleSubmit: (params: SubscribeParams) => Promise<string | null>;
};

type FormValues = {
	firstName: string;
	lastName: string;
	email: string;
};

type UserType = "VENDOR" | "CUSTOMER" | "DRIVER";

const LandingForm: FC<LandingProps> = ({
	handleNavigation,
	handleSubmit: handleFormSubmit,
}) => {
	const { t } = useTranslation("comingsoon, common");
	const [selected, setSelected] = useState<UserType>("CUSTOMER");

	const form = useForm<FormValues>({
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
		},
	});

	const { handleSubmit, register } = form;

	const handleNotifyMe: SubmitHandler<FormValues> = async (data) => {
		const { firstName, lastName, email } = data;

		const submitRequest = {
			firstName,
			lastName,
			email,
			userType: selected,
		};

		const res = await handleFormSubmit(submitRequest);

		if (res) {
			handleNavigation(3);
		} else {
			handleNavigation(4);
		}
	};

	return (
		<FormProvider {...form}>
			<form
				className="px-10 md:max-w-[500px] m-auto flex flex-col gap-4"
				onSubmit={handleSubmit(handleNotifyMe)}
			>
				<h4 className="text-center text-xl font-normal">
					{t("question", { ns: "common" })}
				</h4>
				<div className="">
					<div className="flex justify-between gap-[5px]">
						<Button
							size="sm"
							type={selected === "CUSTOMER" ? "primary" : "primary-outline"}
							onClick={() => setSelected("CUSTOMER")}
							className="flex-1 rounded-[40px] md:w-[120px] justify-center"
						>
							{t("customer", { ns: "common" })}
						</Button>
						<Button
							size="sm"
							type={selected === "VENDOR" ? "primary" : "primary-outline"}
							onClick={() => setSelected("VENDOR")}
							className="flex-1 rounded-[40px] md:w-[120px] justify-center"
						>
							{t("vendor", { ns: "common" })}
						</Button>
						<Button
							size="sm"
							type={selected === "DRIVER" ? "primary" : "primary-outline"}
							onClick={() => setSelected("DRIVER")}
							className="flex-1 rounded-[40px] md:w-[120px] justify-center"
						>
							{t("driver", { ns: "common" })}
						</Button>
					</div>
				</div>
				<div className="flex items-center justify-between gap-7">
					<TextField
						data-testid="signin-email"
						rootClass="col-auto"
						inputClass="border-t-0 border-l-0 border-r-0 border-b border-black rounded-none pl-0"
						id="firstName"
						name="firstName"
						label={t("firstName", { ns: "common" })}
						placeholder="John"
						required
						ref={register({
							required: true,
						})}
						autoComplete="firstName"
					/>
					<TextField
						data-testid="signin-email"
						rootClass="col-auto"
						inputClass="border-t-0 border-l-0 border-r-0 border-b border-black rounded-none pl-0"
						id="lastName"
						name="lastName"
						label={t("lastName", { ns: "common" })}
						placeholder="Doe"
						required
						ref={register({
							required: true,
						})}
						autoComplete="lastName"
					/>
				</div>
				<div>
					<TextField
						data-testid="signin-email"
						rootClass="col-auto"
						inputClass="border-t-0 border-l-0 border-r-0 border-b border-black rounded-none pl-0"
						id="email"
						name="email"
						label={t("emailAddress", { ns: "common" })}
						placeholder="example@example.com"
						required
						ref={register({
							required: true,
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: t("invalidEmail", { ns: "common" }),
							},
						})}
						autoComplete="email"
					/>
				</div>
				<p className="text-base">{t("signUpInfo", { ns: "common" })}</p>
				<div className="flex justify-center">
					<Button type="secondary" buttonType="submit">
						{t("onboardBtn", { ns: "common" })}
					</Button>
				</div>
			</form>
		</FormProvider>
	);
};

export default LandingForm;
