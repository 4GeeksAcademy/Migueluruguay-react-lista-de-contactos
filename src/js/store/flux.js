const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			loadContacts: async () => {
				const response = await fetch('https://playground.4geeks.com/contact'); const data = await response.json();
				setStore({ contacts: data.contacts });
			},
			addContact: async (contact) => {
				const response = await fetch('https://playground.4geeks.com/contact/agendas/', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(contact),
				});
				if (response.ok) {
					getActions().loadContacts(); // Recargar contactos
				}
			},
			deleteContact: async (contactId) => {
				await fetch(`https://playground.4geeks.com/contact/${contactId}`, { method: 'DELETE' });
				getActions().loadContacts(); // Recargar contactos
			}
		}
	};
};

export default getState;
