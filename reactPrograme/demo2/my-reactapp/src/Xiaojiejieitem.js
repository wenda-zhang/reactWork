import React, { Component } from 'react';
import PropTypes from 'prop-types';

class XiaojiejieItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.content !== this.props.content) {
            return true;
        } else {
            return false;
        }
    }

    render() { 
        console.log('子组件')
        return ( 
            <ul>
                <li onClick={this.handleClick.bind(this)} key={this.props.content}>{this.props.content}</li>
            </ul>
         );
    }
 
    handleClick() {
        this.props.deleteItem(this.props.index);
    }
}

XiaojiejieItem.propTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    index: PropTypes.number
}
 
export default XiaojiejieItem;