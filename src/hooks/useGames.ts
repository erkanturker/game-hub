import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import mockGameData from "../../mockDataGames.json";


export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number
}

interface GamesPayload {
    count: number;
    results: Game[];
}

const useGames = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    const mockGames: GamesPayload = mockGameData;


    useEffect(() => {
        setLoading(true);
        apiClient
            .get<GamesPayload>("/xgames")
            .then((res) => {
                setGames(res.data.results);
                setLoading(false);
            })
            .catch(
                (err) => {
                    setError(err.message);
                    setLoading(false);
                }
            ).finally(
                () => {
                    setGames(mockGames.results)
                    setLoading(false)
                }

            );
    }, []);

    return { games, error, isLoading }

}

export default useGames;