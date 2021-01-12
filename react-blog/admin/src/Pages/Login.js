import React, {useState, useEffect} from 'react'
import 'antd/dist/antd.css'
import {Card, Input, Button, Spin} from 'antd'
import '../static/css/Login.css'

function Login() {

    const [userName, setUserName] = useState('')
    const [passWord, setPassWord] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const checkLogin=()=>{
        setIsLoading(true);
        setTimeout(()=>{
            setIsLoading(false)
        }, 100)
    }

    return(
        <div className="login-div">
            <Spin tip="Loding..." spinning={isLoading}>
                <Card title="JSda blog system" bordered={true} style={{width: 400}}>
                    <Input id="userName" size="large" placeholder="Enter your userName" onChange={(e) => {setUserName(e.target.value)}} />
                    <br/><br/>
                    <Input.Password id="passWord" size="large" placeholder="Enter your passWord" onChange={(e) => {setPassWord(e.target.value)}} />
                    <br/><br/>

                    <Button type="primary" size="large" block onClick={checkLogin}>login in</Button>
                </Card>
            </Spin>
        </div>
    )
}

export default Login;