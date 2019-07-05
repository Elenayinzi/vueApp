function m2(ctx){
    global.console.log('m2');
}

module.exports = function(){
    return async function(ctx,next){
        global.console.log('m2 start');
        m2(ctx);
        await next(); //当前中间件执行完成，执行下一个中间件
        global.console.log('m2 end');
    }
}