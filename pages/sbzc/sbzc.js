  const app = getApp();
Page({
    data: {

    },
    onLoad: function () {
        // 监听页面加载的生命周期函数
    },
    onReady: function() {
        // 监听页面初次渲染完成的生命周期函数
    },
    onHide: function() {
        // 监听页面初次渲染完成的生命周期函数
    },
     goContactus: function () {
    app.goContactus();
  },
    onShow: function() {
        // 监听页面显示的生命周期函数
              

        app.setNbt('sbzc');
    },
    
    goMoredSbzc: function () {
    app.goMoreList('sbzc');
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
