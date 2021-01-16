'use strict';

const Controller = require('egg').Controller;

class MainController extends Controller {

    async index() {
        this.ctx.body = 'hi api admin'
    }

    async checkLogin() {
        let userName = this.ctx.request.body.userName;
        let passWord = this.ctx.request.body.passWord;
        const sql = "SELECT userName FROM admin_user WHERE userName = '"+userName+"' AND passWord = '"+passWord+"'";
        const res = await this.app.mysql.query(sql);
        if(res.length > 0) {
            let openId = new Date().getTime();
            this.ctx.session.openId={'openId': openId};
            this.ctx.body={'data': '登录成功', 'openId': openId};
        } else {
            this.ctx.body={'data': '登录失败'};
        }
    };

    async getTypeInfo(){
        const resType = await this.app.mysql.select('type');
        this.ctx.body={data: resType}
    };

    async addAtricle() {
        
        let tmpArticle = this.ctx.request.body; //取得前台的变量

        const result = await this.app.mysql.insert('article', tmpArticle); //向数据库中插入数据
        const insertSuccess = result.affectedRows === 1; //判断是否插入成功

        const insertId = result.insertId; //

        this.ctx.body = {   //接口返回给前端的数据
            isSuccess: insertSuccess,
            insertId: insertId,
        }

    };

    async updateArticle() {

        let tmpArticle = this.ctx.request.body;

        const result = await this.app.mysql.update('article', tmpArticle);
        const updateSuccess = result.affectedRows === 1;
        
        this.ctx.body = {
            isSuccess: updateSuccess,
        }

    };

    async getArticleList() {

        let sql = 'SELECT article.id as id,'+
        'article.title as title,'+
        'article.introduce as introduce,'+
        //主要代码----------start
        "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s' ) as addTime,"+
        //主要代码----------end
        'article.view_count as view_count ,'+
        '.type.typeName as typeName '+
        'FROM article LEFT JOIN type ON article.type_id = type.Id ' +
        'ORDER BY article.id DESC'

        const resList = await this.app.mysql.query(sql)
        this.ctx.body={list: resList}

    }


}

module.exports = MainController;