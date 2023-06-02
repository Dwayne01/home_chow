const config = {
	mockApi: process.env.NEXT_PUBLIC_MOCK_API,
	env: process.env.NEXT_PUBLIC_NODE_ENV,
	baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
	localBaseURL: process.env.NEXT_PUBLIC_LOCAL_BASE_URL,
	localApi: false,
	googleClientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
};

export default config;
