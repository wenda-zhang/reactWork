import React, {useState, useEffect} from 'react';
import marked from 'marked';
import '../static/css/AddArticle.css';
import {Row, Col, Input, Select, Button, DatePicker, message} from 'antd';
import axios from 'axios';
import servicePath from '../config/apiUrl'

const {Option} = Select
const {TextArea} = Input

export default function AddArticle(props) {
    
    const [articleId,setArticleId] = useState(0)  // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
    const [articleTitle,setArticleTitle] = useState('')   //文章标题
    const [articleContent , setArticleContent] = useState('')  //markdown的编辑内容
    const [markdownContent, setMarkdownContent] = useState('预览内容') //html内容
    const [introducemd,setIntroducemd] = useState()            //简介的markdown内容
    const [introducehtml,setIntroducehtml] = useState('等待编辑') //简介的html内容
    const [showDate,setShowDate] = useState()   //发布日期
    const [updateDate,setUpdateDate] = useState() //修改日志的日期
    const [typeInfo ,setTypeInfo] = useState([]) // 文章类别信息
    const [selectedType,setSelectType] = useState('请选择类型') //选择的文章类别

    useEffect(()=>{
        getTypeInfo();//获得文章类别信息


        //从路由获取文章id
        let tmpId = props.match.params.id;
        if(tmpId) {
            setArticleId(tmpId);
            getArticleById(tmpId);
        }
    }, [])

    marked.setOptions({
        renderer: marked.Renderer(),
        gfm: true,
        pedantic: false,
        tables: true,
        breaks: false,
        smartList: true,
        smartypants: false,
    })

    const changeContent = (e)=> {
        setArticleContent(e.target.value);
        let html = marked(e.target.value);
        setMarkdownContent(html);
    }

    const changeIntroduce = (e) =>{
        setIntroducemd(e.target.value);
        let html = marked(e.target.value);
        setIntroducehtml(html);
    }

    const selectTypeHandler = (e) => {
        setSelectType(e);
    }

    const saveArticle=(e)=>{
        if(selectedType == '请选择类型') {
            message.error('必须选择文章类型');
            return false;
        } else if(!articleTitle) {
            message.error('文章名称不能为空');
            return false;
        } else if (!articleContent) {
            message.error('文章内容不能为空');
            return false;
        } else if (!introducemd) {
            message.error('文章简介不能为空');
            return false;
        } else if (!showDate) {
            message.error('发布日期不能为空');
            return false;
        }
        console.log(selectedType);
        let dataProps = {};
        dataProps.type_id = selectedType;
        dataProps.title = articleTitle;
        dataProps.article_Content = articleContent;
        dataProps.introduce = introducemd;
        let date = showDate.replace('-', '/');
        dataProps.addTime = (new Date(date).getTime())/1000;
        if(articleId == 0) {
            dataProps.view_count = 0;
            axios({
                method: 'post',
                url: servicePath.addAtricle,
                data: dataProps,
                withCredentials: true,
            }).then(
                res => {
                    setArticleId(res.data.insertId);
                    if(res.data.isSuccess) {
                        message.success('文章保存成功');
                    } else {
                        message.error('文章保存失败');
                    }
                }
            )
        } else {
            dataProps.id = articleId;
            axios({
                method: 'post',
                url: servicePath.updateArticle,
                data: dataProps,
                withCredentials: true,
            }).then(
                res => {
                    if(res.data.isSuccess) {
                        message.success('文章修改成功');
                    } else {
                        message.error('修改失败');
                    }
                }
            )
        }

    }

    const getTypeInfo = () => {
        axios({
            method: 'get',
            url: servicePath.getTypeInfo,
            withCredentials: true
        }).then(
            res=> {
                if(res.data.data == '没有登录') {
                    sessionStorage.removeItem('openId');
                    props.history.push('/');
                } else {
                    setTypeInfo(res.data.data);
                }
            }
        )
    }

    const getArticleById = (id)=>{
        axios(servicePath.getArticleById+id,{ 
            withCredentials: true,
            header:{ 'Access-Control-Allow-Origin':'*' }
        }).then(
            res=>{
                setArticleTitle(res.data.data[0].title)
                setArticleContent(res.data.data[0].article_content)
                let html=marked(res.data.data[0].article_content)
                setMarkdownContent(html)
                setIntroducemd(res.data.data[0].introduce)
                let tmpInt = marked(res.data.data[0].introduce)
                setIntroducehtml(tmpInt)
                setShowDate(res.data.data[0].addTime)
                setSelectType(res.data.data[0].typeId)
            }
        )
    }


    return (
        <div>
            <Row gutter={5}>
                <Col span={18}>
                    <Row gutter={10}>
                        <Col span={20}>
                            <Input placeholder="博客标题"
                                   value={articleTitle}
                                   size="large" 
                                   onChange={e=>{setArticleTitle(e.target.value)}}
                            />
                        </Col>
                        <Col span={4}>
                            &nbsp;
                            <Select defaultValue={selectedType} size="large" onChange={selectTypeHandler}>
                                {/* <Option value="1">视频教程</Option> */}
                                {typeInfo.map((item, index) => {
                                    return (
                                        <Option key={index} value={item.id}>{item.typeName}</Option>
                                    )
                                })}
                            </Select>
                        </Col>
                    </Row>
                    <br/><br/>
                    <Row gutter={10}>
                        <Col span={12}>
                            <TextArea 
                            className="markdown-content"
                            rows={35}
                            placeholder="文章内容" 
                            value={articleContent}
                            onChange={changeContent}
                            />
                        </Col>
                        <Col span={12}>
                            <div className="show-html"
                                dangerouslySetInnerHTML={{__html: markdownContent}}
                                >
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Row>
                        <Col span="24">
                            <Button size="large">
                                暂存文章
                            </Button>
                            &nbsp;&nbsp;
                            <Button type="primary" size="large" onClick={saveArticle}>
                                发布文章
                            </Button>
                            <br/><br/>
                        </Col>
                        <Col span="24">
                            <br/>
                            <TextArea
                                rows={4}
                                placeholder="文章简介"
                                value={introducemd}
                                onChange={changeIntroduce}
                            ></TextArea>
                            <br/><br/>
                            <div className="introduce-html"
                                 dangerouslySetInnerHTML={{__html: introducehtml}}>
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="date-select">
                                <DatePicker 
                                    onChange={(date, dateString)=>{setShowDate(dateString)}}
                                    placeholder="发布日期"
                                    size="large"
                                />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}