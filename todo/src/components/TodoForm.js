import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addTodo } from '../redux/actionCreators';

export class TodoForm extends Component {
  todoValueRef = React.createRef();

  addTodo = () => {
    this.props.addTodo(this.todoValueRef.current.value);
    this.todoValueRef.current.value = '';
  }

  render() {
    return (
      <div>
          <input ref={this.todoValueRef} type="text" />
          <button onClick={this.addTodo}>Add Todo</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state,
  };
}

export default connect(
  mapStateToProps,
  { addTodo },
)(TodoForm);
