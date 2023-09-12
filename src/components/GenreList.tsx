import {
	HStack,
	List,
	ListItem,
	Image,
	Text,
	Stack,
	Skeleton,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
	const { data, error, isLoading } = useGenres();
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12];

	if (isLoading)
		return skeletons.map((skeleton) => (
			<Stack>
				<Skeleton height="12px" margin="10px" key={skeleton}></Skeleton>
			</Stack>
		));

	return (
		<List>
			{error && <p>{error}</p>}
			{data.map((genre) => (
				<ListItem paddingY="5px" key={genre.id}>
					<HStack>
						<Image
							boxSize="32px"
							borderRadius={8}
							src={getCroppedImageUrl(genre.image_background)}
						></Image>
						<Text fontSize={"large"}>{genre.name}</Text>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
