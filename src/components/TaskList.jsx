import React from "react";
import UserProfile from "./userProfile";

export const TaskList = ({tasks, headingText}) => {

  const [tasksList, setTasksList] = React.useState(tasks)

  return (
    <div className="task--list">
      <h2>{headingText}</h2>
      <ul style={{border: '1px solid black', padding: '10px', borderRadius: '5px'}}>
       {
        tasksList.map((task, index) => (
          <li key={index} style={{ display: "flex", justifyContent:'center', alignItems: "center", gap: "10px" }}>
          <p>{task.title}</p>
          <div style={{ display: "flex",  justifyContent:'center', alignItems: "center", gap: "10px" }}>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </li>
        ))
       }
      </ul>
    </div>
  );
};
