import React from "react";
import styled from "styled-components";
import useTypingAnimation from "./useTypingAnimation";

const Container = styled.div`
	font-family: "Courier New", monospace;
	font-size: 20px;
	color: #5cb86c;
`;

const Caret = styled.span`
	font-weight: bold;
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

const JsonDisplay = ({ data, onComplete }) => {
	const { displayedText, isTyping } = useTypingAnimation(data, 60, onComplete);

	return (
		<Container>
			<ObjectContainer>
				{displayedText}
				{isTyping && <Caret>_</Caret>}
			</ObjectContainer>
		</Container>
	);
};

export default JsonDisplay;
