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

		cy.get('[data-testid="Sign in-with-Google"]')
			.should("contain", "Sign in with Google")
			.should("have.class", "justify-start")
			.find(".text-2xl")
			.should("have.length", 1); // Ensure the icon element is present
		// .find('svg[data-icon="FcGoogle"]') // Assuming the icon is rendered as an SVG with data-icon attribute
		// .should("exist");
		// cy.wrap(handleGoogleSignIn).should("be.calledOnce");
		// cy.get('[data-testid="Sign in-with-Google"]')
		// 	.should("contain", "Sign in with Google")
		// 	.should("have.class", "justify-start")
		// 	.should("have.attr", "icon", "FcGoogle");
	});
});
