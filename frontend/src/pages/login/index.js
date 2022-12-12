import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement, Login, Logout } from "../../store/actions";

const App = () => {
  const count = useSelector((state) => state.counter.count);
  const isLogged = useSelector((state) => state.logged.logged);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        {isLogged ? (
          <button onClick={() => dispatch(Logout())}>Logout</button>
        ) : (
          <button onClick={() => dispatch(Login())}>Login</button>
        )}
        <h1>{count}</h1>
        <button onClick={() => dispatch(Increment())}>+</button>
        <button onClick={() => dispatch(Decrement())}>-</button>
      </div>
    </>
  );
};

export default App;
