import data from '../databases/data.js';
import {  getUsers } from '../controllers/usersController.js';

export const Users = {
  getUsers: async () => {
    try {
      const userList = [];
      return userList;
    } catch (e) {
      console.error(e.message);
      throw e;
    }
  },
  getOneUserById: async (uid) => {
    try {

    } catch (e) {
      throw e;
    }
  },
};
