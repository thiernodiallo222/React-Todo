// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo';

export default function TodoList(props) {
    return (
        <div className='todo-list'>
            {
              props.attributeOne.map(element =>
                <Todo key={element.id} name = {props.attributeOne.name}/>
                )
            }
                
                
            </div>
    )
}
