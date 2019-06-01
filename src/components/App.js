import React, { Component } from 'react';

import { VisibleTodoList } from './VisibleTodoList';
import { AddTodo } from './AddTodo';

export class App extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
      </div>
    );
  }
}
