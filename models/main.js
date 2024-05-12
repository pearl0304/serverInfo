export const Main = {
  getPageInfo: async () => {
    try {
      //TODO :: 디비에서 사이트 정보 가져오기
      const siteInfo = {
        title: 'main',
        href: 'styles/main.css',
        src: 'js/main.js',
      };
      return siteInfo;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
  getGnbInfo: async () => {
    try {
      const gnb = [
        { idx: 1, title: '서버정보', subMenu: [] },
        { idx: 2, title: '사이트정보', subMenu: [] },

      ];
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
};