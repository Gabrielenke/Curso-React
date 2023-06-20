import "./App.css";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { HookUseContext } from "./component/HookUseContext";

function App() {
	return (
		<>
			<HookUseContext>
				<h1>Entenda os Hooks</h1>
				<BrowserRouter>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">Sobre</Link>
						</li>
					</ul>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</BrowserRouter>
			</HookUseContext>
		</>
	);
}

export default App;
