const staging = {
	env: "development",
	baseUrl: "https://homechow.herokuapp.com",
	localBaseURL: "https://homechow.herokuapp.com",
	localApi: true,
	mockApi: false,
	googleClientId: "1234567890",
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
};

export default config;
