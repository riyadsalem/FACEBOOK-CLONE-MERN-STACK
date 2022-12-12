// Reducer
const iniState = {
  logged: false,
};
const Logging = (state = iniState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        logged: false,
      };
    case "LOGOUT":
      return {
        ...state,
        logged: true,
      };
    default:
      return state;
  }
};

export default Logging;
