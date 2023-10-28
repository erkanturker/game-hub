import { useQuery } from "react-query";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";
import apiClient, { Payload } from "../services/api-client";

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
	return useQuery<Payload<Game>, Error>({
		queryKey: ["games", gameQuery],
		queryFn: () =>
			apiClient
				.get<Payload<Game>>("/games", {
					params: {
						genres: gameQuery.genre?.id,
						parent_platforms: gameQuery.platform?.id,
						ordering: gameQuery.sortOrder,
						search: gameQuery.searchText,
					},
				})
				.then((res) => res.data),
	});
};
export default useGames;
