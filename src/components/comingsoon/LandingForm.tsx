import { useState } from "react";
import { useTranslation } from "next-i18next";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { TextField } from "@/components/form/InputField";
import Button from "../common/buttons/Button";

type FormValues = {
	firstName: string;
	lastName: string;
	email: string;
};

type UserType = "customer" | "vendor" | "driver";

const LandingForm = () => {
	const { t } = useTranslation("comingsoon, common");
	const [selected, setSelected] = useState<UserType>("customer");

	const form = useForm<FormValues>({
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
		},
	});

	const { handleSubmit, register } = form;

	const handleNotifyMe: SubmitHandler<FormValues> = (data) => {
		const { firstName, lastName, email } = data;

		const submitRequest = {
			firstName,
			lastName,
			email,
			userType: selected,
		};

		// eslint-disable-next-line no-console
		console.log(submitRequest);
	};

	return (
		<FormProvider {...form}>
			<form
				className="px-10 md:max-w-[500px] m-auto flex flex-col gap-4"
				onSubmit={handleSubmit(handleNotifyMe)}
			>
				<h4 className="text-center text-xl font-normal">{t("Who are you?")}</h4>
				<div className="flex justify-between items-center gap-[10px] md:max-w-fit md:m-auto">
					<Button
						type={selected === "customer" ? "primary" : "primary-outline"}
						onClick={() => setSelected("customer")}
						className="flex-1 rounded-[40px] md:w-[120px] justify-center"
					>
						{t("Customer")}
					</Button>
					<Button
						type={selected === "vendor" ? "primary" : "primary-outline"}
						onClick={() => setSelected("vendor")}
						className="flex-1 rounded-[40px] md:w-[120px] justify-center"
					>
						{t("Vendor")}
					</Button>
					<Button
						type={selected === "driver" ? "primary" : "primary-outline"}
						onClick={() => setSelected("driver")}
						className="flex-1 rounded-[40px] md:w-[120px] justify-center"
					>
						{t("Driver")}
					</Button>
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
				<p className="text-base">
					Sign up for updates to be the first to know when we launch. No spam,
					just important information and exclusive offers.
				</p>
				<div className="flex justify-center">
					<Button type="secondary" buttonType="submit">
						Notify Me
					</Button>
				</div>
			</form>
		</FormProvider>
	);
};

export default LandingForm;
