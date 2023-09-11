import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
	const { games, error } = useGames();
	return (
		<div>
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
				spacing={10}
				padding="10px"
			>
				{games.map((game) => (
					<GameCard key={game.id} game={game}></GameCard>
				))}
			</SimpleGrid>
			{error && <p>{error}</p>}
		</div>
	);
};

export default GameGrid;