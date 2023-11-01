import UserDao from "../data/UserDao.js";

class UserService {
  constructor() {
    this.userDao = new UserDao();
  }

  async getUserData(id) {
    const user = await this.userDao.getUserData(id);
    return user;
  }

  async getAllUsers() {
    const users = await this.userDao.getAllUsers();
    return users;
  }
}

export default UserService;
