import React, { Component } from 'react'

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            message: ''
        }
    }
    handleChange = event => {
        event.preventDefault();
        this.setState({
            message: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTodo(this.state.message);
        this.setState({message:''})
    }
    render() {
        return (
            <div>
                <form>
                <input name='todo' place-holder='enter your todo item here' onChange={this.handleChange}/>
                <button className ='add-todo' onClick ={this.handleSubmit}>add todo</button>
                <button className ='clear-all' onClick = {this.props.clearAll}>Clear all</button>
                </form>
            </div>
        )
    }
}

export default TodoForm

