// Action
const Increment = (num) => {
  return {
    type: "INC",
    payload: num ? num : 1,
  };
};

const Decrement = (num) => {
  return {
    type: "DEC",
    payload: num ? num : 1,
  };
};

const Login = () => {
  return {
    type: "LOGIN",
  };
};

const Logout = () => {
  return {
    type: "LOGOUT",
  };
};

export { Increment, Decrement, Login, Logout };
