// pages/contactus/contactus.js


      const app = getApp();
Page({
  callPhone: function () {
    wx.makePhoneCall({
      phoneNumber: "15935154726"
    });
  }, onShow: function () {
    wx.getStorage({
      key: "contactus_bottom",
      success: function (res) {
        if (res.data == "1") {
          wx.pageScrollTo({
            scrollTop: 800
          });
          wx.removeStorage({ key: "contactus_bottom" });
        }
      }
    });

        app.setNbt('all');

    

  },
  onShareAppMessage: function () {
    return {
      title: '山西景铭科技有限公司',
      path: '/pages/contactus/contactus'
    };
  }, addPhone: function () {
    wx.addPhoneContact({
      firstName: '王经理', //联系人姓名 
      weChatNumber: "mumengmeng",
      mobilePhoneNumber: '13835016858', //联系人手机号  
      addressState: "山西省",
      addressCity: "山西省太原市",
      addressStreet: "小店区国药大厦8层",
      organization: "山西景铭科技有限公司",
      email: "22982728@qq.com",
      title: "总经理"
    });
  }
});
