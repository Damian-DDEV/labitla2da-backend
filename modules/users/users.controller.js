const userCore = require("./users.core");

const usersController = {
  getUsers: async (req, res, next) => {
    try {
      const getUsers = await userCore.getUsers();
      if (getUsers) return res.status(200).send(getUsers);
      else return res.status(404).send(`No users found`);
    } catch (error) {
      return next(error);
    }
  },

  getUser: async (req, res, next) => {
    const id = req.params;
    try {
      const getUser = await userCore.getUser(id);
      if (getUser) return res.status(200).send(getUser);
      else return res.status(404).send(`The user does not exist`);
    } catch (error) {
      return next(error);
    }
  },

  existUser: async (req, res, next) => {
    const { username } = req.body;
    try {
      const existUser = await userCore.existUser(username);
      if (existUser) return res.status(200).send(true);
      else return res.status(404).send(false);
    } catch (error) {
      return next(error);
    }
  },

  existEmail: async (req, res, next) => {
    const { email } = req.body;
    try {
      const exisEmail = await userCore.exisEmail(email)
      if (exisEmail) return res.status(200).send(true);
      else return res.status(404).send(false);
    } catch (error) {
      return next(error);
    }
  },

  changePassword: async (req, res, next) => {
    const passnid = req.body;
    try {
      const pass = await userCore.changePassword(passnid);
      if(pass) return res.status(200).send(`Password has been changed successfully`);
      else res.status(400).send(`The password is not the same`)
    } catch (error) {
      return next(error);
    }
  },

  editUser: async (req, res, next) => {
    const id = req.params;
    const user = req.body;
    try {
      const userEdited = await userCore.editUser(id, user);
      if (userEdited)
        return res
          .status(200)
          .send(`The name ${user.username} has been successfully modified`);
      else return res.status(404).send(`The user does not exist`);
    } catch (error) {
      return next(error);
    }
  },

  delUser: async (req, res, next) => {
    const id = req.params.id;
    try {
      const delUser = await userCore.delUser(id);
      if (delUser)
        return res
          .status(200)
          .send(`User ${delUser}, was successfully eliminated`);
      else return res.status(404).send(`The user does not exist`);
    } catch (error) {
      return next(error);
    }
  },

  login: async (req, res, next) => {
    const body = req.body;
    try {
      const user = await userCore.login(body);
      if (user) return res.status(200).send({ data: user });
      else return res.status(404).send(`The user or password is not correct`);
    } catch (error) {
      return next(error);
    }
  },

  register: async (req, res, next) => {
    const user = req.body;
    try {
      await userCore.register(user);
      return res
        .status(201)
        .send({ msg: `User ${user.username} was successfully created` });
    } catch (error) {
      return next(error);
    }
  },

  refreshToken: async (req, res, next) => {
    const token = req.headers["token"];
    try {
      const refToken = await userCore.refresh(token);
      if (!refToken) {
        return res.status(404).json({ msg: "Invalid token" });
      }
      return res.status(200).send(refToken);
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = usersController;
