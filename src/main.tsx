import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import "./index.css";
import theme from "./theme.ts";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<ColorModeScript initialColorMode={theme.config.initialColorMode} />
			<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
				<RouterProvider router={router}></RouterProvider>
			</QueryClientProvider>
		</ChakraProvider>
	</React.StrictMode>
);
