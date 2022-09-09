const Model = require("../../models/");

const contactRepository = {
  getContacts: async () => {
    const contacts = Model.Contact.findAll();
    return contacts;
  },

  getContact: async (id) => {
    const contact = await Model.Contact.findOne({ where: {id} });
    return contact;
  },

  createContact: async (contact) => {
    const contactCreated = await Model.Contact.create(contact);
    return contactCreated;
  },

  editContact: async (contact, id) => {
    const contactEdited = await Model.Contact.findOne({id});
    if (contactEdited) return Model.Contact.update(contact, { where: id });
  },

  delContact: async (id) => {
    const delContact = await Model.Contact.destroy({ where:  {id} });
    return delContact;
  },
};

module.exports = contactRepository;
