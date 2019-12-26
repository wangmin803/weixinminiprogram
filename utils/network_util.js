//import util from 'util.js';


/**
 * url 请求地址
 * success 成功的回调
 * fail 失败的回调
 */
function _get(url, success, fail) {

  console.log("------start---_get----");
  wx.request({
    url: url,
    header: {
      // 'Content-Type': 'application/json'
    },
    success: function (res) {
      success(res);
    },
    fail: function (res) {
      fail(res);
    }
  });

  console.log("----end-----_get----");
}

/**
 * url 请求地址
 * success 成功的回调
 * fail 失败的回调
 */
function _post(url, data, success, fail) {
  console.log("----_post--start-------");
  wx.request({
    url: url,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    data: { data: data },
    success: function (res) {
      success(res);
    },
    fail: function (res) {
    
      fail(res);
    }
  });
  console.log("----end-----_post----");
}

/**
 * url 请求地址
 * success 成功的回调
 * fail 失败的回调
 */
function _post1(url, data, success, fail) {
  console.log("----_post--start-------");
  wx.request({
    url: url,
    header: {
        'X-Requested-With':'X-Requested-With',
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    data: data,
    success: function (res) {
      success(res);
    },
    fail: function (res) {
        console.log(res);
      fail(res);
    }
  });
  console.log("----end-----_post----");
}

/**
* url 请求地址
* success 成功的回调
* fail 失败的回调
*/
function _post_json(url, data, success, fail) {
  console.log("----_post--start-------");
  wx.request({
    url: url,
    // header: {
    //     'content-type': 'application/json',
    // },
    method: 'POST',
    data: data,
    success: function (res) {
      success(res);
    },
    fail: function (res) {
      fail(res);
    }
  });

  console.log("----end----_post-----");
}
function _getnet(url,data) {
  return new Promise(function (resolve, reject) {
    wx.request({
      url: url,
    data: data,
      success: (res) => {
        let result = res.data.data;
        resolve(result) ;
      },
      fail:()=>{
        reject("系统异常，请重试！")
      }
    })
  })
   
}



module.exports = {
  _get: _get,
  _post: _post,
  _post1: _post1,
  _post_json: _post_json,
  _getnet: _getnet
};
