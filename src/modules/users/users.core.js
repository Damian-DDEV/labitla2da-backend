const UsersRepository = require("./users.repository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AuthJWT = require("../../config/jwt");

const userCore = {
  async getUsers() {
    const users = await UsersRepository.getUsers();
    return users;
  },

  async getUser(id) {
    const user = await UsersRepository.getUser(id);
    return user;
  },

  async editUser(id, user) {
    user.password = bcrypt.hashSync(user.password, 10);
    const edituser = await UsersRepository.editUser(id, user);
    return edituser;
  },

  async delUser(id) {
    const deluser = await UsersRepository.delUser(id);
    return deluser;
  },

  async login(usernPass) {
    const userLogin = await UsersRepository.login(usernPass);
    let userToJson = userLogin.toJSON();

    if (userToJson) {
      /*             usernPass.password = bcrypt.hashSync(usernPass.password, 10);
            console.log(usernPass);
            console.log(userToJson.password) */

      //Comparamos la password que viene desde la petición con la que devuelve la base de datos, si esto da true tenemos un login exitoso.
      let PassMatch = bcrypt.compareSync(
        usernPass.password,
        userToJson.password
      );
      if (PassMatch) {
        userToJson.jwt = jwt.sign({ id_user: userToJson.id }, AuthJWT.secret, {
          expiresIn: AuthJWT.expires,
        });

        delete userToJson.password;

        return userToJson;
      } else {
        console.log("Contraseña incorrecta");
      }
    } else {
      console.log(`El usuario no existe`);
    }
  },

  async register(user) {
    //Hasheo la clave utilizando bcrypt, para esto utilizo la funcion hashSync, enviandole la pass y la cantidad de "Rounds"
    user.password = bcrypt.hashSync(user.password, 10);
    const newuser = await UsersRepository.register(user);
    return newuser;
  },

  async refresh(token) {
    //TODO: FALTA HANDLING DE INVALID TOKEN
    let verifyToken = jwt.verify(token, AuthJWT.refresh);
    let { id_user } = verifyToken;
    let getUser = await UsersRepository.refresh(id_user);
    if (getUser) {
      return jwt.sign({ id_user: id_user }, AuthJWT.secret, {
        expiresIn: AuthJWT.expires,
      });
    }
  },
};

module.exports = userCore;
