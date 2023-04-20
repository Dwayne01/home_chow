import React, { useState } from "react";
import PasswordStrengthBar from "react-password-strength-bar";
import { PasswordField } from "@/components/form/InputField";
import { useTranslation } from "next-i18next";

function PasswordStrengthComponent({ register }: { register: any }) {
	const [password, setPassword] = useState<string>("");
	const { t } = useTranslation("authentication");

	return (
		<div>
			<div className="flex flex-col relative w-full">
				<PasswordField
					data-testid="password"
					name="password"
					label={t("Password")}
					ref={register({ required: true })}
					required
					placeholder="∗∗∗∗∗∗∗∗"
					autoComplete="current-password"
					onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
						setPassword(e.target.value)
					}
				/>
				{password ? (
					<div className="absolute mt-[60px] w-full">
						<PasswordStrengthBar password={password} />
					</div>
				) : null}
			</div>
		</div>
	);
}

export default PasswordStrengthComponent;
