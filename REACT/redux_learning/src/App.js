import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
} from "./redux/actions/updateCounter";

export default function App() {
  const count = useSelector((state) => state.count);
  console.log(count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="button-container">
        <button
          className="btn btn-success"
          onClick={() => dispatch(incrementCounter(count))}
        >
          +
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(decrementCounter(count))}
        >
          -
        </button>
      </div>
      <div style={{ margin: "10px", fontWeight: "bold" }}>Count:{count}</div>
    </div>
  );
}
