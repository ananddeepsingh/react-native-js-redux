export const visibilityFilter = (state = 'renderData', action) => {
  switch (action.type) {
    case 'SHOW_DATA':
      return action.filter;
    default:
      return state;
  }
};
