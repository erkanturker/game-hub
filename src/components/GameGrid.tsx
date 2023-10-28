import { SimpleGrid, Text } from "@chakra-ui/react";
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

	if (error) return <Text>{error.message}</Text>;

	return (
		<div>
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6} padding="10px">
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardContainer key={skeleton}>
							<GameCardSkeloton></GameCardSkeloton>
						</GameCardContainer>
					))}
				{data?.results.map((game) => (
					<GameCardContainer key={game.id}>
						<GameCard game={game}></GameCard>
					</GameCardContainer>
				))}
			</SimpleGrid>
		</div>
	);
};

export default GameGrid;
