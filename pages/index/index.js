//index.js
//获取应用实例
const app = getApp();

Page({
  data: {},
  onLoad: function () {},
    onShow: function () {
        app.setNbt('all');

       
     
    },
  goContactus: function () {
    app.goContactus();
  },
  onHide: function () {

  },
  onUnload: function () {

  },
      goSbzc: function () {
    app.goSbzc();

           
  },
    goGxrd: function () {
    app.goGxrd();
  },
      goMoredGxrd: function () {
       
        app.goMoreList('gqrd');
  },
       goMoredSbzc: function () {
       
        app.goMoreList('sbzc');
  },
  onShareAppMessage: function () {
    return {
      title: '山西景铭科技有限公司',
      path: '/pages/index/index'
    };
  }

});
