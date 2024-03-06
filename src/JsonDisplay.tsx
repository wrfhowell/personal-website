import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import useTypingAnimation from "./useTypingAnimation";

const Container = styled.div`
	font-family: "Courier New", monospace;
	font-size: 15px;
	font-weight: 600;
	color: #03c03c;
`;

const Caret = styled.span`
	display: inline-block;
	width: 10px;
	height: 20px;
	background-color: #ffffff;
	vertical-align: middle;
	margin-left: 2px;
	animation: blink 1s step-end infinite;

	@keyframes blink {
		50% {
			opacity: 0;
		}
	}
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
	text-decoration: underline;
	color: inherit;
	cursor: pointer;
	font-weight: 600;
`;

const StyledLink = styled(RouterLink)`
	text-decoration: underline;
	color: inherit;
	cursor: pointer;
	font-weight: 600;
`;

const JsonDisplay = ({ data, onComplete }) => {
	const { displayedText, isTyping } = useTypingAnimation(data, 15, onComplete);

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
	if (text.includes("resume")) {
		return (
			<>
				{"'resume': "}
				<StyledLink to="/personal-website/resume">myResume.pdf,</StyledLink>
			</>
		);
	} else if (text.includes("github")) {
		return (
			<>
				<Link href="https://github.com/wrfhowell">github</Link>
				{`,`}
			</>
		);
	} else if (text.includes("climbing logbook")) {
		return (
			<>
				{"climbing/bouldering (checkout my "}
				<Link href="https://sendage.com/user/willh">climbing logbook</Link>
				{"),"}
			</>
		);
	} else if (text.includes("linkedin")) {
		return (
			<>
				<Link href="https://www.linkedin.com/in/will-howell-286210166/">
					linkedin
				</Link>
				{`,`}
			</>
		);
	} else if (text.includes("girlfriend")) {
		return (
			<>
				<StyledLink to="/personal-website/girlfriend">my pretty girlfriend,</StyledLink>
			</>
		);
	} else {
		return text;
	}
};

export default JsonDisplay;
