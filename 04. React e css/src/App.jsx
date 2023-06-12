import "./App.css";
import MyComponent from "./Components/MyComponent";
import Title from "./Components/Title";

function App() {
	const redTitle = true;
	return (
		<>
			<h1>Alguma coisa</h1>
			<MyComponent />
			<p>paragrafo do app.jsx</p>
			{/* classe dinamica */}
			<h2 className={redTitle ? "redTitle" : "Title"}>Teste style dinamico</h2>
			{/* CSS modules */}
			<Title />
		</>
	);
}

export default App;
