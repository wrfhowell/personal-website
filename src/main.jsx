import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import Girlfriend from "./Girlfriend.tsx";
import Resume from "./Resume";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
export const base = "/";
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path={base} element={<App />} />
				<Route path={base + "resume"} element={<Resume />} />
				<Route path={base + "girlfriend"} element={<Girlfriend />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
