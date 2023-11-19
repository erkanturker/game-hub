import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
	const sortOrders = [
		{ value: "", label: "Relevance" },
		{ value: "-added", label: "Date added" },
		{ value: "name", label: "Name" },
		{ value: "-released", label: "Release Date" },
		{ value: "-metacritic", label: "Popularity" },
		{ value: "-rating", label: "Average rating" },
	];

	const selectedSort = useGameQueryStore((s) => s.gameQuery.sortOrder);
	const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

	const selectedLabel =
		sortOrders.find((order) => order.value === selectedSort)?.label ||
		" Relevance";

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{"Order By: " + selectedLabel}
			</MenuButton>
			<MenuList>
				{sortOrders.map((order) => (
					<MenuItem
						onClick={() => setSortOrder(order.value)}
						key={order.value}
						value={order.value}
					>
						{order.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
