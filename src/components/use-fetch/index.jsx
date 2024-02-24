import {useEffect, useState} from "react";

const useFetch = (url, options = {}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(url, {...options});
            if (response.ok) {
                const json = await response.json();
                setData(json);
                setError(null);
                setLoading(false);
            } else {
                throw new Error(response.statusText);
            }
        } catch (error) {
            setError(`${error}. Some error occurred. Please try again later.`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;