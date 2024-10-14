import React, { useContext, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [newContact, setNewContact] = useState({ full_name: "", email: "", agenda_slug: "your-agenda" });

	const handleAddContact = () => {
		actions.addContact(newContact); // Llamada para añadir contacto
		setNewContact({ full_name: "", email: "", agenda_slug: "your-agenda" });
	};

	return (
		<div className="text-center mt-5">
			<h1>Lista de Contactos</h1>

			{/* Formulario para añadir contacto */}
			<div>
				<input 
					type="text"
					placeholder="Nombre completo"
					value={newContact.full_name}
					onChange={e => setNewContact({ ...newContact, full_name: e.target.value })}
				/>
				<input 
					type="email"
					placeholder="Correo electrónico"
					value={newContact.email}
					onChange={e => setNewContact({ ...newContact, email: e.target.value })}
				/>
				<button onClick={handleAddContact} className="btn btn-success">Añadir Contacto</button>
			</div>

			{/* Mostrar contactos */}
			<ul>
				{store.contacts.map((contact, index) => (
					<li key={index}>
						{contact.full_name} - {contact.email}
						<button onClick={() => actions.deleteContact(contact.id)} className="btn btn-danger">Eliminar</button>
					</li>
				))}
			</ul>
		</div>
	);
};
