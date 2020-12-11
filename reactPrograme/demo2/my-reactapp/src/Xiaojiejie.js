import React, {Component} from 'react'
import axios from 'axios'
import './style.css'
import XiaojiejieItem from './Xiaojiejieitem'
import Boss from './boss'
class Xiaojiejie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: [],
            toChild: '我是传值',
        }
    }

    // Initialization:初始化阶段。
    // Mounting: 挂在阶段。
    // Updation: 更新阶段。
    // Unmounting: 销毁阶段。

    // componentWillMount(){
    //     console.log('componentWillMount----组件将要挂载到页面的时刻')
    // }

    // componentDidMount(){
    //     console.log('componentDidMount----组件挂载完成的时刻执行')
    // }

    componentDidMount() {
        axios.get('https://www.easy-mock.com/mock/5fb777cf3f90e10d966463e1/reactDemo1/xiaojiejie')
            .then((res) => {
                console.log('获取成功：'+JSON.stringify(res));
                this.setState({
                    list: res.data.data,
                })
            })
            .catch((error) =>{
                console.log('数据获取失败：'+error);
            })
    }

    render() {
        console.log('render---组件挂载中.......')
        return (
            <div>
                <div><input className="input" value = {this.state.inputValue} onChange={this.inputChange.bind(this)} ref={(input) => {this.input = input}}/><button onClick={this.addList.bind(this)}>增加服务</button></div>
                <Boss />
                <ul ref={(ul)=>{this.ul=ul}}>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                    <XiaojiejieItem content={item} key={index + item} index={index} deleteItem={this.deleteItem.bind(this)}/>
                                )
                        })
                    }
                </ul>
            </div>
        )
    }

    // inputChange(e) {
    //     this.setState({
    //         inputValue: e.target.value
    //     })
    // }

    inputChange() {
        this.setState({
            inputValue: this.input.value
        })  
    }

    addList(e) {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        },()=>{
            console.log(this.ul.querySelectorAll('li').length);
        })
    }

    deleteItem(index) {
        let list = this.state.list;
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }

}

export default Xiaojiejie;