import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
    id: number;
    name: string;
}

interface GamesPayload {
    count: number;
    results: Game[];
}

const useGames = () => {

    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        apiClient
            .get<GamesPayload>("/sgames")
            .then((res) => {
                setGames(res.data.results);
            })
            .catch(
                (err) => setError(err.message) // Set an error message
            );
    }, []);

    return { games, error }

}

export default useGames;