const UsersRepository = require("./users.repository");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AuthJWT = require("../../config/jwt");

const userCore = {
  getUsers: async () => {
    const users = await UsersRepository.getUsers();
    return users;
  },

  getUser: async (id) => {
    const user = await UsersRepository.getUser(id);
    return user;
  },

  existUser: async (username) => {
    const existUser = await UsersRepository.existUser(username);
    return existUser;
  },

  exisEmail: async (email) => {
    const existEmail = await UsersRepository.exisEmail(email);
    return existEmail;
  },

  changePassword: async (passnid) => {
    const passwords = await UsersRepository.changePassword(passnid);
    
    const { password } = passwords.toJSON();
    
    const PassMatch = bcrypt.compareSync(
      passnid.old,
      password
    );

    if (PassMatch) {
      const passnidnew = {
        id: passnid.id,
        passnew: bcrypt.hashSync(passnid.new, 10)
      }
      await UsersRepository.savenewPass(passnidnew);
      return true;
    } else {
      return false;
    }
  },

  editUser: async (id, user) => {
    if (user.password){
      user.password = bcrypt.hashSync(user.password, 10);
    }
    const edituser = await UsersRepository.editUser(id, user);
    return edituser;
  },

  delUser: async (id) => {
    const deluser = await UsersRepository.delUser(id);
    return deluser;
  },

  login: async (usernPass) => {
    const userLogin = await UsersRepository.login(usernPass);
    if (userLogin){
      const userToJson = userLogin.toJSON();
      if (userToJson) {
        //Comparamos la password que viene desde la petición con la que devuelve la base de datos, si esto da true tenemos un login exitoso.
        const PassMatch = bcrypt.compareSync(
          usernPass.password,
          userToJson.password
        );
        if (PassMatch) {
          userToJson.jwt = jwt.sign({ id_user: userToJson.id, userDni: userToJson.dni }, AuthJWT.secret, {
            expiresIn: AuthJWT.expires,
          });
  
          delete userToJson.password;
  
          return userToJson;
        }
      }
    }

  },

  register: async (user) => {
    user.password = bcrypt.hashSync(user.password, 10);
    const newuser = await UsersRepository.register(user);
    return newuser;
  },

  refresh: async (token) => {
    const verifyToken = jwt.verify(token, AuthJWT.refresh);
    const { id_user } = verifyToken;
    const getUser = await UsersRepository.refresh(id_user);
    if (getUser) {
      return jwt.sign({ id_user: id_user }, AuthJWT.secret, {
        expiresIn: AuthJWT.expires,
      });
    }
  },
};

module.exports = userCore;
