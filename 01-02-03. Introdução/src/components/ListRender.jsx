import { useState } from "react";

const ListRender = () => {
	const [list] = useState([
		"mateus",
		"joao",
		"maria",
		"jose",
		"pedro",
		"lucas",
		"marcos",
		"julio",
	]);

	const [users, setUsers] = useState([
		{ id: 1, name: "mateus", age: 20 },
		{ id: 2, name: "joao", age: 21 },
		{ id: 3, name: "maria", age: 20 },
	]);

	const deleteRandom = () => {
		const randomNumber = Math.floor(Math.random() * 4);

		setUsers((prevUsers) => {
			return prevUsers.filter((user) => randomNumber !== user.id);
		});
		console.log(randomNumber);
	};

	return (
		<div>
			<ul>
				{list.map((item, i) => (
					<li key={i}> {item} </li>
				))}
			</ul>
			<ul>
				{users.map((user) => (
					<li key={user.id}>
						{" "}
						{user.name} - {user.age}
						{" anos"}
					</li>
				))}
			</ul>
			<button onClick={deleteRandom}>Delete random user </button>
		</div>
	);
};

export default ListRender;
