const CarDetails = ({ marca, km, color, newCar }) => {
	return (
		<div>
			<h2>Detalhes do carro</h2>
			<ul>
				<li>Marca {marca} </li>
				<li>km {km} </li>
				<li>color {color} </li>
				<li>{newCar && <p>Novo carro</p>}</li>
			</ul>
		</div>
	);
};

export default CarDetails;
