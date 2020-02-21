import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

// All application data should be here
const myDailyTasks = [

{
    name: 'Go to the gym',
    id: 1528817077286,
    completed: false
  },
  {
    name: 'Make a hamburger',
    id: 1528817084358,
    completed: false
  },
  {
    name: 'Complete your project',
    id: 345678,
    completed: false
  }
];


class App extends React.Component {
  constructor() {
    super();
    this.state =
    {
      attributeOne: myDailyTasks,
        attributeTwo: {}
    };
  }

   addTodo = (task) => {
    if(e) e.preventDefault();
    const newTodo = {
      name: task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      attributeOne: [...this.state.attributeOne, newTodo]
    });
  };

  // this is a method of App
   toggleTodo = itemId => {
    console.log(itemId);

     const newTodoList =this.state.attributeOne.map(element => {
        console.log(element);
        if (itemId === element.id) {
          return {
            ...element,
            completed: !element.completed
          };
        } else {
          return element;
        }

        
      })
     this.setState({attributeOne: newTodoList})
  };

   clearAll = e => {
    e.preventDefault();
    console.log(this.state.attributeOne);
    this.setState({
      myDailyTasks: this.state.attributeOne.filter(element => element.completed === false)
    });
    console.log(this.state.attributeOne);
  };
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList attributeOne={this.state.attributeOne} toggleTodo ={this.toggleTodo} />
        <TodoForm addTodo={this.addTodo} />
        
       
      </div>
    );
  }
}

export default App;
