import { useDispatch, useSelector } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
} from "./redux/actions/updateCounter";

export function LikeDisLike() {
  const count = useSelector((state) => state.counterReducer.count);
  const dispatch = useDispatch();

  return (
    <div className="like-dislike">
      <div className="button-container">
        <button
          className="btn btn-success"
          onClick={() => dispatch(incrementCounter(count))}
        >
          Like
        </button>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(decrementCounter(count))}
        >
          DisLike
        </button>
      </div>
      <div style={{ margin: "10px", fontWeight: "bold" }}>Count:{count}</div>
    </div>
  );
}
