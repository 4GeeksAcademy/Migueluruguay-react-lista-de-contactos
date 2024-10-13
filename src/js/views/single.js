import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Single = (props) => {
	const { store } = useContext(Context);
	const contactId = props.match.params.theid;
	const contact = store.contacts.find(contact => contact.id === parseInt(contactId));

	return (
		<div className="jumbotron">
			<h1 className="display-4">Detalles del contacto: {contact ? contact.name : "No encontrado"}</h1>
			{contact && (
				<>
					<p>Teléfono: {contact.phone}</p>
					<p>Email: {contact.email}</p>
				</>
			)}
			<a href="/" className="btn btn-primary btn-lg">Volver a la lista</a>
		</div>
	);
};
