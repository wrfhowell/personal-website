import React, { useState } from "react";
import styled from "styled-components";
import JsonDisplay from "./JsonDisplay";

const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	width: 100vw;
	position: relative;
	margin: 0 auto;
	padding: 150px 0px;
	background-image: url("/personal-website/profilePic.png");
	background-position: 40px 40px;
	background-repeat: no-repeat;
	background-size: 100px 100px;
	@media (max-width: 820px) {
		background-position: center 40px;
	}
`;

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
			data: `'interned at': [ Rivian Automotive, UBC Launch Pad ],`,
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

	return <AppContainer>{renderSteps()}</AppContainer>;
}

export default App;
