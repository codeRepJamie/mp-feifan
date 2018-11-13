const cloud = require('wx-server-sdk')
// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event);
  console.log(context);

  let {OPENID, APPID, UNIONID} = cloud.getWXContext()

  return {
    OPENID,
    APPID,
    UNIONID,
    openid: event.userInfo.openId,
  }
}
