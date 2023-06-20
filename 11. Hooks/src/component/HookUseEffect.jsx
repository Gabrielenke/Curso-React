import { useState, useEffect } from "react";

const HookUseEffect = () => {
	// 1 - useEffect sem dependencia

	useEffect(() => {
		console.log("useEffect sem dependencia");
	});

	const [number, setNumber] = useState(1);

	const changeSomething = () => {
		setNumber(number + 1);
	};

	// 2 - useEffect com dependencia
	useEffect(() => {
		console.log("serei executado apenas uma vez");
	}, []);

	// 3 - item no array de dependencias
	const [anotherNumber, setAnotherNumber] = useState(0);

	useEffect(() => {
		if (anotherNumber > 0) {
			console.log(
				"serei executado apenas quando o anotherNumber for maior que 0",
			);
		}
	}, [anotherNumber]);

	// 4- Cleanup do useEffect
	useEffect(() => {
		// const timer = setTimeout(() => {
		// 	console.log("Hello world");
		// 	setAnotherNumber(anotherNumber + 1);
		// }, 2000);
		// return () => clearTimeout(timer);
	}, [anotherNumber]);

	return (
		<div>
			<h2>Use Effect</h2>
			<p>Number : {number} </p>
			<button onClick={changeSomething}>executar</button>
			<p>Another number: {anotherNumber} </p>
			<button onClick={() => setAnotherNumber(anotherNumber + 1)}>
				Another number
			</button>
			<hr />
		</div>
	);
};

export default HookUseEffect;
