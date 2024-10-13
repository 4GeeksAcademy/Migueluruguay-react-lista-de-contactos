import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Inicializamos nuestro contexto
export const Context = React.createContext(null);

const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: { ...state.store, ...updatedStore },
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			state.actions.loadContacts(); // Cargar contactos al iniciar
		}, []);

		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
