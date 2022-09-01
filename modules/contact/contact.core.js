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
    createContact: async () => {
        let createContact = await contactRepository.createContact();
        return movieCreated;
    },

    editContact: async (contact) => {
        let contactEdited = await contactRepository.editMovie(contact);
        return contactEdited;
    },

    delContact: async () => {
        let delContact = await contactRepository.delContact();
        return delContact;
    }
}

module.exports = contactCore;