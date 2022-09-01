const express = require('express');
const router = express.Router();

const contactController = require('./contact.controller');
router.get('/', contactController.getContacts);
router.get('/:id', contactController.getContact);
router.post('/', contactController.createContact);
router.put('/:id', contactController.editContact);
router.delete('/:id', contactController.delContact);


module.exports = router;
