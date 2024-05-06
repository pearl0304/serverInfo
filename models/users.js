import data from '../databases/data.js';
import { getAllUsers } from '../controllers/usersController.js';

export const Users = {
  getAllUsers: async () => {
    try {
      return data;
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
