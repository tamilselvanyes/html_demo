const inititalState = { todoList: [] };

const toDoListReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return state.concat([action.text]);
    default:
      return state;
  }
};

export default toDoListReducer;
