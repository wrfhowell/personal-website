import React from "react";

function Resume() {
	return (
		<div style={{ height: "100vh", width: "100vw" }}>
			<iframe
				src={`/personal-website/resume.pdf`}
				title="Resume"
				style={{ width: "100%", height: "100%" }} 
			></iframe>
		</div>
	);
}


export default Resume;
