import React from 'react'

export default function Todo(props) {
    return (
        <div>
  <p onClick = {() => props.toggleTodo(props.item.id)} >{props.item.name} </p>
        </div>
    )
}



// import React, { Component } from 'react'

// export class Todo extends Component {
//     constructor() {
//         super();
//         this.state = {
//             message: ""
//         }
//     }
//     render() {
//         return (
//             <p onClick ={this.props.toggleTodo(this.props.item.id)}> {this.props.item.name} </p>
//         )
//     }
// }

// export default Todo


