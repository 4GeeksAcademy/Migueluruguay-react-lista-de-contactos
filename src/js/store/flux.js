const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [] // Aquí se almacenarán los contactos
		},
		actions: {
			loadContacts: () => {
				// Cargar contactos desde la API
				fetch("https://playground.4geeks.com/contact/agendas/migueluruguay", {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					}
				})
					.then(response => response.json())
					.then(data => setStore({ contacts: data }))
					.catch(error => console.error(error));
			},

			addContact: (contact) => {
				// Añadir contacto
				fetch("https://playground.4geeks.com/contact/agendas/migueluruguay", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(contact)
				})
					.then(response => response.json())
					.then(() => getActions().loadContacts()) // Recargar contactos después de añadir
					.catch(error => console.error(error));
			},

			deleteContact: (contactId) => {
				// Eliminar contacto
				fetch(`https://playground.4geeks.com/contact/agendas/migueluruguay/${contactId}`, {
					method: "DELETE"
				})
					.then(() => getActions().loadContacts()) // Recargar contactos después de eliminar
					.catch(error => console.error(error));
			}
		}
	};
};

export default getState;
