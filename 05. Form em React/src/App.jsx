import "./App.css";
import MyForm from "./Components/MyForm";

function App() {
	return (
		<>
			<h2>Formulario em react</h2>
			<MyForm
				user={{
					name: "jao",
					email: "jao@gmail.com",
					bio: "Alguma coisa sobre o usuario",
					role: "adm",
				}}
			/>
		</>
	);
}

export default App;
