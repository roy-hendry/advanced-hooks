import { useState, useEffect } from "react";

// useFetch can be used in place of Axios to make requests

function useFetch(url, options) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [data, setData] = useState(null);

	useEffect(() => {
		// We typically use async functions when making API calls as they need to wait for a response. If we don't do this there then the system will be surprised it doesn't instantly have the data it wants and it'll freak out
		const fetchData = async () => {
			try {
				// After waiting and fetching the response we then wait and then convert it to json.
				const response = await fetch(url, options);
				const data = await response.json();

				setData(data);
				setLoading(false);
			} catch (error) {
				setError(error);
				setLoading(false);
			}
		};

		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { data, loading, error };
}
export default useFetch;
