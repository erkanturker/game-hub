import { Grid, GridItem, HStack } from '@chakra-ui/layout'
import { Show } from '@chakra-ui/media-query'
import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import GenreList from '../components/GenreList'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'

const HomePage = () => {
  return (
    <Grid
			templateAreas={{
				base: `"main"`,
				lg: `"aside main"`,
			}}
			templateColumns={{
				base: "1fr",
				lg: "200px 1fr",
			}}
		>
			<Show above="lg">
				<GridItem area="aside" paddingX={5}>
					<GenreList

					/>
				</GridItem>
			</Show>
			<GridItem area="main">
				<GameHeading />
				<HStack spacing={5} paddingX={2} marginBottom={4}>
					<PlatformSelector

					/>
					<SortSelector

					/>
				</HStack>
				<GameGrid />
			</GridItem>
		</Grid>
  )
}

export default HomePage;