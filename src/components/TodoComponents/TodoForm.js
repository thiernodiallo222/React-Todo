import React from 'react'
import App from '../../App';

export default function TodoForm(props) {
    return (
       
             <div>
                <form>
                <input name='todo' place-holder='enter your todo item here' onChange={props.handleInputChange}/>
                <button className ='add-todo' onClick ={props.addTodo}>add todo</button>
                <button className ='clear-all' onClick = {props.clearAll}>Clear all</button>
                </form>
               
            </div>
    
    )
}
