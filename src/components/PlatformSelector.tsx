import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import usePlatfrom from "../hooks/usePlatform";

interface Props {
	onSelectedPlatform: (platform: Platform) => void;
	selectedPlatfromId?: number;
}

const PlatformSelector = ({
	onSelectedPlatform,
	selectedPlatfromId,
}: Props) => {
	const { data: platforms } = usePlatforms();
	const platform = usePlatfrom(selectedPlatfromId);

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{platform?.name || "Platforms"}
			</MenuButton>
			<MenuList>
				{platforms?.results.map((platform) => (
					<MenuItem
						onClick={() => onSelectedPlatform(platform)}
						key={platform.id}
					>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
