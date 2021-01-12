import React, { useState, useEffect } from 'react'
import { Row, Col, Menu, Icon } from 'antd'
import '../styles/components/header.css'
import Router from 'next/router'
import Link from 'next/Link'
import axios from 'axios'
import servicePath from '../config/apiUrl'

const Header = () => {

    const [navArray, setNavArray] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(servicePath.getTypeInfo).then(
                (res) => {
                    return res.data.data;
                }
            )
            setNavArray(result);
        };
        fetchData();
    }, []);

    const handleClick = (e) => {
        let key = e.key;
        key = key.charAt(key.length - 1);
        if (key == 0) {
            Router.push('/')
        } else {
            console.log(key);
            Router.push('/list?id=' + key)
        }
    }

    return (
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
                <Menu mode="horizontal" onClick={handleClick}>
                <Menu.Item key="0">
                    首页
                </Menu.Item>
                {
                    navArray.map((item) => {
                        return (
                            <Menu.Item key={item.id}>
                                {item.typeName}
                            </Menu.Item>
                        )
                    })
                }
                </Menu>
                </Col>
            </Row>
        </div>)
}

export default Header;