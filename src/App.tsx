import { Spinner } from "@chakra-ui/react";
import "./App.css";

function App() {
	return (
		<div>
			<Spinner
				thickness="4px"
				speed="0.65s"
				emptyColor="gray.200"
				color="blue.500"
				size="xl"
			/>
		</div>
	);
}

export default App;
