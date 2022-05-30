export const incrementCounter = (count) => {
  return {
    type: "increment",
    payload: count,
  };
};

export const decrementCounter = (count) => {
  return {
    type: "decrement",
    payload: count,
  };
};
