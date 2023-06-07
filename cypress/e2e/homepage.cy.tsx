export {};

/*
    Given: I am on the Home page
    When: I fill in the form and click on the "Profile Submit btn" button
    Then: I should see a Subscribe component
*/

const days: string[] = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

describe("Home page", () => {
	beforeEach(() => {
		cy.visit("/");
	});

	it("Should render the home page", () => {
		cy.get("#bussinessName").should("be.visible");
		cy.get("#tradingName").should("be.visible");
		cy.get("#tradingStatus").should("be.visible");
		cy.get("#city").should("be.visible");
		cy.get("#area").should("be.visible");
		cy.get("#street").should("be.visible");
		cy.get("#building_gate").should("be.visible");
		cy.get("#room_door").should("be.visible");
		cy.get("#phoneNumber").should("be.visible");
		cy.get("#altPhoneNumber").should("be.visible");
		cy.get("#email").should("be.visible");
		cy.get("#facebookUrl").should("be.visible");
		cy.get("#instagramURL").should("be.visible");
	});

	it("Should show required error when forn is not properly field", () => {
		cy.get("#Submit-Profile-btn").click();
		cy.get(".profile-form").contains(/This field is required/i);
	});

	it("Should fill the home Profile page and show the schdule component", () => {
		cy.get("#bussinessName").type("Test Business Name");
		cy.get("#tradingName").type("Test Trading Name");
		cy.get("#city").type("Test City");
		cy.get("#area").type("Test Area");
		cy.get("#street").type("Test Street");
		cy.get("#building_gate").type("Test 101");
		cy.get("#room_door").type("101");
		cy.get("#phoneNumber").type("1112223333");
		cy.get("#altPhoneNumber").type("1112223333");
		cy.get("#email").type("test@email.com");
		cy.get("#facebookUrl").type("test.com");
		cy.get("#instagramURL").type("test.com");

		cy.get("#Submit-Profile-btn").click();

		days.forEach((day: string) => {
			cy.get(`#labelfor_${day}`).should("be.visible");
			cy.get(`#checkboxfor_${day}`).should("be.visible");
			cy.get(`#checkboxfor_${day}`).click({ force: true });
			cy.get(`#startTime_${day}`).should("be.visible");
			cy.get(`#endTime_${day}`).should("be.visible");
		});
	});
});
