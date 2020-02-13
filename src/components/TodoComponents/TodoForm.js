import React, { Component } from 'react'

export class TodoForm extends React.Component {
    render() {
        return (
            <div>
                <form>
                <input name ='todo' place-holder ='enter your todo item here'/>
                <button className ='add-todo'>add todo</button>
                <button className ='clear-all'>Clear all</button>
                </form>
               
            </div>
        )
    }
}

export default TodoForm
