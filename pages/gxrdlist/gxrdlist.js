
var util = require('../../utils/util.js');
var network_util = require('../../utils/network_util.js');
var json_util = require('../../utils/json_util.js');
const app = getApp();

    let type="";
Page({
    data: {
        page: 0,
        size: 10,
        loading: false,
        allloaded: false,
        code: "123",
        list: [],
        msg: "123"

    },

    onLoad: function (options) {
        console.log(options.type);
        type = options.type;
        console.log("aaaaaa"+type);
      
           
    },

    onShow() {
        app.setNbt(type);
     
      

        this.getList();
        
        
     

    },
 

    goDetail: function (e) {

        if(e.currentTarget.dataset.channel=='ruanzhujiaji'||e.currentTarget.dataset.channel=='ruanzhushenqing'||e.currentTarget.dataset.channel=='ruanzhudaiban'||e.currentTarget.dataset.channel=='ruanzhubanli'){
            wx.navigateTo({
                url: '../detail/' + e.currentTarget.dataset.channel + '/'+ e.currentTarget.dataset.channel+'?id=' + e.currentTarget.dataset.id
            });

        }else{
            wx.navigateTo({
                url: '../detail/' + e.currentTarget.dataset.channel + 'detail?id=' + e.currentTarget.dataset.id
            });
        }


     
      









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

                var url1 = 'https://www.jzn360.com/Manage/News/table1.do?limit=12&channelCode=' + type + '&page=' + this.data.page;
                var that = this;
                let addList = "";
                let newList = "";
                network_util._post(url1, d, function (res) {
                    addList = res.data.data;

                    console.log(res.data.msg);

                    newList = that.data.list.concat(addList);
                    if (addList.length < that.data.size) {
                        that.setData({
                            code: res.data.code,
                            msg: res.data.msg,
                            allloaded: true
                        });
                    }

                    that.setData({
                        code: res.data.code,
                        msg: res.data.msg,
                        list: newList,
                        loading: false,
                        page: that.data.page + 1,

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
