const contactCore = require("./contact.core");

let contactController = {
  getContacts: async (req, res, next) => {
    try {
      let getContacts = await contactCore.getContacts();
      return res.status(200).send(getContacts);
    } catch (error) {
      return next(error);
    }
  },

  getContact: async (req, res, next) => {
    try {
      let getContact = await contactCore.getContact();
      return res.status(200).send(getContact);
    } catch (error) {
      return next(error);
    }
  },

  createContact: async (req,res,next) => {
    let contact = req.body;
    try {
        let createContact = await contactCore.createContact(contact);
        return res.status(201).send(createContact);
    } catch (error) {
        return next(error);
    }
  },

  editContact: async (req, res, next) => {
    try {
      let editContact = await contactCore.editContact();
      return res.status(200).send(editContact);
    } catch (error) {
      return next(error);
    }
  },

  delContact: async (req, res, next) => {
    try {
      let delContact = await contactCore.delContact();
      return res.status(200).send(delContact);
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = contactController;
