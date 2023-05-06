const staging = {
	env: "development",
	baseUrl: "https://homechow.herokuapp.com",
	localBaseURL: "https://homechow.herokuapp.com",
	localApi: true,
	mockApi: true,
	googleClientId: "AIzaSyDap-mhUpuHbYzDspnaV5R00HHE3Q-QEYg",
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
	baseUrl: process.env.REACT_APP_BASE_URL || staging.baseUrl,
	localBaseURL: process.env.REACT_APP_LOCAL_BASE_URL || staging.localBaseURL,
	localApi: isLocalApi,
	googleClientId: process.env.REACT_GOOGLE_CLIENT_ID || staging.googleClientId,
};

export default config;
