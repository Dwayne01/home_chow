import { applyTheme } from "@/theme/utils";
import { FcGoogle } from "react-icons/fc";
import WideIconButton from "./WideIconButton";
import "../../../styles/globals.css";

applyTheme();
describe("<WideIconButton />", () => {
	it("renders with the correct props", () => {
		const handleGoogleSignIn = cy.spy();

		cy.mount(
			<WideIconButton
				label="Sign in with Google"
				icon={FcGoogle}
				rootClass="justify-start"
				onClick={handleGoogleSignIn}
				width="w-[360px]"
				height="h-[44px]"
				fontSize="text-base"
				textColor="text-grey-dark"
				bgColor="bg-white"
				borderColor="border-border-color"
				borderRound="rounded-[8px]"
			/>
		);

		cy.get('[data-testid="Sign in-with-Google"]').click();
		cy.wrap(handleGoogleSignIn).should("be.calledOnce");

		cy.get('[data-testid="Sign in-with-Google"]')
			.should("contain", "Sign in with Google")
			.should("have.class", "justify-start")
			.should("have.class", "w-[360px]")
			.should("have.class", "h-[44px]")
			.should("have.class", "text-base")
			.should("have.class", "text-grey-dark")
			.should("have.class", "bg-white")
			.should("have.class", "border-border-color")
			.should("have.class", "rounded-[8px]");
	});
});
