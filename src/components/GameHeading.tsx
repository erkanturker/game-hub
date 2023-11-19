import { Heading } from "@chakra-ui/react";
import usePlatfrom from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";



const GameHeading = () => {

	const genreId = useGameQueryStore(s=>s.gameQuery.genreId)
	const platformId = useGameQueryStore(s=>s.gameQuery.platformId)

	const genre = useGenre(genreId);

	const platform = usePlatfrom(platformId);

	const heading = `${genre?.name || ""} ${platform?.name || ""} Games`;

	return (
		<Heading as="h1" paddingX={2} marginBottom={2}>
			{heading}
		</Heading>
	);
};

export default GameHeading;
