import { month, weekday } from "@/constants";
import { format } from "date-fns";
import { useTranslation } from "next-i18next";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";
import { IconType } from "react-icons/lib";

export const currencyToNumber = (currency: string | number) =>
	Number(String(currency).split("$").join("").split(",").join(""));

export const scorePasswordStrength = (password: string) => {
	if (!password) return 1;

	const lengthScore = password.length >= 8 ? 3 : 2;
	const numberScore = (password.match(/\d+/g) || []).length >= 1 ? 1 : 0;

	return lengthScore + numberScore;
};

export const dateToDateTime = (dateString: string) => {
	const [years, months, days] = dateString.split("-");
	const newDate = new Date();

	newDate.setDate(days as unknown as number);
	newDate.setMonth((months as unknown as number) - 1);
	newDate.setFullYear(years as unknown as number);

	return newDate;
};

export const formatDateTime = (
	dateTime: string | number | Date,
	dateFormat = "MMMM d, yyyy"
) => {
	try {
		return dateTime ? format(new Date(dateTime), dateFormat) : "";
	} catch (err) {
		return dateTime;
	}
};

export const getTodayDate = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const { t } = useTranslation();
	const today = new Date();

	return `${t(weekday[today.getDay()])},
		${t(month[today.getMonth()])}
		${today.getDate()}, ${today.getFullYear()}`;
};

export const numberToCurrency = (number: number | string) => {
	const str = String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return number > -1 ? `$${str}` : `- $${str.substr(1)}`;
};

export const testCanadianPostalCode = (postalCode: string) => {
	const postalCodeRegex =
		/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVXY][ -]?\d[ABCEGHJKLMNPRSTVXY]\d$/i;

	return postalCodeRegex.test(postalCode);
};

/* -----------------------------------------------
	Generate the year options for
	adding / editing vehicles.
	The oldest EV in the market is sold in 2008,
	and the newest year is "the current year + 1"
----------------------------------------------- */
const currentYear = new Date().getFullYear();
export const yearOptions: {
	name: string;
	value: number;
}[] = Array.from(Array(currentYear - 2008 + 2), (element, index) => ({
	name: `${currentYear - index + 1}`,
	value: currentYear - index + 1,
}));

export const searchInString = (
	searchString: string,
	searchTerm: string
): boolean => searchString.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;

/* A function to convert a date string to expressions like "X hours ago" or "X days ago" */
export const calcElapsedDayOrTime = (pastTime: string) => {
	const currentTimestamp = Date.now();
	const agoTimeStamp = new Date(pastTime).getTime();
	const elapsedHrs = Math.floor(
		(currentTimestamp - agoTimeStamp) / 1000 / 60 / 60
	);
	switch (true) {
		case elapsedHrs < 24:
			return `${elapsedHrs} hours ago`;
		case elapsedHrs < 48:
			return "1 day ago";
		default:
			return `${Math.floor(elapsedHrs / 24)} days ago`;
	}
};

/* Pick an icon among email, phone and chat */
export const switchSupportIcon = (category: string): IconType => {
	switch (category) {
		case "email":
			return AiOutlineMail;
		case "phone":
			return AiOutlinePhone;
		default:
			return BsChatDots;
	}
};

/* Convert the time strings the server returns, which is UTC, to the local time string */
export const convertUTCToLocalTimeString = (
	timeString: string,
	dateStyle: "full" | "long" | "medium" | "short",
	timeStyle: "full" | "long" | "medium" | "short",
	lng: string
) =>
	new Date(`${timeString} UTC`).toLocaleString(lng === "en" ? "en-us" : lng, {
		dateStyle,
		timeStyle,
	});

/* A function to used for a sorter for the table */
export const localeCompareForTable = (a: string, b: string) => {
	if (a === null || b === null) return 0;
	return a.localeCompare(b);
};

export const formatPhoneNumber = (phoneNumberString: string) => {
	const numbersOnlyPhoneNumberString = phoneNumberString.replace(/\D/g, "");
	const m = numbersOnlyPhoneNumberString.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
	if (m) {
		const intlCode = m[1] ? "+1 " : "";
		return [intlCode, "(", m[2], ") ", m[3], "-", m[4]].join("");
	}
	return null;
};

export const convertImgFileToBase64 = (imgData: string) => {
	const base64Data = Buffer.from(imgData, "binary").toString("base64");
	return base64Data;
};
