import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import JsonDisplay from "./components/JsonDisplay";
import { steps } from "./components/info";
import { base } from "./main";

// Styled container without the background-image properties
const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	width: 100vw;
	position: relative;
	margin: 0 auto;
	padding: 150px 0px;
`;

// New styled component for the background image
const ProfilePic = styled.div`
	position: absolute;
	left: 40px;
	top: 40px;
	width: 100px;
	height: 100px;
	background-image: url("/profilePic.png");
	background-size: cover;
	background-repeat: no-repeat;
	transition: transform 0.3s ease-in-out; // Smooth transition for the transform

	&:hover {
		transform: scale(1.1); // Slightly grow the pic on hover
	}

	@media (max-width: 820px) {
		left: 0;
		right: 0;
		margin: 0 auto;
	}
`;

const ClickableProfilePic = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(base);
	};

	return <ProfilePic onClick={handleClick} />;
};

const JsonDisplayWrapper = styled.div`
	margin-bottom: 16px;
	text-align: left;
	white-space: pre-wrap;
	word-wrap: break-word;
	width: 80%;
	max-width: 600px;
	display: flex;
	justify-content: flex-start;
`;

const IndentDiv = styled.div`
	padding-left: 30px;
`;

function App() {
	window.onbeforeunload = function () {
		window.scrollTo(0, 0);
	};

	const [animationStep, setAnimationStep] = useState(1);

	const renderSteps = () =>
		steps.slice(0, animationStep).map((step, index) => (
			<JsonDisplayWrapper key={index}>
				<IndentDiv style={{ paddingLeft: `${step.indent * 30}px` }}>
					<JsonDisplay
						data={step.data}
						onComplete={() => setAnimationStep((prevStep) => prevStep + 1)}
					/>
				</IndentDiv>
			</JsonDisplayWrapper>
		));

	return (
		<AppContainer>
			{ClickableProfilePic()}
			{renderSteps()}
		</AppContainer>
	);
}

export default App;
