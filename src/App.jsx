import React, { useState } from "react";
import styled from "styled-components";
import JsonDisplay from "./JsonDisplay";

const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center; /* Horizontally centers the container */
	height: 100vh; /* Adjust to 100vh to take full height */
	width: 100vw; /* Adjust to 100vw to take full width */
	position: relative;
	margin: 0 auto;
	padding: 20px; /* Add some padding around the container */
	background-image: url("/src/assets/profilePic.png"); /* Add your image path here */
	background-position: 40px 40px;
	background-repeat: no-repeat;
	background-size: 100px 100px; /* Adjust this size to your preference */
	@media (max-width: 768px) {
		background-image: none;
	}
`;

const JsonDisplayWrapper = styled.div`
	margin-bottom: 16px; /* Adds space between components */
	text-align: left;
	white-space: pre-wrap; /* Ensures text wraps and respects white space */
	word-wrap: break-word; /* Allows long words to be broken and wrapped to the next line */
	width: 80%; /* Limits the width to prevent extending beyond the page */
	max-width: 600px; /* Further limits the width for larger screens */
	display: flex; /* Enables flexbox layout */
	justify-content: flex-start; /* Aligns children to the start (left) */
`;

const IndentDiv = styled.div`
	padding-left: 30px;
`;

function App() {
	const [animate2, setAnimate2] = useState(false);
	const [animate3, setAnimate3] = useState(false);
	const [animate4, setAnimate4] = useState(false);
	const [animate4point5, setAnimate4point5] = useState(false);
	const [animate5, setAnimate5] = useState(false);
	const [animate6, setAnimate6] = useState(false);
	const [animate7, setAnimate7] = useState(false);
	const [animate8, setAnimate8] = useState(false);
	const [animate9, setAnimate9] = useState(false);
	const [animate10, setAnimate10] = useState(false);
	const [animate11, setAnimate11] = useState(false);

	return (
		<AppContainer>
			<JsonDisplayWrapper>
				<JsonDisplay
					data={`{`}
					onComplete={() => setAnimate2(true)} // Trigger second animation on complete
				/>
			</JsonDisplayWrapper>
			{animate2 && (
				<JsonDisplayWrapper>
					<IndentDiv>
						<JsonDisplay
							data={`'name': Will Howell,`}
							onComplete={() => setAnimate3(true)}
						/>
					</IndentDiv>
				</JsonDisplayWrapper>
			)}
			{animate3 && (
				<JsonDisplayWrapper>
					<IndentDiv>
						<JsonDisplay
							data={`'job': Software and Data Engineer,`}
							onComplete={() => setAnimate4(true)}
						/>
					</IndentDiv>
				</JsonDisplayWrapper>
			)}
			{animate4 && (
				<JsonDisplayWrapper>
					<IndentDiv>
						<JsonDisplay
							data={`'description': Software and Data Engineer with experience building data pipelines and web API's`}
							onComplete={() => setAnimate4point5(true)}
						/>
					</IndentDiv>
				</JsonDisplayWrapper>
			)}
			{animate4point5 && (
				<JsonDisplayWrapper>
					<IndentDiv>
						<JsonDisplay
							data={`'worked at: Genesys, Rivian Automotive, UBC Launch Pad,`}
							onComplete={() => setAnimate5(true)}
						/>
					</IndentDiv>
				</JsonDisplayWrapper>
			)}
			{animate5 && (
				<JsonDisplayWrapper>
					<IndentDiv>
						<JsonDisplay
							data={`'resume': myResume.pdf,`}
							onComplete={() => setAnimate6(true)}
						/>
					</IndentDiv>
				</JsonDisplayWrapper>
			)}
			{animate6 && (
				<JsonDisplayWrapper>
					<IndentDiv>
						<JsonDisplay
							data={`'contact': [`}
							onComplete={() => setAnimate7(true)}
						/>
					</IndentDiv>
				</JsonDisplayWrapper>
			)}
			{animate7 && (
				<JsonDisplayWrapper>
					<IndentDiv>
						<IndentDiv>
							<JsonDisplay
								data={`        'location': Vancouver, Canada,`}
								onComplete={() => setAnimate8(true)}
							/>
						</IndentDiv>
					</IndentDiv>
				</JsonDisplayWrapper>
			)}
			{animate8 && (
				<JsonDisplayWrapper>
					<IndentDiv>
						<IndentDiv>
							<JsonDisplay
								data={`        'email': wrfhowell@gmail.com`}
								onComplete={() => setAnimate9(true)}
							/>
						</IndentDiv>
					</IndentDiv>
				</JsonDisplayWrapper>
			)}
			{animate9 && (
				<JsonDisplayWrapper>
					<JsonDisplay data={`    '],`} />
				</JsonDisplayWrapper>
			)}
		</AppContainer>
	);
}

export default App;
