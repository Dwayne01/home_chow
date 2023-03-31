const staging = {
	env: "development",
	baseUrl: "https://homechow.herokuapp.com",
	localBaseURL: "https://homechow.herokuapp.com",
	localApi: true,
	mockApi: true,
	googleClientId: "1234567890",
	apiKey: "AIzaSyCMTDI-ksd3uUXb3RnPhtWzJpjrInLRnso",
	projectId: "test-auth-5638b",
	messagingSenderId: "822286140849",
	appId: "1:822286140849:web:cddd94b5dde1d20530a990",
};

// eslint-disable-next-line no-eval
const isLocalApi = eval(
	process.env.REACT_APP_LOCAL_API || staging.localApi.toString()
);

const config = {
	mockApi: process.env.REACT_APP_MOCK_API || staging.mockApi,
	env: process.env.REACT_APP_NODE_ENV || staging.env,
	baseUrl: isLocalApi
		? staging.baseUrl
		: process.env.REACT_APP_BASE_URL || staging.baseUrl,
	localBaseURL: isLocalApi
		? staging.baseUrl
		: process.env.REACT_APP_LOCAL_BASE_URL || staging.localBaseURL,
	localApi: isLocalApi,
	googleClientId: process.env.REACT_GOOGLE_CLIENT_ID || staging.googleClientId,
	apiKey: process.env.REACT_APP_API_KEY || staging.apiKey,
	projectId: process.env.REACT_APP_PROJECT_ID || staging.projectId,
	messagingSenderId:
		process.env.REACT_APP_MESSAGING_SENDER_ID || staging.messagingSenderId,
	appId: process.env.REACT_APP_APP_ID || staging.appId,
};

export default config;
