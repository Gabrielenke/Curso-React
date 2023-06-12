const TemplateExpression = () => {
	const name = "Gabriel";
	const data = {
		name: "Gabriel",
		age: 20,
		city: "São Paulo",
	};
	return (
		<div>
			<h1> ola {name},tudo bem </h1>
			<p>Voce tem {data.age} anos</p>
		</div>
	);
};

export default TemplateExpression;
