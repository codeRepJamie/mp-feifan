const TcbRouter = require('tcb-router');
const index = require('./index/index');

exports.main = (event, context) => {
  const app = new TcbRouter({event});

  app.use(async (ctx, next) => {
    ctx.data = {};
    await next();
  });

  app.router('/index/getNewsList', index.getNewsList)

  return app.serve();
}
