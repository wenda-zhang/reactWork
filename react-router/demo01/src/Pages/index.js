import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom"

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list: [
                {cid: 123, title: '文达的技术-1'},
                {cid: 456, title: '文达的技术-2'},
                {cid: 789, title: '文达的技术-3'}
            ]
         }
         this.props.history.push("/home/")
        //  重定向到home页面
    }
    render() { 
        return ( 
            <div>
            <Redirect to="/home/">
            {/* 重定向到home页面 */}
            <h2>wendaStudy</h2>
            <ul>
                {
                    this.state.list.map((item, index) => {
                        return (
                        <li key={index.title}>
                            <Link to={'/list/' + item.cid}>
                                {item.title}
                            </Link>
                        </li>
                        )
                    })
                }
            </ul>
            </Redirect>
            </div>
         );
    }
}
 
export default Index;