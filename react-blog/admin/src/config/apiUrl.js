let ipUrl = 'http://127.0.0.1:7001/admin/';

let servicePath = {
    checkLogin: ipUrl + 'checkLogin', //检查用户名和密码
    getTypeInfo: ipUrl + 'getTypeInfo', //获得文章类别信息
    addAtricle: ipUrl + 'addAtricle', //添加文章
    updateArticle: ipUrl + 'updateArticle', // 更新文章
    getArticleList: ipUrl + 'getArticleList', // 获取文章列表
}

export default servicePath;