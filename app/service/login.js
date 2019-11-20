module.exports = app => {
  class loginService extends app.Service {
    * getLoginInfo({ name, password }) {
      const result = yield this.app.mysql.get('user', { userid: name });
      return result;
    }

    * getToken({ name, password }) {
      if(name && password){
        const token = app.jwt.sign({ name,password }, app.config.jwt.secret,{expiresIn:'24h'});
        /*
        * sign({根据什么生成token})
        * app.config.jwt.secret 配置的密钥
        * {expiresIn:'24h'} 过期时间
        */
        return token
      }
    }
    
    * addUser(params) {
      const result = yield this.app.mysql.insert('user', params);
     	return result;
    }
  }
  return loginService;
};
