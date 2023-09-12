import {
	HStack,
	List,
	ListItem,
	Image,
	Stack,
	Skeleton,
	Button,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
	const { data, error, isLoading } = useGenres();
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	if (isLoading)
		return skeletons.map((skeleton) => (
			<Stack key={skeleton}>
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
						<Button variant="link" fontSize={"large"}>
							{genre.name}
						</Button>
					</HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
