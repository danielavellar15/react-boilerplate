import { Container, Typography } from "@material-ui/core";
import React from "react";
import { Helmet } from "react-helmet";

const NotFoundPage = () => {
	return (
		<>
			<Helmet>
				<title>404</title>
			</Helmet>
			<Container maxWidth="sm">
				<Typography variant="h2" component="div" align="center" color="black">
					ops...
				</Typography>
			</Container>
		</>
	);
};

export default NotFoundPage;
