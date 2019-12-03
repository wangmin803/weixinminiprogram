
var util = require('../../utils/util.js');
var network_util = require('../../utils/network_util.js');
var json_util = require('../../utils/json_util.js');
const app = getApp();
let type;
let a=0;
Page({
  data: {
    page: 0,
    size: 10,
    loading: false,
    allloaded: false,
    list: []
  },


  onLoad: function (options) {
      console.log(options.type);
      type=options.type;
  },
  
  onShow() {
    this.getList();
  
  },
  onUnload: function () {
       
    wx.switchTab({
            url: '/pages/gxrd/gxrd'
        });
  },
  onHide:function () {
   
      if(a==1){
      }else{
          wx.switchTab({
              url: '/pages/gxrd/gxrd'
          });
      }

  },
  
      goDetail: function (e) {
        console.log(e.currentTarget.dataset.id);
  app.goDetail(e.currentTarget.dataset.id);
a=1;

  },




  // 加载更多
  loadmore({
    detail
  }) {
    this.getList().then(res => {
      detail.success();
    });
  },
  // 刷新
  refresh({
    detail
  }) {
    this.setData({
      list: [],
      loading: false,
      allloaded: false,
      page: 0
    });
    this.getList().then(res => {
      detail.success();
    });
  },
  getList() {
    return new Promise((resolve, reject) => {
      if (this.data.loading || this.data.allloaded) {
        resolve();
        return;
      }
      this.setData({
        loading: true
      });
      setTimeout(() => {
  

 let map = new Map();
    // map.set('username','13261570828');
    // map.set('password','123456');
    // map.set('orgid','0010000');0010000022464

    let d = json_util.mapToJson(util.tokenAndKo(map));
  
     var url1 = 'https://www.jzn360.com/Manage/News/table.do?limit=12&channelCode='+type+'&page='+this.data.page; 
     
     var that= this;
     let addList ="";
     let newList ="";
    network_util._post(url1, d, function (res) {
    addList= res.data.data;
    newList = that.data.list.concat(addList);

  if (addList.length < that.data.size) {
          that.setData({
            allloaded: true
          });
        }
            
        that.setData({
          list: newList,
          loading: false,
          page: that.data.page + 1
        });


    }, function (res) {
      console.log(res);
    });


        //let addList = resData.slice(this.data.size * this.data.page, (this.data.page + 1) * this.data.size);
  // let newList = this.data.list.concat(addList);
      
        resolve();
      }, 500);
    });
  }
});