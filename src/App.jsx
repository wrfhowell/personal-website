import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import JsonDisplay from "./JsonDisplay";
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

// React component that uses ProfilePic and handles click events
const ClickableProfilePic = () => {
	const navigate = useNavigate(); // Hook to get the navigate function

	const handleClick = () => {
		navigate(base); // Navigate to the base route
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

	const steps = [
		{ data: `{`, indent: 0 },
		{ data: `'name': Will Howell,`, indent: 1 },
		{
			data: `'description': Software and Data Engineer with experience building data pipelines and web APIs,`,
			indent: 1,
		},
		{
			data: `'currently at': Genesys,`,
			indent: 1,
		},
		{
			data: `'previously at': [ Rivian Automotive, UBC Launch Pad ],`,
			indent: 1,
		},
		{
			data: `'education': CS @ University of British Columbia,`,
			indent: 1,
		},
		{ data: `'resume': myResume.pdf,`, indent: 1 },
		{ data: `'contact': [`, indent: 1 },
		{ data: `'location': Vancouver, Canada,`, indent: 2 },
		{ data: `'email': wrfhowell@gmail.com,`, indent: 2 },
		{ data: `']',`, indent: 1 },
		{ data: `'profiles': [`, indent: 1 },
		{ data: `linkedin,`, indent: 2 },
		{ data: `github,`, indent: 2 },
		{ data: `']',`, indent: 1 },
		{ data: `'interests': [`, indent: 1 },
		{ data: `data engineering,`, indent: 2 },
		{ data: `climbing/bouldering (checkout my climbing logbook),`, indent: 2 },
		{ data: `chess,`, indent: 2 },
		{ data: `graphQL,`, indent: 2 },
		{ data: `my pretty girlfriend,`, indent: 2 },
		{ data: `']',`, indent: 1 },
		{ data: `}`, indent: 0 },
	];

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
