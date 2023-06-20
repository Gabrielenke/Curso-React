import { useReducer, useState } from "react";

const HookUseReducer = () => {
	// 1- começando com o usereducer

	const [number, dispatch] = useReducer((state, action) => {
		return Math.floor(Math.random(state) * 10);
	});

	// 2 - avançando no usereducer

	const initialTasks = [
		{ id: 1, title: "Estudar programação" },
		{ id: 2, title: "Ler livros" },
	];

	const taskReducer = (state, action) => {
		switch (action.type) {
			case "ADD":
				const newTask = {
					id: Math.random(),
					title: taskText,
				};

				setTaskText("");
				return [...state, newTask];
			case "REMOVE":
				return state.filter((task) => task.id !== action.id);
			default:
				return state;
		}
	};

	const [taskText, setTaskText] = useState("");
	const [tasks, dispachTasks] = useReducer(taskReducer, initialTasks);

	const handleSubmit = (e) => {
		e.preventDefault();

		dispachTasks({ type: "ADD" });
	};

	const removeTask = (id) => {
		dispachTasks({ type: "REMOVE", id: id });
	};

	return (
		<div>
			<h2>useReducer</h2>
			<p> numero: {number} </p>
			<button onClick={dispatch}>Alterar numero</button>
			<h3>Tarefas</h3>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					onChange={(e) => setTaskText(e.target.value)}
					value={taskText}
				/>
				<input type="submit" value="enviar" />
			</form>
			{tasks.map((task) => (
				<li key={task.id} onDoubleClick={() => removeTask(task.id)}>
					{task.title}
				</li>
			))}
			<hr />
		</div>
	);
};

export default HookUseReducer;
