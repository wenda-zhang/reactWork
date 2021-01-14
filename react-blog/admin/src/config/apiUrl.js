let ipUrl = 'http://127.0.0.1:7002/admin/';

let servicePath = {
    checkLogin: ipUrl + 'checkLogin', //检查用户名和密码
    getTypeInfo: ipUrl + 'getTypeInfo', //获得文章类别信息

}

export default servicePath;