export default {
<<<<<<< HEAD
  dbs:'mongodb://127.0.0.1:27017/student',
  redis:{
    get host(){
      return '127.0.0.1'
    },
    get port(){
      return 6379
    }
  },
  smtp:{
    get host(){
      return 'smtp.qq.com'
    },
    get user(){
      return '303985419@qq.com'
    },
    get pass(){
      return 'kpzkptgwhkpwcadh'
    },
    get code(){
      return ()=>{
        return Math.random().toString(16).slice(2,6).toUpperCase()
      }
    },
    get expire(){
      return ()=>{
        return new Date().getTime()+60*60*1000
      }
    }
  }
}
=======
    dbs: 'mongodb://127.0.0.1.27017/student',
    redis: {
        get host(){
            return '127.0.0.1'
        },
        get port(){
            return 6379
        }
    },
    smtp: {
        get host(){
            return 'smtp.163.com'
        },
        get user(){
            return '13827469027@163.com'
        },
        get pass(){
            return 'lgply0927'
        }
    },
    get code(){
        return ()=>{
            return Math.random().toString(16).slice(2,6).toUpperCase()
        }
    },
    get expire(){
        return ()=>{
            return new Date().getTime() + 60*60*1000
        }
    }
}
>>>>>>> d7c14dbbdf6be22a18e45e938bf814458e27ddbf
