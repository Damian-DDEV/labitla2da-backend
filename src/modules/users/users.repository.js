const Model = require("../../models");

Model.Users.addScope("list", {
  attributes: ["id", "firstname", "lastname", "email", "dni", "rol"],
});

const UsersRepository = {
  async getUsers() {
    return await Model.Users.scope("list").findAll();
  },

  async getUser(id) {
    return await Model.Users.scope("list").findOne({ where: { id } });
  },

  async editUser(id, user) {
    //TODO: SI ES UNDEFINED LA BUSQUEDA... DEVUELVE ALGO?
    let getUsr = await Model.Users.findOne(id);
    if (getUsr) return await Model.Users.update(user, { where: id });
  },

  async delUser(id) {
    return await Model.Users.destroy({ where: id });
  },

  async login(usernPass) {
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
    return await getUsr;
  },

  async register(user) {
    return await Model.Users.scope("list").create(user);
  },

  async refresh(user) {
    return await Model.Users.scope("list").findOne({ where: { id: user } });
  },
};

module.exports = UsersRepository;
