import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
	onSelectedPlatform: (platform: Platform) => void;
	selectedPlatfrom: Platform | null;
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatfrom }: Props) => {
	const { data } = usePlatforms();

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{selectedPlatfrom?.name || "Platforms"}
			</MenuButton>
			<MenuList>
				{data?.results.map((platform) => (
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
