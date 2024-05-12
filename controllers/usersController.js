import { Users } from '../models/users.js';

export const getUsers = async (req, res) => {
  try {
    const users = await Users.getUsers();
    res.render('user/userList');
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: '🚨getUsers ERROR' });
  }
};

export const getOneUserById = async (req, res) => {
  try {
    const uid = req.params.uid;
    const user = await Users.getOneUserById(uid);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: '🚨getAllUsers ERROR' });

  }
};