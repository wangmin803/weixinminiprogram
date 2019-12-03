
var util = require('../../utils/util.js');
var network_util = require('../../utils/network_util.js');
var json_util = require('../../utils/json_util.js');
Page({
    data: {
    id: "",
    title:  "",
    publishDateString:  "",
    newsContent:  ""
  }, 

  /**

   * 生命周期函数--监听页面加载

   */

  onLoad: function (options) {

    let id=options.id;    
    let map = new Map();
    map.set('id',id);
    let d = json_util.mapToJson(util.tokenAndKo(map));
    var url1 = 'https://www.jzn360.com/getnews.do?id='+id; 
    var that= this;
    network_util._post(url1, d, function (res) {
    that.setData({      
    //把引入的数据根据下标对应放到detailObj中
      id:res.data.data.id,
      title:res.data.data.newsName,
      publishDateString:  res.data.data.publishDateString.substring(0,12),
      newsContent: res.data.data.newsContent,
    })

    }, function (res) {
      console.log(res);
    });

  },
    onReady: function() {
        // 监听页面初次渲染完成的生命周期函数
    },
    onShow: function() {
        // 监听页面显示的生命周期函数
    },
    onHide: function() {
        // 监听页面隐藏的生命周期函数
    },
    onUnload: function() {
        // 监听页面卸载的生命周期函数
    },
    onPullDownRefresh: function() {
        // 监听用户下拉动作
    },
    onReachBottom: function() {
        // 页面上拉触底事件的处理函数
    },
    onShareAppMessage: function () {
        // 用户点击右上角转发
    }
});