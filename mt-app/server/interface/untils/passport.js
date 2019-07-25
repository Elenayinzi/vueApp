import passport from 'koa-passport'
import LocalStrategy from 'passport-local'
import UserModel from '../../dbs/models/users'

passport.use(new LocalStrategy(function(username,password,done){
    let where = {
        username
    };
    let result = await UserModel.findOne(where);
    if(result != null){
        if(result.password === password){
            return done(null,result)
        }else{
            return done(null,false,'密码错误')
        }
    }else{
        return done(null,false,'用户不存在')
    }
}))

passport.serializeUser(function(user,done){
    done(null,user)     //序列化，每次登录成功把用户数据存储到session中
})

passport.deserializeUser(function(user,done){
    return done(null,user)  //反序列化，每次登录去session中查用户数据
})

export default passport