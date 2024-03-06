import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import useTypingAnimation from "./useTypingAnimation";

const Container = styled.div`
	font-family: "Courier New", monospace;
	font-size: 15px;
	color: #5cb86c;
`;

const Caret = styled.span`
	display: inline-block; /* Allows us to set width and height */
	width: 10px; /* Width of the square */
	height: 20px; /* Height of the square, adjust as needed */
	background-color: #5cb86c; /* Caret color, match or contrast with text */
	vertical-align: middle; /* Aligns with the text nicely */
	margin-left: 2px; /* Optional: Adjust space between the caret and the text */
	animation: blink 1s step-end infinite;

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}
`;

const Key = styled.span`
	font-weight: bold; /* Make key names bold */
`;

const Value = styled.span`
	font-weight: bold; /* Optional: Make values bold as well */
`;

const ObjectContainer = styled.div`
	margin-left: 3vw;
`;

// const renderValue = (value) => {
// 	if (typeof value === "object" && value !== null) {
// 		// Ensure null is handled correctly
// 		return <JsonDisplay data={value} />;
// 	} else {
// 		// Stringify the value but remove quotes from strings for aesthetic reasons
// 		let stringValue = JSON.stringify(value);
// 		stringValue =
// 			typeof value === "string" ? stringValue.slice(1, -1) : stringValue;
// 		return <Value>{stringValue}</Value>;
// 	}
// };

const Link = styled.a`
	text-decoration: underline; // Ensure the link is underlined
	color: inherit; // Optional: Use the parent's text color
	cursor: pointer; // Change cursor to pointer on hover
`;
const StyledLink = styled(RouterLink)`
	text-decoration: underline; // Ensure the link is underlined
	color: inherit; // Optional: Use the parent's text color
	cursor: pointer; // Change cursor to pointer on hover
`;

const JsonDisplay = ({ data, onComplete }) => {
	const { displayedText, isTyping } = useTypingAnimation(data, 20, onComplete);

	return (
		<Container>
			<ObjectContainer>
				{renderWithLinks(displayedText)}
				{isTyping && <Caret></Caret>}
			</ObjectContainer>
		</Container>
	);
};

const renderWithLinks = (text) => {
	// Check if "John Doe" is present
	if (text.includes("resume")) {
		// Split the text around "John Doe" and wrap "John Doe" in a Link component
		return (
			<>
				{"'resume': "}
				<StyledLink to="/resume">myResume.pdf,</StyledLink>
			</>
		);
	} else {
		// If "John Doe" is not present, render the text as is
		return text;
	}
};

export default JsonDisplay;
