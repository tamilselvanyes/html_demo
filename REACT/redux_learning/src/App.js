import "./App.css";
import { LikeDisLike } from "./LikeDisLike";

export default function App() {
  return (
    <div className="App">
      <LikeDisLike />
      <ToDoList />
    </div>
  );
}

function ToDoList() {
  function handleSubmit(event) {
    console.log(event.target.value);
  }
  return (
    <div>
      <h2>To Do List</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter the task"></input>
      </form>
      <button className="btn btn-primary">Add to ToDoList</button>
    </div>
  );
}
