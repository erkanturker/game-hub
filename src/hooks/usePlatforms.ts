import { useQuery } from "react-query";
import apiClient, { Payload } from "../services/api-client";
import platforms from "../data/platforms";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

const usePlatforms = () => {
	return useQuery({
		queryKey: ["platforms"],
		queryFn: () =>
			apiClient
				.get<Payload<Platform>>("platforms/lists/parents")
				.then((res) => res.data),
		staleTime: 24 * 60 * 60 * 1000,
		initialData: { count: platforms.length, results: platforms },
	});
};
export default usePlatforms;
