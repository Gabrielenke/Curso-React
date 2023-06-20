import React from "react";
import HookUseState from "../component/HookUseState";
import HookUseReducer from "../component/HookUseReducer";
import HookUseEffect from "../component/HookUseEffect";
import HookUseCallback from "../component/HookUseCallback";

// useContext
import { useContext } from "react";
import { someContext } from "../component/HookUseContext";
import HookUseRef from "../component/HookUseRef";

const Home = () => {
	const { contextValue } = useContext(someContext);

	return (
		<div>
			<HookUseState />
			<HookUseReducer />
			<HookUseEffect />
			<h2>Use Context</h2>
			<p>Valor do contexto: {contextValue} </p>
			<hr />
			<HookUseRef />
			<HookUseCallback />
		</div>
	);
};

export default Home;
