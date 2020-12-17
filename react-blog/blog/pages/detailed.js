import Head from 'next/head'
import React from 'react'
import Link from 'next/head'
import { Button } from 'antd'
import '../styles/pages/comm.css'
import { Row,Col,Menu,Icon } from 'antd'
import Header from '../components/Header'


export default function Detailed() {
  return (
    <div className='main'>
      <Head>
        <title>My App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Row className="comm-main" type="flex" justify="center">

        <Col className="comm-left" xs={24} sm={24} md={10} lg={10} xl={10} >
          左侧
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={14} lg={8} xl={6} >
          右侧
        </Col>
      </Row>
    </div>
  )
}