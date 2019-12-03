var md5 = require('./md5.js');
const formatTime = date => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
};

function getNowFormatDate() {
  var date = new Date();
  var seperator1 = "-";
  var seperator2 = ":";
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate;
  }
  var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + " " + date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds();
  return currentdate;
}
const formatNumber = n => {
  n = n.toString();
  return n[1] ? n : '0' + n;
};


//获取Token
function getToken(time) {
  var token = time + getPswId();
  console.log(token);
  return md5.hex_md5(token);
}

function getKo() {
  return '0000';
}

function getTime() {
  return getNowFormatDate();
}

function getPswId() {
  return '0010000app';
}

function tokenAndKo(map) {
  let time = getTime();
  map.set('ko', getKo());
  map.set('time', time);
  map.set('token', getToken(time));
  return map;
}

module.exports = {
  formatTime: formatTime,
    getToken: getToken,
  getKo: getKo,
  getTime: getTime,
  getPswId, getPswId,
  tokenAndKo, tokenAndKo
};