const Model = require("../../models/");

const contactRepository = {
  getContacts: async () => {
    let contacts = Model.Contact.findAll();
    return contacts;
  },

  getContact: async (id) => {
    let contact = await Model.Contact.findOne({ where: { id } });
    return contact;
  },

  createContact: async (contact) => {
    let contactCreated = await Model.Contact.create(contact);
    return contactCreated;
  },

  editContact: async (contact, id) => {
    let contactEdited = await Model.Contact.findOne(id);
    if (contactEdited) return Model.Contact.update(contact, { where: id });
  },

  delContact: async (id) => {
    let delContact = await Model.Contact.destroy({where: id});
    return delContact;
  },
};

module.exports = contactRepository;
