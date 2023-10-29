import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeloton from "./GameCardSkeloton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
	gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
	const {
		data,
		error,
		isLoading,
		fetchNextPage,
		hasNextPage,
	} = useGames(gameQuery);

	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

	const totalPage =
		data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

	if (error) return <Text>{error.message}</Text>;

	return (
		<InfiniteScroll
			dataLength={totalPage}
			next={() => fetchNextPage()}
			hasMore={!!hasNextPage}
			loader={<Spinner />}
		>
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6} padding="10px">
				{isLoading &&
					skeletons.map((skeleton) => (
						<GameCardContainer key={skeleton}>
							<GameCardSkeloton></GameCardSkeloton>
						</GameCardContainer>
					))}

				{data?.pages.map((page, index) => (
					<React.Fragment key={index}>
						{page.results.map((game) => (
							<GameCardContainer key={game.id}>
								<GameCard game={game}></GameCard>
							</GameCardContainer>
						))}
					</React.Fragment>
				))}
			</SimpleGrid>
		</InfiniteScroll>
	);
};

export default GameGrid;
