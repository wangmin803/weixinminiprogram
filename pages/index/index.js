//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  onLoad: function () {
  },

  goContactus:function () {
    app.goContactus();
  },
  onShareAppMessage: function () {
    return {
      title: '山西景铭科技有限公司',
      path: '/pages/index/index'
    }
  }
})
