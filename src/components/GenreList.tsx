import {
	HStack,
	List,
	ListItem,
	Image,
	Stack,
	Skeleton,
	Button,
	Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
	onSelectedGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
	const { data, isLoading } = useGenres();
	const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

	if (isLoading)
		return skeletons.map((skeleton) => (
			<Stack key={skeleton}>
				<Skeleton height="12px" margin="10px" key={skeleton}></Skeleton>
			</Stack>
		));

	return (
		<>
			<Heading fontSize="2xl" marginBottom={3}>
				Genre
			</Heading>
			<List>
				{data?.results.map((genre) => (
					<ListItem paddingY="5px" key={genre.id}>
						<HStack>
							<Image
								boxSize="32px"
								borderRadius={8}
								objectFit="cover"
								src={getCroppedImageUrl(genre.image_background)}
							></Image>
							<Button
								textAlign="left"
								whiteSpace="normal"
								fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
								onClick={() => onSelectedGenre(genre)}
								variant="link"
								fontSize={"large"}
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
