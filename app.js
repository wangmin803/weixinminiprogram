//app.js
var util = require('./utils/util.js');
var network_util = require('./utils/network_util.js');
var json_util = require('./utils/json_util.js');
App({
 
  
 
  onLaunch: function () {   },

  onShow: function () {

       

 

   
    },

  goContactus: function () {
     wx.switchTab({
          url: '../contactus/contactus'
        });

  },

  goSbzc: function () {
       wx.switchTab({
          url: '../sbzc/sbzc'
        });
  },


   goGxrd: function () {
      wx.switchTab({
          url: '../gxrd/gxrd'
        });
  },


        goMoreList: function (type) {
          
               wx.navigateTo({
                        url: '../gxrdlist/gxrdlist?type='+type
                    });``
        
       
  },
     setNbt: function (type) {
                if(type=='gqrd'){
                            wx.setNavigationBarTitle({
                                title: "山西高新技术企业认定,太原高企认证"
                            })
                    }
                        else if(type=='sbzc'){
                            wx.setNavigationBarTitle({
                                title: "山西商标注册,太原商标注册"
                            })
                    }
                        else if(type=='rjzzq'){
                            wx.setNavigationBarTitle({
                                title: "山西软件著作权,太原软件著作权,软件著作权申请,软件著作权办理"
                            })
                    }   else if(type=='all'){
                            wx.setNavigationBarTitle({
                                title: "山西高新技术企业认定,太原软件著作权,商标注册"
                            })
                    }
                    
                    else {
                            wx.setNavigationBarTitle({
                                title: "山西软件著作权,太原软件著作权,软件著作权申请,软件著作权办理"
                            })
                    }

     }


});
