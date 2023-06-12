import "./MyForm.css";
import { useState } from "react";

const MyForm = ({ user }) => {
	//gerenciamento de dados

	const [name, setName] = useState(user ? user.name : "");
	const [email, setEmail] = useState(user ? user.email : "");
	const [bio, setBio] = useState(user ? user.bio : "");
	const [role, setRole] = useState(user ? user.role : "user");

	const handleName = (e) => {
		setName(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form enviado");
		console.log(name, email, bio, role);
		// limpar campos
		setName("");
		setEmail("");
		setBio("");
		setRole("");
	};

	return (
		<>
			{/* envio de form */}
			{/* criaçao de form */}
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Nome:</label>
					<input
						type="text"
						placeholder="Digite seu nome"
						onChange={handleName}
						value={name}
					/>
				</div>
				{/* label envolvendo input */}
				<label>
					<span>E-mail :</span>
					<input
						type="email"
						name="email"
						placeholder="Digite seu email"
						// usando gerenciamento de dados inline
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
				</label>
				<label>
					<span>Bio</span>
					<textarea
						name="bio"
						placeholder="Descriçao do usuario"
						onChange={(e) => setEmail(e.target.value)}
						value={bio}
					></textarea>
				</label>
				<label>
					<span>Funçao no sistema</span>
					<select
						name="role"
						onChange={(e) => setRole(e.target.value)}
						value={role}
					>
						<option value="user">usuario</option>
						<option value="editor">editor</option>
						<option value="adm">adminstrador</option>
					</select>
				</label>
				<input type="submit" value="Submit" />
			</form>
		</>
	);
};

export default MyForm;
