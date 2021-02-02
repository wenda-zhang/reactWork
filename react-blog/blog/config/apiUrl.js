let ipUrl = 'http://127.0.0.1:7001/default/';

let servicePath = {
    getArticleList: ipUrl + 'getArticleList', // 首页接口
    getArticleById: ipUrl + 'getArticleById/', // 文章详情页接口
    getTypeInfo: ipUrl + 'getTypeInfo', //获取文章头部类别信息
    getListById: ipUrl + 'getListById/', //根据列别id获取文章列表
    getWordList: ipUrl + 'getWordList', //获取留言板列表
}

export default servicePath;