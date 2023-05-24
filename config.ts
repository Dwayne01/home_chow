const staging = {
	env: "development",
	baseUrl: "https://homechow-staging.herokuapp.com",
	localBaseURL: "http://localhost:8000",
	localApi: true,
	mockApi: false,
	googleClientId: "AIzaSyDap-mhUpuHbYzDspnaV5R00HHE3Q-QEYg",
	apiKey: "AIzaSyCcTz1UjqXPC8_Dbwy4mJAK0LlWfR-YIfU",
	projectId: "homechow-5fbeb",
	messagingSenderId: "231713040487",
	appId: "1:231713040487:web:4a88cdcac959576e718cc2",
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
