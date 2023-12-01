import { SimpleGrid,Image, space } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenShots";

interface Props {
  gameId: number;
}

const GamesScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const fetchedImages = data?.results;

  return !fetchedImages ? null : (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} marginTop={2}>
      {fetchedImages.map((file) => (
        <Image key={file.id} src={file.image} width='auto' height=''/>
      ))}
    </SimpleGrid>
  );
};

export default GamesScreenshots;
