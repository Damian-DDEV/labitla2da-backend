const contactRepository = require('./contact.repository');


const contactCore = {

    getContacts: async () => {
        const contacts = contactRepository.getContacts();
        return contacts;
    },

    getContact: async (id) => {
        const contact = await contactRepository.getContact(id);
        return contact;
    },
    createContact: async (contact) => {
        const contactCreated = await contactRepository.createContact(contact);
        return contactCreated;
    },

    editContact: async (contact, id) => {
        const contactEdited = await contactRepository.editContact(contact,id);
        return contactEdited;
    },

    delContact: async (id) => {
        const delContact = await contactRepository.delContact(id);
        return delContact;
    }
}

module.exports = contactCore;