import React, { Component } from "react";
import TodoModel from "../models";
import { connect } from "react-redux";
import RootState from "../state";
import { addTodo } from "./actionCreators";

interface Props {
  todos: TodoModel[];
  addTodo(name: string): void;
}

class TodoList extends Component<Props, {}> {

  state = {
    todo: ""
  }

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: event.target.value })
  }

  onClick = () => {
    this.props.addTodo(this.state.todo);
  }

  render() {
    const { todos } = this.props;
    return (
      <div>
        <ul>
          {todos.map(({ name, completed }) => (
            <li>{`name: ${name}, completed: ${completed ? "Yes" : "No"}`}</li>
          ))}
        </ul>
        <br></br>
        <br></br>
        <br></br>
        <input type="text" onChange={this.onChange}/>
        <button>Add</button>
      </div>
    );
  }
}

function mapStateToProps({ todos }: RootState) {
  return {
    todos
  };
}
function mapDispatchToProps() {
  return {
    addTodo
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
