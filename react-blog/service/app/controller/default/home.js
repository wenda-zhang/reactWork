'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // const { ctx } = this;
    // ctx.body = 'hi, egg';
    // let result = await this.app.mysql.get("blog_content", {});
    // console.log(result);
    // this.ctx.body = "api接口.....";
    this.ctx.body = "api hi";
  }

  async getArticleList() { //获取文章的列表

    let sql = 'SELECT article.id as id,'+
    'article.title as title,'+
    'article.introduce as introduce,'+
    //主要代码----------start
    "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s' ) as addTime,"+
    //主要代码----------end
    'article.view_count as view_count ,'+
    '.type.typeName as typeName '+
    'FROM article LEFT JOIN type ON article.type_id = type.Id'

    const results = await this.app.mysql.query(sql)
    this.ctx.body = { data: results }
  }

  async getArticleById() { //根据所传id，获得这个id下的文章内容
    let id = this.ctx.params.id;

    let sql = 'SELECT article.id as id,'+
    'article.title as title,'+
    'article.introduce as introduce,'+
    'article.article_content as article_content,'+
    "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s' ) as addTime,"+
    'article.view_count as view_count ,'+
    'type.typeName as typeName ,'+
    'type.id as typeId '+
    'FROM article LEFT JOIN type ON article.type_id = type.Id '+
    'WHERE article.id='+id

      const result = await this.app.mysql.query(sql)
      this.ctx.body = {data:result}
  }

  //得到导航栏类别名称与编号
  async getTypeInfo() {
    const result = await this.app.mysql.select('type');
    this.ctx.body = {data: result}
  }

  //根据类别id获得文章列表
  async getListById() {
    let id = this.ctx.params.id

    let sql = 'SELECT article.id as id,'+
    'article.title as title,'+
    'article.introduce as introduce,'+
    //主要代码----------start
    "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s' ) as addTime,"+
    //主要代码----------end
    'article.view_count as view_count ,'+
    '.type.typeName as typeName '+
    'FROM article LEFT JOIN type ON article.type_id = type.Id '+
    'WHERE type_id ='+id

    const results = await this.app.mysql.query(sql)
    this.ctx.body = { data: results }
  }

}

module.exports = HomeController;