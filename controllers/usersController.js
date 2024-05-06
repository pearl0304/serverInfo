import { Users } from '../models/users.js';

export const getAllUsers = async (req, res) => {
  try {
    const users = await Users.getAllUsers();
    res.json(users);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: '🚨getAllUsers ERROR' });
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