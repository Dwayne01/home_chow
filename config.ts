const staging = {
	env: "development",
	baseUrl: "",
	localBaseURL: "http://localhost:8000",
	localApi: false,
	mockApi: false,
	googleClientId: "",
	apiKey: "",
	projectId: "",
	messagingSenderId: "",
	appId: "",
};

// eslint-disable-next-line no-eval
const isLocalApi = eval(
	process.env.REACT_APP_LOCAL_API || staging.localApi.toString()
);

const config = {
	mockApi: process.env.REACT_APP_MOCK_API || staging.mockApi,
	env: process.env.REACT_APP_NODE_ENV || staging.env,
	baseUrl: process.env.REACT_APP_BASE_URL || staging.baseUrl,
	localBaseURL: process.env.REACT_APP_LOCAL_BASE_URL || staging.localBaseURL,
	localApi: isLocalApi,
	googleClientId: process.env.REACT_GOOGLE_CLIENT_ID || staging.googleClientId,
	apiKey: process.env.REACT_APP_API_KEY || staging.apiKey,
	projectId: process.env.REACT_APP_PROJECT_ID || staging.projectId,
	messagingSenderId:
		process.env.REACT_APP_MESSAGING_SENDER_ID || staging.messagingSenderId,
	appId: process.env.REACT_APP_APP_ID || staging.appId,
};

export default config;
