import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1>Lista de Contactos</h1>
			<ul className="list-group">
				{store.contacts.map((contact, index) => (
					<li key={index} className="list-group-item d-flex justify-content-between">
						<Link to={`/single/${contact.id}`}>
							<span>{contact.name}</span>
						</Link>
						<button className="btn btn-danger" onClick={() => actions.deleteContact(contact.id)}>
							Eliminar
						</button>
					</li>
				))}
			</ul>
			<br />
			<Link to="/add-contact">
				<button className="btn btn-primary">Añadir Contacto</button>
			</Link>
		</div>
	);
};
