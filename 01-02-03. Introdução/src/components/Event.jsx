const Events = () => {
	const HandleMyEvent = (e) => {
		console.log(e);
		console.log("Cliquei no botão");
	};

	return (
		<div>
			<div>
				<button onClick={HandleMyEvent}>Clique aqui!</button>
			</div>
			<div>
				<button onClick={() => console.log("teste")}>Clique aqui tambem</button>
			</div>
			<div>{renderSomething(true)}</div>
		</div>
	);
};

const renderSomething = (x) => {
	if (x) {
		return <h1>Teste</h1>;
	} else {
		return <h1>Teste 2</h1>;
	}
};

export default Events;
