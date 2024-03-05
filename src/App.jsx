import React, { useState } from "react";
import styled from "styled-components";
import JsonDisplay from "./JsonDisplay";

const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	// justify-content: center; /* Vertically centers the content */
	align-items: center; /* Horizontally centers the container */
	height: 50vh;
	width: 75vw;
	position: relative;
`;

const JsonDisplayWrapper = styled.div`
	margin-bottom: 16px; /* Adds space between components */
	left: 50%; /* Move to the middle */
	transform: translateX(50%); /* Adjust back half of its own width */
	text-align: left;
`;

function App() {
	const [animateSecond, setAnimateSecond] = useState(false);
	const [animateThird, setAnimateThird] = useState(false); // New state for controlling the third animation

	return (
		<AppContainer>
			<JsonDisplayWrapper>
				<JsonDisplay
					data={'name: "John Doe"'}
					onComplete={() => setAnimateSecond(true)} // Trigger second animation on complete
				/>
			</JsonDisplayWrapper>
			{animateSecond && (
				<JsonDisplayWrapper>
					<JsonDisplay
						data={"age: 30"}
						onComplete={() => setAnimateThird(true)} // Trigger third animation on complete
					/>
				</JsonDisplayWrapper>
			)}
			{animateThird && (
				<JsonDisplayWrapper>
					<JsonDisplay data={'address: "123 Main St, Anytown"'} />
				</JsonDisplayWrapper>
			)}
		</AppContainer>
	);
}

export default App;
