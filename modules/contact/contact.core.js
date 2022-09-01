const contactRepository = require('./contact.repository');


const contactCore = {

    getContacts: async () => {
        let contacts = contactRepository.getContacts();
        return contacts;
    },

    getContact: async () => {
        let contact = await contactRepository.getContact();
        return contact;
    },
    createContact: async (contact) => {
        let contactCreated = await contactRepository.createContact(contact);
        return contactCreated;
    },

    editContact: async (contact, id) => {
        let contactEdited = await contactRepository.editContact(contact,id);
        return contactEdited;
    },

    delContact: async (id) => {
        let delContact = await contactRepository.delContact(id);
        return delContact;
    }
}

module.exports = contactCore;