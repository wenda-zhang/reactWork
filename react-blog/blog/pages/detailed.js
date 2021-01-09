import Head from 'next/head'
import React from 'react'
import Link from 'next/head'
import { Button } from 'antd'
import '../styles/pages/comm.css'
import { Row, Col, Menu, Icon, Breadcrumb, Affix } from 'antd'
import axios from 'axios'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import '../styles/pages/detailed.css'
import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css' 
import servicePath from '../config/apiUrl'


export default function Detailed(props) {

  const renderer = new marked.Renderer();

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartlists: true,
    highlight: function(code) {
      return hljs.highlightAuto(code).value;
    } 
  });

  let html = marked(props.article_content);

  // let markdown = 
  //    '\n' +
  //   '# P01:课程介绍和环境搭建\n' +
  //   '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  //   '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
  //   '**这是加粗的文字**\n\n' +
  //   '*这是倾斜的文字*`\n\n' +
  //   '***这是斜体加粗的文字***\n\n' +
  //   '~~这是加删除线的文字~~ \n\n' +
  //   '\`console.log(111)\` \n\n' +
  //   '# p02:来个Hello World 初始Vue3.0\n' +
  //   '> aaaaaaaaa\n' +
  //   '>> bbbbbbbbb\n' +
  //   '>>> cccccccccc\n' +
  //   '***\n\n\n' +
  //   '# p03:Vue3.0基础知识讲解\n' +
  //   '> aaaaaaaaa\n' +
  //   '>> bbbbbbbbb\n' +
  //   '>>> cccccccccc\n\n' +
  //   '# p04:Vue3.0基础知识讲解\n' +
  //   '> aaaaaaaaa\n' +
  //   '>> bbbbbbbbb\n' +
  //   '>>> cccccccccc\n\n' +
  //   '#5 p05:Vue3.0基础知识讲解\n' +
  //   '> aaaaaaaaa\n' +
  //   '>> bbbbbbbbb\n' +
  //   '>>> cccccccccc\n\n' +
  //   '# p06:Vue3.0基础知识讲解\n' +
  //   '> aaaaaaaaa\n' +
  //   '>> bbbbbbbbb\n' +
  //   '>>> cccccccccc\n\n' +
  //   '# p07:Vue3.0基础知识讲解\n' +
  //   '> aaaaaaaaa\n' +
  //   '>> bbbbbbbbb\n' +
  //   '>>> cccccccccc\n\n' +
  //   '``` var a=11; ```'

  return (
    <div className='main'>
      <Head>
        <title>My App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Row className="comm-main" type="flex" justify="center">

        <Col className="comm-left" xs={24} sm={24} md={10} lg={10} xl={10} >
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href="/">视频列表</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href="/">文章名</a></Breadcrumb.Item>

              </Breadcrumb>
            </div>
            <div>
              <div className="detailed-title">
                react实战操练-技术帅blog
              </div>
              <div className="list-icon center">
                <span>2020-12-19</span>
                <span>视频教程</span>
                <span>6666人</span>
              </div>
              <div className="detailed-content"
                dangerouslySetInnerHTML={{__html: html}}
              >
                {/* <ReactMarkdown 
                  source={html}
                  escapeHtml={false}
                /> */}
              </div>
            </div>
          </div>
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={14} lg={8} xl={6} >
          <Author />
          <Advert />
          {/* <Affix offsetTop={5}>
          <div className="detailed-nav comm-box">
            <div className="nav-title">文章目录</div>
            <MarkNav
              className="article-menu"
              source={html}
              ordered={false}
            />
          </div>
          </Affix> */}
        </Col>
      </Row>

      <Footer />
    </div>
  )
}

Detailed.getInitialProps = async(context)=>{

  console.log(context.query.id)
  let id =context.query.id
  const promise = new Promise((resolve)=>{

    axios(servicePath.getArticleById + id).then(
      (res)=>{
        // console.log(title)
        resolve(res.data.data[0])
      }
    )
  })

  return await promise
}