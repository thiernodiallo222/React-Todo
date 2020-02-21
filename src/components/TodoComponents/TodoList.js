// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import Todo from './Todo';
import './Todo.css';
import React, { Component } from 'react'

class TodoList extends React.Component {
    constructor() {
        super()
        this.state = '';
     }
    render() {
         return (
        <div className='todo-list'>
                 {
                     this.props.attributeOne.map(element =>
                  
                         <Todo key={element.id} item={element} toggleTodo ={this.props.toggleTodo}/>
                        //  <Todo addTodo={this.props.addTodo} />
               
                )
                 }
                   
            </div>
    )
    }
}

export default TodoList
