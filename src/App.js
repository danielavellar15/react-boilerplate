import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "@fontsource/roboto";

import { theme } from "./config/theme";
import Router from "./Router";
import { GlobalStyles } from "./styles/GlobalStyles";
import { StyledApp } from "./styles/App.styles";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<StyledApp>
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</StyledApp>
		</ThemeProvider>
	);
}

export default App;
