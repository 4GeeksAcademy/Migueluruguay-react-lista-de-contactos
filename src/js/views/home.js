import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const handleAddContact = () => {
		const newContact = { name: 'Nuevo contacto', phone: '123456789', email: 'contacto@example.com' };
		actions.addContact(newContact);
	};

	return (
		<div className="text-center mt-5">
			<h1>Lista de Contactos</h1>
			<button onClick={handleAddContact} className="btn btn-success">Añadir Contacto</button>
			<ul>
				{store.contacts.map((contact) => (
					<li key={contact.id}>
						{contact.name} - {contact.phone}
						<button onClick={() => actions.deleteContact(contact.id)}>Eliminar</button>
					</li>
				))}
			</ul>
		</div>
	);
};
