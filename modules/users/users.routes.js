const express = require("express");
const router = express.Router();

const usersController = require("./users.controller");

router.get("/", usersController.getUsers);
router.get("/:id", usersController.getUser);
router.put("/:id", usersController.editUser);
router.delete("/:id", usersController.delUser);

router.post("/login", usersController.login);
router.post("/register", usersController.register);
//TODO: Mi ruta de logout me va a permitir destruir el token con redis.
/* router.get('/logout', usersController.logout); */
router.post("/refresh", usersController.refreshToken);

module.exports = router;
