import FirstComponent from "./components/FirstComponent";
import TemplateExpression from "./components/TemplateExpression";
import Event from "./components/Event";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Reactimg from "./assets/react.svg";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import CondicionalRender from "./components/CondicionalRender";
import ShowUserName from "./components/ShowUserName";
import { useState } from "react";
import CarDetails from "./components/CarDetails";
import Frag from "./components/Frag";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import ChangeMsgState from "./components/ChangeMsgState";
import Message from "./components/Message";

function App() {
	const [username] = useState("Gabriel");

	const cars = [
		{ id: 1, marca: "ferrari", km: 1000, color: "azul", newCar: false },
		{ id: 2, marca: "KIA", km: 0, color: "branco", newCar: true },
		{ id: 3, marca: "Toyota", km: 100230, color: "azul", newCar: false },
	];

	function showMessage() {
		console.log("hello world");
	}

	const [message, setMessage] = useState("");

	const handleMessage = (msg) => {
		setMessage(msg);
	};

	return (
		<div>
			<h1>Hello world</h1>

			<FirstComponent />

			<p className="teste">teste</p>

			<TemplateExpression />

			<MyComponent />

			<Event />

			<div>
				<img src={Reactimg} alt="" />
			</div>
			<ManageData />

			<ListRender />

			<CondicionalRender />

			<ShowUserName name={username} />

			{/* Destrructuring */}

			<CarDetails marca="vw" km={1000} color="azul" newCar={false} />

			{/* reaproveitar  */}

			<CarDetails marca="bmw" km={0} color="vermelha" newCar={true} />

			<CarDetails marca="jaguar" km={450} color="branco" newCar={false} />

			{/* loop em array de objetos */}

			{cars.map((car) => (
				<CarDetails
					key={car.id}
					marca={car.marca}
					km={car.km}
					color={car.color}
					newCar={car.newCar}
				/>
			))}

			{/* Fragment */}

			<Frag />

			{/* Children */}

			<Container>
				<p>conteudo</p>{" "}
			</Container>

			{/* executar funçao */}

			<ExecuteFunction myFunction={showMessage} />

			<Message msg={message} />

			<ChangeMsgState handleMessage={handleMessage} />
		</div>
	);
}

export default App;
