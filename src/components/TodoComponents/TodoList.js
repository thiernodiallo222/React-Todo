// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo';
import './Todo.css';

export default function TodoList(props) {
    return (
        <div className='todo-list'>
            {
                props.attributeOne.map(element =>
                    <p className='todo-element'>
                      <Todo key={element.id} item = {element}/>  
                  </p>
                
                )
            }
                
                
            </div>
    )
}
