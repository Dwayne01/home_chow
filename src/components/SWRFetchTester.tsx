import useSWR from "swr";

const SWRFetchTester = () => {
	const fetcher = (url: string) => fetch(url).then((res) => res.json());
	const { data, error, isLoading } = useSWR(
		"https://jsonplaceholder.typicode.com/todos/1",
		fetcher
	);
	// Reference: https://jsonplaceholder.typicode.com/

	if (error) return <div>Error: {error.message}</div>;
	if (isLoading) return <div>Loading...</div>;
	if (!data) return <div>Failed to load data</div>;

	// eslint-disable-next-line no-console
	console.log(data);

	return <div>Check the console for the test data.</div>;
};

export default SWRFetchTester;
