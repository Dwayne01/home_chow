import { ClipboardEvent, KeyboardEvent, useRef } from "react";

const keyCodesDictionary: { [key: number]: number } = {
	0: 48,
	1: 49,
	2: 50,
	3: 51,
	4: 52,
	5: 53,
	6: 54,
	7: 55,
	8: 56,
	9: 57,
};

const actionKeys: { [key: string]: number } = {
	ENTER: 13,
	LEFT: 37,
	RIGHT: 39,
	BACKSPACE: 8,
};

const totalDigit = 6;

const CodeInput = ({
	code,
	onUpdate,
	onSubmit,
}: {
	code: string;
	// eslint-disable-next-line no-unused-vars
	onUpdate: (_data: string) => void;
	onSubmit: () => void;
}) => {
	const digitsEle = useRef(new Array(totalDigit));

	const handleMoveFocus = (input: { select: () => void }) => {
		input.select();
	};

	const handleChange = ({ value, index }: { value: string; index: number }) => {
		if (value === " ") {
			const previousInput = digitsEle.current[index - 1];

			if (index > 0 && previousInput) {
				handleMoveFocus(previousInput);
			}
		}

		const newCodeArr = code.split("");
		newCodeArr[index] = value;

		// prevent input from receiving non number values
		// eslint-disable-next-line radix
		if (Number.isNaN(parseInt(value)) && value !== " ") return;

		onUpdate(newCodeArr.join("").slice(0, totalDigit));
	};

	const handleOnKeyUp = (e: KeyboardEvent, index: number) => {
		const target = e.target as HTMLInputElement;
		// prevent going to next input field when typing fast to prevent missing an input from the user
		if (target.value === " ") return;

		const nonEmptyDigits = (code && code.replace(/\s/g, "").length) || 0;

		if (code.replace(/\s/g, ""))
			if (e.keyCode === actionKeys.ENTER && nonEmptyDigits === totalDigit) {
				onSubmit();
			}

		if (e.keyCode === actionKeys.LEFT && index === 0) return;

		// left key pressed
		if (e.keyCode === actionKeys.LEFT && index > 0) {
			digitsEle.current[index - 1].select();
			return;
		}

		// right key pressed
		if (e.keyCode === actionKeys.RIGHT && index < totalDigit - 1) {
			digitsEle.current[index + 1].select();
			return;
		}

		const keyCodes = Object.values(keyCodesDictionary);

		// prevent going to next input field if numbers where not typed
		if (!keyCodes.includes(e.keyCode)) {
			return;
		}

		const nextInput = digitsEle.current[index + 1];
		if (index < totalDigit - 1 && nextInput)
			digitsEle.current[index + 1].focus();
	};

	const handlePasteValue = (e: ClipboardEvent<HTMLInputElement>) => {
		e.preventDefault();
		const pasted = e.clipboardData.getData("text/plain");
		if (!pasted) return;

		if (pasted.length > totalDigit) {
			onUpdate(pasted.slice(0, totalDigit));
		} else {
			onUpdate(pasted.padEnd(totalDigit));
			if (pasted.length !== totalDigit)
				handleMoveFocus(digitsEle.current[pasted.length]);
		}
	};

	return (
		<div className="grid grid-rows-1 grid-flow-col gap-4">
			{Array.from(Array(totalDigit).keys()).map((index) => {
				const isEmpty = code[index] === " ";

				return (
					<input
						inputMode="numeric"
						key={index}
						data-testid={`code-input-${index + 1}`}
						className={`${isEmpty ? "border-b" : "border-b-2"} ${
							isEmpty ? "border-gray-300" : "border-wf-base-600"
						} w-10 text-center text-4xl focus:outline-none`}
						ref={(ele) => (digitsEle.current[index] = ele)}
						value={code[index] || ""}
						onKeyUp={(e) => handleOnKeyUp(e, index)}
						onChange={(e) => {
							const input = e.target.value.replace(/\s/g, "");
							handleChange({ value: input ? input[0] : " ", index });
						}}
						onPaste={handlePasteValue}
						data-private
					/>
				);
			})}
		</div>
	);
};

export default CodeInput;
