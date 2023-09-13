import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeloton from "./GameCardSkeloton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

interface Props {
	gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
	const { data, error, isLoading } = useGames(gameQuery);

	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
	return (
		<div>
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={3} padding="10px">
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardContainer key={skeleton}>
							<GameCardSkeloton></GameCardSkeloton>
						</GameCardContainer>
					))}
				{data.map((game) => (
					<GameCardContainer key={game.id}>
						<GameCard game={game}></GameCard>
					</GameCardContainer>
				))}
			</SimpleGrid>
			{error && <p>{error}</p>}
		</div>
	);
};

export default GameGrid;
