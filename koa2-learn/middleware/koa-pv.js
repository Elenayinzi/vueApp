function pv(ctx){
    global.console.log(ctx.path);
}

module.exports = function(){
    return async function(ctx,next){
        pv(ctx);
        await next(); //当前中间件执行完成，执行下一个中间件
    }
}