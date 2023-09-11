import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

// Define a generic Payload type that represents the structure of the API response.
interface Payload<T> {
    count: number;     // Total count of items
    results: T[];      // Array of data items
}

// Create a custom hook named "useData" that fetches data from an API endpoint.
const useData = <T>(endpoint: string) => {

    // Define state variables for the fetched data, errors, and loading status.
    const [data, setData] = useState<T[]>([]);   // Initialize with an empty array.
    const [error, setError] = useState("");       // Initialize with an empty string.
    const [isLoading, setLoading] = useState(false);  // Initialize as not loading.

    // Use the useEffect hook to fetch data when the component mounts.
    useEffect(() => {
        setLoading(true);  // Set loading to true to indicate that a request is in progress.

        // Use the "apiClient" to make a GET request to the specified "endpoint".
        apiClient
            .get<Payload<T>>(endpoint)
            .then((res) => {
                // On successful response, set the fetched data to the results.
                setData(res.data.results);
                setLoading(false);  // Set loading to false as the request is complete.
            })
            .catch((err) => {
                // If an error occurs, set the error message and set loading to false.
                setError(err.message);
                setLoading(false);
            });

    }, []); // The empty dependency array ensures this effect runs only once when mounted.

    // Return the data, error message, and loading status as an object.
    return { data, error, isLoading };
}

export default useData; // Export the custom hook for use in other components.
