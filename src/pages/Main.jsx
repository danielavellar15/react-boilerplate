import React from "react";
import Helmet from "react-helmet";

import { Container, Typography } from "@material-ui/core";

import Navbar from "../components/NavBar/Navbar";

export default function MainPage() {
	return (
		<>
			<Helmet>
				<title>Example app</title>
			</Helmet>
			<Navbar />
			<Container maxWidth="sm">
				<Typography variant="h2" component="div" align="center" color="black">
					Hello World!!
				</Typography>
			</Container>
		</>
	);
}
