import React from "react";
import { RightContainer, Wrapper } from "./Navbar.styles";
import { AppBar, Toolbar, Typography, IconButton, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";

const StyledToolbar = styled(Toolbar)`
	background-color: ${({ theme }) => theme.colors.primary};
`;

const Navbar = () => {
	return (
		<Wrapper>
			<AppBar position="static">
				<StyledToolbar>
					<IconButton edge="start" color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6">Example</Typography>
					<RightContainer>
						<Button color="inherit">Login</Button>
					</RightContainer>
				</StyledToolbar>
			</AppBar>
		</Wrapper>
	);
};

export default Navbar;
