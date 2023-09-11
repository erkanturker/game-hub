import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GameCardSkeloton = () => {
	return (
		<Card >
			<Skeleton height="200px" />
			<CardBody>
				<SkeletonText />
			</CardBody>
		</Card>
	);
};

export default GameCardSkeloton;
