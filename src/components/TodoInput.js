import React, { Component } from 'react';

class TodoInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newTodo : ''
        }
        this.addButtonClicked = this.addButtonClicked.bind(this)
    }

    addButtonClicked() {
        let {onAddTodo} = this.props
        onAddTodo(this.state.newTodo)
        this.setState({
            newTodo: ''
        })
    }
    render() {
        let {newTodo} = this.state
        return(
            <div>
                <h2>Add Todo</h2>
                <input value={newTodo} onChange={(e) => this.setState({newTodo: e.target.value})}/>
                <button onClick={this.addButtonClicked}>Add</button>
            </div>
        )
    }
}

export default TodoInput