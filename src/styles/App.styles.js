import styled, { keyframes } from "styled-components";

export const StyledApp = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	position: relative;
	background-color: ${({ theme }) => theme.colors.bg};
	color: ${({ theme }) => theme.colors.text};
`;
