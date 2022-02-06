import './App.css';
import { useState } from 'react';

export default function App() {
  //Added a new default task
  const DEFAULT_TASK = ["Complete Zen Task", "Codekata problem", "Complete Webkata HTML", "Morning Jog"];
  //Initally no completed task so empty array
  const DEFAULT_COMPLETED_TASK = [];
  //Set states to inform react about the changes
  const [task_list, setTaskList] = useState(DEFAULT_TASK);
  //sets the Task name from the input text field
  const [new_task, setNewTask] = useState("");
  const [completed_task, setCompletedTask] = useState(DEFAULT_COMPLETED_TASK);

  //Function used to remove the task from the table in case of completion and deletion
  function RemoveTask(item) {
    let index = 0;
    for (let i = 0; i < task_list.length; i++) {
      if (task_list[i] === item)
        index = i;
    }
    let task_copy = [...task_list];
    task_copy.splice(index, 1);
    setTaskList(task_copy);


  }


  // Function used to add the task list to the table

  function DataCell({ item }) {
    return (
      <tbody>
        <tr>
          <td>
                <button type = "button" className = "btn btn-success" onClick={() => {
                  setCompletedTask([...completed_task, [item]])
                  RemoveTask(item)
                }}><i className="fa fa-check" aria-hidden="true"></i></button>
          </td>
          <td>{item}</td>
          <td><button className="btn btn-danger" onClick={() => RemoveTask(item)}><i className="fa fa-times" aria-hidden="true"></i></button></td>
        </tr>
      </tbody>
    );
  }

  //Table creation
  function TodoList({ task_list }) {
    return (
      <div className="todo-div">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>Completed</th>
              <th>Task</th>
              <th>Remove</th>
            </tr>
          </thead>
          {task_list.length > 0 ? task_list.map((item, index) => <DataCell key={index} item={item} />) : <tbody ><tr><td colSpan="3">No Pending Task</td></tr></tbody>}
        </table>


      </div>
    );
  }

  //this function handles the Enter click from the keyboard

  function onEnterClicked(event){

    if(event.code === "Enter"){
      setNewTask(event.target.value);
      //Should add the task when nothing is typied
      if(new_task === "")
        return;
      setTaskList([...task_list, new_task]);
      setNewTask("");
      //Clearing the value of the input and the newTask
      event.target.value = "";

    }else{
      return null;
    }
  }

  //Add task button click handling
  function onAddTaskClicked(){
    //Should add the task when nothing is typied
    if(new_task !== ""){
      setTaskList([...task_list, new_task]);
      //Clearing the value of the input and the newTask
      setNewTask("");
      let input_task =document.getElementById("task-text");
      if(input_task != null){
        input_task.value ="";
      }
    }else{
      return null;
    }
    
  }

  //Displays the completed task
  function CompletedTaskList({ list }) {

    return (
      <div className = "completed-list">
        <h3 >Completed Task</h3>
        <ul>
          {list.map((item,index) => <li key = {index}>{item}</li>)}
        </ul>
      </div>
    );

  }
  return (
    <div className="App">
      <h1>TODO Task List Using React</h1>
       <p>Enter the task and Add using button or Enter key, once Completed click the green it will create a list of task completed or click the red to remove the task from the list.</p>
      <input type="text" id = "task-text" className="form-control" placeholder="Type New Task" onKeyUp ={(event)=> onEnterClicked(event)} onChange={(event) => setNewTask(event.target.value)} ></input>
      <button className="btn btn-primary" onClick={() => onAddTaskClicked()}>Add Task</button>

      < TodoList task_list={task_list} />
      {(completed_task.length > 0) ? < CompletedTaskList list={completed_task} /> : ""}
    </div>
  );
}






