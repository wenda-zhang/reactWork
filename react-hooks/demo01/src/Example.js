import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// class Clickdemo extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             num: 0,
//          }
//     }

//     render() { 
//         return ( 
//             <div>
//                 <span>点击了{this.state.num}次</span>
//                 <button onClick={this.clickBtn.bind(this)}>点我</button>
//             </div>
//          );
//     }

//     clickBtn() {
//         console.log('haha');
//         this.setState({
//             num: ++this.state.num,
//         })
//     }
// }
 
function Index() {

    useEffect(() => { // 周期函数，页面加载，函数执行
        console.log('进入index页面');
        return () => { // 解绑函数
            console.log('离开index页面')
        }
    }, []);

    return (
        <div>我是index页面</div>
    )
}

function List() {
    useEffect(() => {
        console.log('进入页面');
        return () => { // 解绑函数
            console.log('离开list页面')
        }
    }, [])
    return (
        <div>我是list页面</div>
    )
}


function Clickdemo() {
    const [ count, setCount ] = useState(0);

    useEffect(() => {
        console.log(`执行了${count}次`);
    })

    return (
        <div>
            <p>点击了{count}次</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>

            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list/">列表</Link></li>
                </ul>

                <Route path="/" exact component={Index}></Route>
                <Route path="/list/" component={List}></Route>

            </Router>

        </div>
    )
}

export default Clickdemo;