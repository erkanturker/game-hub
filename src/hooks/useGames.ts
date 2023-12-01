import { useInfiniteQuery } from "react-query";
import APIClient, { Payload } from "../services/api-client";
import ms from "ms";
import { GameQuery } from "../store";
import  Game  from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
	useInfiniteQuery<Payload<Game>, Error>({
		queryKey: ["games", gameQuery],
		queryFn: ({ pageParam = 1 }) =>
			apiClient.getAll({
				params: {
					genres: gameQuery.genreId,
					parent_platforms: gameQuery.platformId,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
					page: pageParam,
				},
			}),
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : undefined;
		},
		staleTime: ms("24h"),
	});
export default useGames;
