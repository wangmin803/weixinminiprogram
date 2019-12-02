const app = getApp()
Page({
  data: {
  },
  onLoad: function () {

  },
  goContactus:function(){
    app.goContactus();
  },
  onShareAppMessage: function () {
    return {
      title: '解读OMO线上融合线下',
      path: '/pages/omo/omo'
    }
  }
})
