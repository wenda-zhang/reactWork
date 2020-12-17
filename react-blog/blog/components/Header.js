import React from 'react'
import { Row,Col,Menu,Icon } from 'antd'
import '../styles/components/header.css'

const Header =()=> (
    <div className="header">
        <Row type="flex" justify="center">
            <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                <span className="header-logo">
                    技术帅
                </span>
                <span className="header-text">
                    专注前端100年
                </span>
            </Col>
            <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                <Menu mode="horizontal">
                    <Menu.Item key="home">
                        {/* <Icon type="home"/> */}
                        首页
                    </Menu.Item>
                    <Menu.Item key="video">
                        {/* <Icon type="youtube"/> */}
                        视频
                    </Menu.Item>
                    <Menu.Item key="life">
                        {/* <Icon type="smile"/> */}
                        生活
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
)

export default Header;