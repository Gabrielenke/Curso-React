import { useState } from "react";

const ManageData = () => {
	let someData = 10;

	const [number, setNumber] = useState(1);

	return (
		<div>
			<div>
				<p>valor : {someData}</p>
				<button onClick={() => (someData = 15)}>Mudar variavel</button>
			</div>
			<div>
				<p>valor : {number}</p>
				<button onClick={() => setNumber(number + 1)}>Mudar o state</button>
			</div>
		</div>
	);
};

export default ManageData;
