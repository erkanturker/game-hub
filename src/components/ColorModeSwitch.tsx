import { HStack, Switch, useColorMode, Text } from "@chakra-ui/react";

const ColorModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<>
			<HStack>
				<Switch
					isChecked={colorMode === "dark"}
					onChange={toggleColorMode}
				></Switch>
				<Text whiteSpace="nowrap">
					{colorMode === "dark" ? "Light Mode" : "Dark Mode"}
				</Text>
			</HStack>
		</>
	);
};

export default ColorModeSwitch;
