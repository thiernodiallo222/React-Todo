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
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state =
    {
      attributeOne: myDailyTasks,
      message: ''

    };
  }

  // All handler functions should live here as well
// Class methods to update state
  handleInputChange = event =>{
    event.preventDefault();
    this.setState({message: event.target.value });
  }

  
   addTodo = (e, task) => {
    e.preventDefault();

    const newTodo = {
      name: task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      myDailyTasks: [...this.state.myDailyTasks, newTodo]
    });
  };

  // this is a method of App
   toggleTodo = itemId => {
    console.log(itemId);

    this.setState({
      myDailyTasks: this.state.myDailyTasks.map(element => {
        console.log(element);
        if (itemId === element.id) {
          return {
            ...element,
            completed: !element.completed
          };
        }

        return element;
      })
    });
  };

   clearAll = e => {
    e.preventDefault();
    console.log(this.state.myDailyTasks);
    this.setState({
      // returns the items that haven't been completed and purges
      // the ones that have been purchased
      myDailyTasks: this.state.myDailyTasks.filter(element => element.completed === false)
    });
    console.log(this.state.myDailyTasks);
  };
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList attributeOne={this.state.attributeOne} />
        <TodoForm item ={this.state.addTodo} />
        {/* <Todo message={this.state.message} /> */}
        {/* <Todo /> */}
      </div>
    );
  }
}

export default App;
