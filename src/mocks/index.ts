if (typeof window !== "undefined") {
	// eslint-disable-next-line global-require
	const { worker } = require("./browsers");
	worker.start();
}

export {};
