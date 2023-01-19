import { useState } from "react";

// This is a Component
export const Task = (props) => {
  // let circleOutline = "white"
  const [circleOutline, setCircleOutLine] = useState("white");
  const [flag, setFlag] = useState(false)
  
  
  const circleColor = ()=>{
    circleOutline === "white" ? setCircleOutLine("green") : setCircleOutLine("white");
    setFlag(!flag)
  }
  
    return<div style={{backgroundColor: circleOutline === "white" ? "#393F49" : circleOutline}} className="task">
          <p className="task-name" >{props.taskName}</p>
          <svg  onClick={circleColor} className="check-mark" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512"><title>Complete Task</title><path fill={!flag ? circleOutline : "#393F49"} d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48ZM218,360.38,137.4,270.81l23.79-21.41,56,62.22L350,153.46,374.54,174Z"/></svg>
          <svg onClick={() => props.deleteTask(props.id)} className="trash-can" xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="none" ><title>Delete Task</title><path fill="#8D9196" d="M17.4 2.7h-4v-.6c0-1.2-.9-2.1-2-2.1H7.6a2 2 0 0 0-2 2v.7h-4c-.3 0-.5.3-.5.6s.2.5.5.5h1v12.4c0 1.5 1.2 2.8 2.8 2.8h8.2c1.6 0 2.9-1.3 2.9-2.8V3.8h1c.2 0 .4-.2.4-.5s-.2-.6-.5-.6zM6.6 2.1c0-.6.5-1 1-1h3.8c.5 0 1 .4 1 1v.6H6.6v-.6zm8.8 14c0 1-.8 1.8-1.8 1.8H5.4c-1 0-1.8-.7-1.8-1.7V3.8h11.8v12.4z"></path><path fill="#8D9196" d="M9.5 16c.3 0 .5-.2.5-.5V6.2c0-.3-.2-.5-.5-.5s-.5.2-.5.5v9.3c0 .3.2.6.5.6zM6 15.5c.4 0 .6-.3.6-.6V6.8c0-.3-.2-.5-.5-.5s-.6.2-.6.5v8.1c0 .3.3.6.6.6zM13 15.5c.2 0 .5-.3.5-.6V6.8c0-.3-.3-.5-.6-.5s-.5.2-.5.5v8.1c0 .3.2.6.5.6z"></path></svg>
        </div>;
}