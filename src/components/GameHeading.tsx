import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatfrom from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
	gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
	const genre = useGenre(gameQuery.genreId);

	const platform = usePlatfrom(gameQuery.platformId);

	const heading = `${genre?.name || ""} ${platform?.name || ""} Games`;

	return (
		<Heading as="h1" paddingX={2} marginBottom={2}>
			{heading}
		</Heading>
	);
};

export default GameHeading;
