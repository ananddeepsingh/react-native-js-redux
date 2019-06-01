import { connect } from 'react-redux';

import { TodoList } from './TodoList';
import { toggleTodo } from '../actions/actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) { 
    case 'renderData':
      return todos;
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos (
      state.todos, state.visibilityFilter
    )
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  };
};

const VisibleTodoList = connect (
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export { VisibleTodoList };

