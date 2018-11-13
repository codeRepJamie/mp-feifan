const cloud = require('wx-server-sdk');

// 默认配置
cloud.init()

const db = cloud.database()

async function getNewsList () {
  return await db.collection('news_list').get()
}

exports.getNewsList = async (ctx) => {
  const {data} = await getNewsList();
  ctx.data.list = data;
  ctx.body = {code: 0, data: ctx.data};
};
