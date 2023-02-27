import { base } from "./color";

export const applyTheme = (theme?: ITheme): void => {
	const themeObject: IMappedTheme = mapTheme(theme || base);
	if (!themeObject) return;

	const root = document.documentElement;

	Object.keys(themeObject).forEach((property) => {
		if (property === "name") {
			return;
		}

		root.style.setProperty(property, themeObject[property]);
	});
};

export const extend = (extending: ITheme, newTheme: ITheme): ITheme => ({
	...extending,
	...newTheme,
});

export interface ITheme {
	[key: string]: string;
}

export interface IThemes {
	[key: string]: ITheme;
}

export interface IMappedTheme {
	[key: string]: string | null;
}

export const mapTheme = (variables: ITheme): IMappedTheme => ({
	"--color-primary": variables["primary-color"] || "",
	"--color-primary-light": variables["primary-color-light"] || "",
	"--color-primary-deactivated": variables["primary-color-deactivated"] || "",
	"--color-secondary": variables["secondary-color"] || "",
	"--color-footer": variables["footer-color"] || "",
	"--color-header-border": variables["header-border-color"] || "",
});
