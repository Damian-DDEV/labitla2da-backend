const Model = require("../../models");

Model.Users.addScope("list", {
  attributes: [
    "id",
    "firstname",
    "username",
    "lastname",
    "email",
    "dni",
    "rol",
  ],
});

const UsersRepository = {
  getUsers: async () => {
    return Model.Users.scope("list").findAll();
  },

  getUser: async (id) => {
    return Model.Users.scope("list").findOne({ where: { id } });
  },

  existUser: async (username) => {
    return Model.Users.scope("list").findOne({where: {username: username}})
  },

  exisEmail: async (email) => {
    return Model.Users.scope("list").findOne({where: {email: email}})
  },

  editUser: async (id, user) => {
    let getUsr = await Model.Users.findOne({ where: { id } });
    if (getUsr) return Model.Users.update(user, { where: { id } });
  },

  delUser: async (id) => {
    return Model.Users.destroy({ where: { id } });
  },

  login: async (usernPass) => {
    const { username } = usernPass;
    let getUsr = await Model.Users.scope("list").findOne({
      where: {
        username: username,
      },
      attributes: [
        "id",
        "firstname",
        "lastname",
        "email",
        "dni",
        "rol",
        "password",
      ],
    });
    return getUsr;
  },

  register: async (user) => {
    return Model.Users.scope("list").create(user);
  },

  refresh: async (user) => {
    return Model.Users.scope("list").findOne({ where: { id: user } });
  }
};

module.exports = UsersRepository;
