import React, {useState, useEffect} from 'react'
import 'antd/dist/antd.css'
import {Card, Input, Button, Spin, message} from 'antd'
import '../static/css/Login.css'
import servicePath from '../config/apiUrl'
import axios from 'axios'

function Login(props) {

    const [userName, setUserName] = useState('')
    const [passWord, setPassWord] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const checkLogin=()=>{
        setIsLoading(true);
        if(!userName) {
            message.error('用户名不能为空');
            setIsLoading(false);
            return false;
        } else if (!passWord) {
            message.error('密码不能为空');
            setIsLoading(false);
            return false;
        }

        let dataProps = {
            'userName': userName,
            'passWord': passWord
        }

        axios({
            method: 'post',
            url: servicePath.checkLogin,
            data: dataProps,
            withCredentials: true, //前后端共享session
        }).then(
            res=>{
                setIsLoading(false);
                if(res.data.data == '登录成功') {
                    console.log(res.data.openId);
                    sessionStorage.setItem('openId', res.data.openId);
                    props.history.push('/index');
                } else {
                    message.error('用户名或者密码错误')
                }
            }
        )
    }



    return(
        <div className="login-div">
            <Spin tip="Loding..." spinning={isLoading}>
                <Card title="JSda 博客后台系统" bordered={true} style={{width: 400, textAlign: 'center'}}>
                    <Input id="userName" size="large" placeholder="请输入你的用户名" onChange={(e) => {setUserName(e.target.value)}} />
                    <br/><br/>
                    <Input.Password id="passWord" size="large" placeholder="请输入你的密码" onChange={(e) => {setPassWord(e.target.value)}} />
                    <br/><br/>

                    <Button type="primary" size="large" block onClick={checkLogin}>登录</Button>
                </Card>
            </Spin>
        </div>
    )
}

export default Login;