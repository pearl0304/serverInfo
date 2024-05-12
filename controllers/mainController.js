import { Main } from '../models/main.js';
import getErrorMessage from '../errorMessage.js';

export const getMainPage = async (req, res) => {
  try {
    const siteInfo = await Main.getPageInfo();
    res.render('main', { siteInfo });
  } catch (e) {
    const { status, message } = getErrorMessage('100');
    res.status(status).json({ message });
  }
};
