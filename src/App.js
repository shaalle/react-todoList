
import './App.css';

import {useState} from "react"
function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [activeTasks, setActiveTasks] = useState(0)
  const date = new Date();
  const daysOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const dayName = daysOfWeek[date.getDay()];
  const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const todaysDate = `${dayName}, ${month} ${day}`;
  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask
    };

    if(newTask === "" || newTask === 0){
      alert('Please enter a task')
    }else{
      setTodoList([...todoList, task]);
      setActiveTasks(todoList.length + 1);
    }
  }

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) =>  task.id !== id);
    setTodoList(newTodoList);
    setActiveTasks(todoList.length - 1);
  }

  

  return(
    <div className="App">
      <div className="container">
        
      
     <div className="addTask">
     <p class="date">{todaysDate}</p>
     <p class="number-of-tasks">{activeTasks} Active Tasks</p>
      <input onChange={handleChange} placeholder="Enter a task..."/>
      <button onClick={addTask}>Add Task</button>
      
     </div>
     <div className="list">
      {todoList.map((task)=>{
        return<div className="task">
          
          <p>{task.taskName}</p>
          {/* <button onClick={() => deleteTask(task.id)}> */}
          <svg onClick={() => deleteTask(task.id)} class="trash-can" xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="none"><path fill="#8D9196" d="M17.4 2.7h-4v-.6c0-1.2-.9-2.1-2-2.1H7.6a2 2 0 0 0-2 2v.7h-4c-.3 0-.5.3-.5.6s.2.5.5.5h1v12.4c0 1.5 1.2 2.8 2.8 2.8h8.2c1.6 0 2.9-1.3 2.9-2.8V3.8h1c.2 0 .4-.2.4-.5s-.2-.6-.5-.6zM6.6 2.1c0-.6.5-1 1-1h3.8c.5 0 1 .4 1 1v.6H6.6v-.6zm8.8 14c0 1-.8 1.8-1.8 1.8H5.4c-1 0-1.8-.7-1.8-1.7V3.8h11.8v12.4z"></path><path fill="#8D9196" d="M9.5 16c.3 0 .5-.2.5-.5V6.2c0-.3-.2-.5-.5-.5s-.5.2-.5.5v9.3c0 .3.2.6.5.6zM6 15.5c.4 0 .6-.3.6-.6V6.8c0-.3-.2-.5-.5-.5s-.6.2-.6.5v8.1c0 .3.3.6.6.6zM13 15.5c.2 0 .5-.3.5-.6V6.8c0-.3-.3-.5-.6-.5s-.5.2-.5.5v8.1c0 .3.2.6.5.6z"></path></svg>
          {/* </button> */}
        </div>;
      })}
     </div>
     </div>
    </div>
  );
  }

  


export default App;
