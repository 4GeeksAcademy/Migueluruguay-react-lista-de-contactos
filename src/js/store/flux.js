const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [], // Aquí se almacenarán los contactos
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadContacts: () => {
				// Cargar contactos desde la API
				fetch("https://playground.4geeks.com/contact/agendas/migueluruguay", {
					method: 'GET',
					headers: { 'Content-Type': 'application/json' }
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
				fetch(`https://playground.4geeks.com/contact/agendas/migueluruguay?${contactId}`, {
					method: "DELETE"
				})
					.then(() => getActions().loadContacts()) // Recargar contactos después de eliminar
					.catch(error => console.error(error));
			},

			changeColor: (index, color) => {
				const store = getStore();
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
