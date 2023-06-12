import React from "react";

const ChangeMsgState = ({ handleMessage }) => {
	const messages = ["Hello World", "Hello Gabriel", "Hello React"];
	return (
		<div>
			<button onClick={() => handleMessage(messages[0])}>
				Clique para mudar
			</button>
			<button onClick={() => handleMessage(messages[1])}>
				Clique para mudar
			</button>
			<button onClick={() => handleMessage(messages[2])}>
				Clique para mudar
			</button>
		</div>
	);
};

export default ChangeMsgState;
