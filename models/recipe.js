import data from '../databases/data.js';

export const Recipe = {
  getAllRecipes: async () => {
    try {
      return data;
    } catch (e) {
      console.error(e.message);
      throw e;
    }
  },
};
