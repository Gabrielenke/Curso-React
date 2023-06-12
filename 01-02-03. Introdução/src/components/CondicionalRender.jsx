import { useState } from "react";

const CondicionalRender = () => {
	const [x] = useState(false);

	const [name, setName] = useState("mateus");

	return (
		<div>
			<h1>Isso sera exibido?</h1>
			{x && <h2>Se x for true, sim</h2>}
			{!x && <h2>Se x for false, sim</h2>}

			<h1>If ternario</h1>
			{name === "mateus" ? (
				<div>
					<p>o nome eh mateus</p>
				</div>
			) : (
				<div>
					<p>O nome nao eh mateus</p>
				</div>
			)}
			<button onClick={() => setName("Joao")}>Change name </button>
			<button onClick={() => setName("mateus")}>Return name </button>
		</div>
	);
};

export default CondicionalRender;
