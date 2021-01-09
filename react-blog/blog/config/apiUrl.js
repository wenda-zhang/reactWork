let ipUrl = 'http://127.0.0.1:7001/default/';

let servicePath = {
    getArticleList: ipUrl + 'getArticleList', // 首页接口
    getArticleById: ipUrl + 'getArticleById/', // 文章详情页接口
    getTypeInfo: ipUrl + 'getTypeInfo', //获取文章头部类别信息
}

export default servicePath;