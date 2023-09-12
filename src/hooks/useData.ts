import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";

// Define a generic Payload type that represents the structure of the API response.
interface Payload<T> {
    count: number;
    results: T[];
}

// Create a custom hook named "useData" that fetches data from an API endpoint.
const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {

    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        apiClient
            .get<Payload<T>>(endpoint, { ...requestConfig })
            .then((res) => {
                setData(res.data.results);
                setLoading(false);
            })
            .catch((err) => {
                // If an error occurs, set the error message and set loading to false.
                setError(err.message);
                setLoading(false);
            });

    }, deps ? [...deps] : []); // The empty dependency array ensures this effect runs only once when mounted.

    // Return the data, error message, and loading status as an object.
    return { data, error, isLoading };
}

export default useData; // Export the custom hook for use in other components.
