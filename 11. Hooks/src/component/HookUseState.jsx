import React from "react";
import { useState } from "react";

const HookUseState = () => {
	// 1 - useState

	let username = "João";
	const [name, setName] = useState("Gabriel");
	const changeName = () => {
		username = "João Gabriel";
		setName("Gabriel Enke");
		// console.log(username);
	};
	// console.log(name);

	// 2 - useState e inputs
	const [age, setAge] = useState(18);

	const handleSubmit = (e) => {
		e.preventDefault();

		// envio a uma Api
		console.log(age);
	};

	return (
		<div>
			<h2>useState</h2>
			<p>Variavel: {username} </p>
			<p>useState: {name} </p>
			<button onClick={changeName}>Mudar nomes</button>
			{/* useState e input */}

			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={age}
					onChange={(e) => setAge(e.target.value)}
				/>
				<input type="submit" value="enviar" />
			</form>
			<p>Voce tem: {age} anos </p>

			<hr />
		</div>
	);
};

export default HookUseState;
