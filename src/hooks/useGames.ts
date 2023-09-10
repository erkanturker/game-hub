import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import mockGameData from "../../mockDataGames.json";


export interface Game {
    id: number;
    name: string;
    background_image: string
}

interface GamesPayload {
    count: number;
    results: Game[];
}

const useGames = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");

    const mockGames: GamesPayload = mockGameData;


    useEffect(() => {
        apiClient
            .get<GamesPayload>("/xgames")
            .then((res) => {
                setGames(res.data.results);
            })
            .catch(
                (err) => setError(err.message) // Set an error message
            ).finally(
                () => setGames(mockGames.results)

            );
    }, []);

    return { games, error }

}

export default useGames;