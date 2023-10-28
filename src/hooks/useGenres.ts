import { useQuery } from "react-query";
import apiClient, { Payload } from "../services/api-client";
import genres from "../data/genres";

export interface Genre {
	id: number;
	name: string;
	slug: string;
	image_background: string;
}
const useGenres = () => {
	return useQuery({
		queryKey: ["genres"],
		queryFn: () =>
			apiClient.get<Payload<Genre>>("/genres").then((res) => res.data),
		staleTime: 24 * 60 * 60 * 1000,
		initialData: { count: genres.length, results: genres },
	});
};

export default useGenres;
