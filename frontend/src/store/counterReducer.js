// Reducer
const iniState = {
  count: 0,
};
const Counter = (state = iniState, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        count: state.count + action.payload,
      };
    case "DEC":
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};

export default Counter;
