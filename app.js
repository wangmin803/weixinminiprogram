//app.js
App({
  globalData: {
    userInfo: null,
  },
  onLaunch: function () { },
  onShow: function () {

  

  },

  goContactus: function () {
    wx.setStorage({
      key: "contactus_bottom",
      data: "1",
      success: function () {
        wx.switchTab({
          url: '../contactus/contactus'
        });
      }
    });

  },

  goSbzc: function () {
    wx.setStorage({
      key: "sbzc_bottom",
      data: "2",
      success: function () {
        wx.switchTab({
          url: '../sbzc/sbzc'
        });
      }
    });
  },


  goGxrd: function () {
    wx.setStorage({
      key: "gxrd_bottom",
      data: "3",
      success: function () {
        wx.switchTab({
          url: '../gxrd/gxrd'
        });
      }
    });
  },
  goDetail: function (id) {



    wx.navigateTo({
      url: '../detail/detail?id=' + id
    });

  },

  goMoreList: function (type) {
    if (type == 'gxrd') {
      wx.navigateTo({
        url: '../gxrdlist/gxrdlist?type=gqrd'
      }); ``
    }
    if (type == 'sbzc') {
      wx.navigateTo({
        url: '../gxrdlist/gxrdlist?type=sbzc'
      }); ``
    }

  }




});