import "./App.css";
// config react router

import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./Pages/Home";
import About from "./Pages/About";

// components
import NavBar from "./Components/NavBar";
// import About from "./Pages/About";
function App() {
	return (
		<>
			<h1>React router</h1>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
