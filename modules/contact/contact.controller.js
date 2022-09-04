const contactCore = require("./contact.core");

let contactController = {
  getContacts: async (req, res, next) => {
    try {
      let getContacts = await contactCore.getContacts();
      if (getContacts) return res.status(200).send(getContacts);
      else return res.status(404).send(`Messages not found`);
    } catch (error) {
      return next(error);
    }
  },

  getContact: async (req, res, next) => {
    try {
      let getContact = await contactCore.getContact();
      if (getContact) return res.status(200).send(getContact);
      else return res.status(404).send(`Messages not found`);
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
    let contact = req.body;
    let id = req.params;
    try {
      let contactEdited = await contactCore.editContact(contact,id);
      if (contactEdited) return res.status(200).send(`The contact was successfully modified`);
      else return res.status(404).send(`Messages not found`);
    } catch (error) {
      return next(error);
    }
  },

  delContact: async (req, res, next) => {
    let id = req.params;
    try {
      let delContact = await contactCore.delContact(id);
      if (delContact) return res.status(200).send(delContact);
      else return res.status(404).send(`Message successfully removed`)
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = contactController;
