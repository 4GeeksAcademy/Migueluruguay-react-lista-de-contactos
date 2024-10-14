const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [] // Almacenará los contactos que se obtendrán de la API
        },
        actions: {
            // Función para cargar contactos desde la API
            loadContacts: async (agendaSlug) => {
                try {
                    const response = await fetch(`/agendas/${agendaSlug}/contacts`);
                    const data = await response.json();
                    setStore({ contacts: data });
                } catch (error) {
                    console.error("Error cargando contactos:", error);
                }
            },

            // Función para agregar un nuevo contacto
            addContact: async (agendaSlug, contactData) => {
                try {
                    const response = await fetch(`/agendas/${agendaSlug}/contacts`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(contactData)
                    });
                    if (response.ok) {
                        getActions().loadContacts(agendaSlug); // Recargar contactos después de agregar
                    }
                } catch (error) {
                    console.error("Error agregando contacto:", error);
                }
            },

            // Función para eliminar un contacto
            deleteContact: async (agendaSlug, contactId) => {
                try {
                    const response = await fetch(`/agendas/${agendaSlug}/contacts/${contactId}`, {
                        method: 'DELETE'
                    });
                    if (response.ok) {
                        getActions().loadContacts(agendaSlug); // Recargar contactos después de eliminar
                    }
                } catch (error) {
                    console.error("Error eliminando contacto:", error);
                }
            }
        }
    };
};

export default getState;
