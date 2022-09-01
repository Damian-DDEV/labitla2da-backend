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

  createMovie: async () => {
    let movieCreated = await Model.Contact.create();
    return movieCreated;
  },

  editCotnact: async (id, contact) => {
    let editContact = await Model.Contact.editMovie();
    return editMovie;
  },

  delContact: async (id) => {
    let delContact = await Model.Contact.delMovie();
    return delContact;
  },
};

module.exports = contactRepository;
