import React, { Component } from "react";
import TodoModel from "../models";
import { connect } from "react-redux";
import RootState from "../state";
import { addTodo } from "./actionCreators";

interface Props {
  todos: TodoModel[];
  addTodo(name: string): void;
}

interface State {
  name: string;

}

class TodoList extends Component<Props, State> {

  state = {
    name: ""
  }

  onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: event.target.value.toString() })
  }

  onClick = () => {
    this.props.addTodo(this.state.name);
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
        <br/>
        <br/>
        <br/>
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
