let nextTodoId = 0;

export const addTodo = (text) => {
  if (text === '') {
    alert("Please Enter Task");
    return {};
  }else{
    return {
      type: 'ADD_TODO',
      id: nextTodoId++,
      text
    };
  }
  // return {};
};

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SHOW_DATA',
    filter
  };
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};
