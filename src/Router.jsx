import React from "react";
import { Route, Switch } from "react-router-dom";

// pages
import { Main, NotFound } from "./pages";

function Router() {
	return (
		<Switch>
			<Route exact path="/" component={Main} />
			<Route component={NotFound} />
		</Switch>
	);
}

export default Router;
