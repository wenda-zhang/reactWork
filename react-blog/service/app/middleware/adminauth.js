module.exports = options => {
    return async function adminauth (ctx, next) {
        console.log(ctx.session.openid);
        if(ctx.session.openid) {
            await next();
        } else {
            ctx.body={
                data: '没有登录'
            }
        }
    }
}