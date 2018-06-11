import React, { Component } from 'react';

class TodoItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            completed: false
        }
        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState({
            completed: !this.state.completed
        })
    }
    
    render() {
        let {text} = this.props
        return(
            <div>
                <input type='checkbox' value={this.state.done} onClick={this.toggle}/>
                {this.state.completed ? <strike>{text}</strike>: text}
            </div>
        ) 
    }
}

export default TodoItem