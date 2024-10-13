const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			loadContacts: async () => {
				const response = await fetch('/agendas/your-agenda-slug/contacts'); // Reemplaza 'your-agenda-slug'
				const data = await response.json();
				setStore({ contacts: data.contacts });
			},
			addContact: async (contact) => {
				const response = await fetch('/agendas/your-agenda-slug/contacts', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(contact),
				});
				if (response.ok) {
					getActions().loadContacts(); // Recargar contactos
				}
			},
			deleteContact: async (contactId) => {
				await fetch(`/agendas/your-agenda-slug/contacts/${contactId}`, { method: 'DELETE' });
				getActions().loadContacts(); // Recargar contactos
			}
		}
	};
};

export default getState;
