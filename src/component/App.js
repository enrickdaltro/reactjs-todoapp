import React from "react";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import { async } from "q";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  render() {
    return (
      <div>
        <AddTodo addTodoFunction={this.addTodo}></AddTodo>
        <TodoList
          updateTodoFn={this.updateTodo}
          todos={this.state.todos}
        ></TodoList>
      </div>
    );
  }

  componentDidMount = () => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      const savedTodos = JSON.parse(todos);
      this.setState({ todos: savedTodos });
    } else {
      console.log("Nothing");
    }
  };

  addTodo = async todo => {
    await this.setState({
      todos: [
        ...this.state.todos,
        {
          text: todo,
          completed: false
        }
      ]
    });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  };

  updateTodo = async todo => {
    const newTodos = this.state.todos.map(_todo => {
      if (todo === _todo)
        return {
          text: todo.text,
          completed: !todo.completed
        };
      else return _todo;
    });
    await this.setState({ todo: newTodos });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  };
}

export default App;
