
import './App.css';

import {Task} from './Task';
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
        return (<Task taskName={task.taskName} id={task.id} deleteTask={deleteTask}/>
        );
      })}
     </div>
     </div>
    </div>
  );
  }

  


export default App;
