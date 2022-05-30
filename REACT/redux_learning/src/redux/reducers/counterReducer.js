const inititalState = { count: 0 };

const counterReducer = (state = inititalState, action) => {
  console.log(action);
  switch (action.type) {
    case "increment": {
      return { ...state, count: action.payload + 1 };
    }
    case "decrement": {
      return { ...state, count: action.payload - 1 };
    }

    default:
      return state;
  }
};

export default counterReducer;
