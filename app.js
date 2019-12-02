//app.js
App({
  onLaunch: function () {
  },
  goContactus: function () {
    wx.setStorage({
      key: "contactus_bottom",
      data: "1",
      success: function () {
        wx.switchTab({
          url: '../contactus/contactus',
        })
      }
    })
  },

  goSbzc: function () {
    swan.setStorage({
      key: "sbzc_bottom",
      data: "2",
      success: function () {
        swan.switchTab({
          url: '../sbzc/sbzc'
        });
      }
    });
  },
  goGxrd: function () {
    swan.setStorage({
      key: "gxrd_bottom",
      data: "3",
      success: function () {
        swan.switchTab({
          url: '../gxrd/gxrd'
        });
      }
    });
  }

})

