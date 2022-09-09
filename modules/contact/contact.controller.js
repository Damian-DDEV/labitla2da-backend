const contactCore = require("./contact.core");

const contactController = {
  getContacts: async (req, res, next) => {
    try {
      const getContacts = await contactCore.getContacts();
      if (getContacts) return res.status(200).send(getContacts);
      else return res.status(404).send(`Messages not found`);
    } catch (error) {
      return next(error);
    }
  },

  getContact: async (req, res, next) => {
    const id = req.params.id;
    try {
      const getContact = await contactCore.getContact(id);
      if (getContact) return res.status(200).send(getContact);
      else return res.status(404).send(`Messages not found`);
    } catch (error) {
      return next(error);
    }
  },

  createContact: async (req,res,next) => {
    const contact = req.body;
    try {
        const createContact = await contactCore.createContact(contact);
        return res.status(201).send(createContact);
    } catch (error) {
        return next(error);
    }
  },

  editContact: async (req, res, next) => {
    const contact = req.body;
    const id = req.params;
    try {
      const contactEdited = await contactCore.editContact(contact,id);
      //TODO: Si es ta eliminado y lo quiero editar devuelve 0, es decir no l oedita.
      if (contactEdited) return res.status(200).send(`The contact was successfully modified`);
      else return res.status(404).send(`Messages not found`);
    } catch (error) {
      return next(error);
    }
  },

  delContact: async (req, res, next) => {
    const id = req.params;
    try {
      const delContact = await contactCore.delContact(id);
      if (delContact) return res.status(200).send(delContact);
      else return res.status(404).send(`Message successfully removed`)
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = contactController;
