import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow: true,
         }
    }

    render() { 
        return ( 
            <div>
                <CSSTransition
                    in={this.state.isShow}
                    timeout={2000}
                    
                >
                <div className={this.state.isShow ? 'show' : 'hide'}>
                    boss级任务-孙悟空
                </div>
                </CSSTransition>
                <div>
                    <button onClick={this.toToggle.bind(this)}>召唤boss</button>
                </div>
            </div>
         );
    }

    toToggle() {
        this.setState({
            isShow: this.state.isShow?false:true
        })
    }

}
 
export default Boss;